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
    console.log(...products)

    console.log(1, orderID);
    console.log(2, success);
    console.log(3, ErrorMessage);

    useEffect(() => {

        PayPalCheckOut()//LLamo al cdn de PayPal cada vez que cambia el carrito
        // let cartItems = [];
        // props.user.user?.basket.map((item) => {
        //     cartItems.push({
        //         name: item.nftId.name,
        //         description: "The best item ever",
        //         sku: "xyz-2654",
        //         unit_amount: {
        //             currency_code: "USD",
        //             value: "100.00"
        //         },
        //         quantity: "1"
        //     })
        // })
        // setProducts(cartItems)

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
        return actions.order.create({
            purchase_units: [
                {
                    description: "items",
                    amount: {
                        value: 50,
                    },
                },
            ], 
            items: products

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
