import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; //Importamos el npm
import { connect } from "react-redux";
import UserActions from "../../redux/actions/UserActions";
import axios from 'axios';

function PayPal(props) {
    const [success, setSuccess] = useState(false);
    const [orderID, setOrderID] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [products, setProducts] = useState([])
    const [ETH, setETH] = useState();
    const [BNB, setBNB] = useState();


    const getETH = async () => {
        try {
            const res = await axios.get(
                "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
            );
            setETH(res.data);
        } catch (error) {
            console.error(error);
        }
    };
    const getBNB = async () => {
        try {
            const res = await axios.get(
                "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
            );
            setBNB(res.data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getBNB();
        getETH();
    }, []);

    function calcPrice(token, price) {
        if(token === 'ETH') {
            return financial(price * ETH?.ethereum.usd)
        } else if (token === 'BNB') {
            return financial(price * BNB?.binancecoin.usd)
        }
    }

    function financial(x) {
        return Number.parseFloat(x).toFixed(1);
    }
    console.log(products, props.price)

    console.log(1, orderID);
    console.log(2, success);
    console.log(3, ErrorMessage);

    useEffect(() => {

        PayPalCheckOut()//LLamo al cdn de PayPal cada vez que cambia el carrito
        let cartItems = [];
        props.user.user?.basket.map((item, index) => {
            cartItems.push({
                name: item.nftId.name,
                description: item.nftId.fileType,
                sku: `sku00${index + 1}`,
                unit_amount: {
                    currency_code: "USD",
                    value: calcPrice(item.nftId.token, item.nftId.price)
                },
                quantity: "1",
                category: "DIGITAL_GOODS"
            })
        })
        setProducts(cartItems)

    }, [props.user.user?.basket]);



    const initialOptions = { // Genero las opciones para enviarle al CDN
        "client-id": "AWLF3b7cwmk64Z3dF4hhC2mBRxT7ypZdfA-k3t_JWIcillTlMTEOhrEEXI2oYqYh6gOwfGGJpFW2UDYB",
        currency: "USD", //Establesco la moneda
        intent: "capture", //Estableco el metodos este autoriza la operacion y captura los fondos

    };
    // let productsId = basket.map(items => items.id)

    const createOrder = (data, actions) => {
        //Creo la orden de con los datos, esta puede ser general o con detalle de items

        console.log(data)
        console.log(actions)
        return actions.order.create({
            // purchase_units: [
            //     {
            //         description: "items",
            //         amount: {
            //             value: 50,
            //         },
            //     },
            // ], 

            purchase_units: [{
                reference_id: "PUHF",
                description: "Sporting Goods",
                custom_id: "CUST-HighFashions",
                soft_descriptor: "HighFashions",
                amount: {
                    currency_code: "USD",
                    value: props.price,
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: props.price
                        },
                    }
                },
                items: products/* [{
                    name: "T-Shirt",
                    description: "Green XL",
                    sku: "sku01",
                    unit_amount: {
                        currency_code: "USD",
                        value: "90.00"
                    },
                    quantity: "1",
                    category: "PHYSICAL_GOODS"
                },
                {
                    name: "Shoes",
                    description: "Running, Size 10.5",
                    sku: "sku02",
                    unit_amount: {
                        currency_code: "USD",
                        value: "45.00"
                    },
                    quantity: "2",
                    category: "PHYSICAL_GOODS"
                }
                ] */,
            }]

        });
    };
    const onApprove = (data, actions) => { //recibo el resultado de mi operacion
        console.log(data)
        return actions.order.capture()
            .then(function (details) {
                const { payer } = details;
                setSuccess(true);
                console.log('Capture result', details, JSON.stringify(details, null, 2)); //veo los datos en consola
                var transaction = details.purchase_units[0].payments.captures[0];
                alert('Transaction ' + transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
                console.log(details)
                setOrderID(transaction.id)
            });
    };
    const onCancel = (data) => {
        console.log('You have cancelled the payment!', data);
    }

    const onError = (data, actions) => { //Capturo error en caso de que exista
        setErrorMessage("An Error occured with your payment ");
    };

    const PayPalCheckOut = () => {
        return (
            <PayPalScriptProvider options={initialOptions}> {/*Inicializo el CDN*/}

                {/*Inicializo los botones*/}
                <PayPalButtons
                    createOrder={createOrder}
                    onApprove={onApprove}
                    onError={onError}
                    onCancel={onCancel}
                />
            </PayPalScriptProvider>
        )
    }
    return (
        <PayPalCheckOut />
    );
}

const mapStateToProps = (state) => {
    return {
        user: state.UserReducer.user,
    };
};

export default connect(mapStateToProps, null)(PayPal)
