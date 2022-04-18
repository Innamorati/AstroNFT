import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom"
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js"; //Importamos el npm
import { connect } from "react-redux";
import UserActions from "../../redux/actions/UserActions";

function PayPal(props) {
    const [success, setSuccess] = useState(false);
    const [orderID, setOrderID] = useState(false);
    const [ErrorMessage, setErrorMessage] = useState("");
    const [products, setProducts] = useState([])


    useEffect(() => {

        PayPalCheckOut()//LLamo al cdn de PayPal cada vez que cambia el carrito
        let cartItems = [];
        props.user.user?.basket.map((item) => {
            cartItems.push({
                name: item.nftId.name,
                description: "The best item ever",
                sku: "xyz-2654",
                unit_amount: {
                    currency_code: "USD",
                    value: "100.00"
                },
                quantity: "1"
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
                    value: "230.00",
                    breakdown: {
                        item_total: {
                            currency_code: "USD",
                            value: "180.00"
                        },
                        shipping: {
                            currency_code: "USD",
                            value: "30.00"
                        },
                        handling: {
                            currency_code: "USD",
                            value: "10.00"
                        },
                        tax_total: {
                            currency_code: "USD",
                            value: "20.00"
                        },
                        shipping_discount: {
                            currency_code: "USD",
                            value: "10"
                        }
                    }
                },
                items: [{
                    name: "T-Shirt",
                    description: "Green XL",
                    sku: "sku01",
                    unit_amount: {
                        currency_code: "USD",
                        value: "90.00"
                    },
                    tax: {
                        currency_code: "USD",
                        value: "10.00"
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
                    tax: {
                        currency_code: "USD",
                        value: "5.00"
                    },
                    quantity: "2",
                    category: "PHYSICAL_GOODS"
                }
                ],
                shipping: {
                    method: "United States Postal Service",
                    address: {
                        name: {
                            full_name: "John",
                            surname: "Doe"
                        },
                        address_line_1: "123 Townsend St",
                        address_line_2: "Floor 6",
                        admin_area_2: "San Francisco",
                        admin_area_1: "CA",
                        postal_code: "94107",
                        country_code: "US"
                    }
                }
            }]

        });
    };
    const onApprove = (data, actions) => { //recibo el resultado de mi operacion
        return actions.order.capture()
            .then(function (details) {
                const { payer } = details;
                setSuccess(true);
                console.log('Capture result', details, JSON.stringify(details, null, 2)); //veo los datos en consola
                var transaction = details.purchase_units[0].payments.captures[0];
                alert('Transaction ' + transaction.status + ': ' + transaction.id + '\n\nSee console for all available details');
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
