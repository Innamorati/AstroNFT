import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContent from "../components/CartContent";
import "../styles/StyleCheckbox.css";
import {
  ContainerCart,
  HeaderCart,
  CardProducts,
  CardProducts2,
  ImageProducts,
  TitleProducts,
  DivTitle,
  CategoryProducts,
  PrecioEth,
  IconEth,
  Ether,
  PrecioArg,
  ArsMoney,
  Method,
  BtnCart,
  ButtonMethod,
  ImgAstro,
  DivGeneral,
  HeaderCart2,
  DivTitlePay,
  ImagePay,
} from "../styles/StyleCartProducts";
import { connect } from "react-redux";
import PayPal from "../components/PayForm/PayPal";

export default function Cart() {
  return (
    <DivGeneral>
      <ContainerCart>
        <HeaderCart>Cart</HeaderCart>
        <CartContent></CartContent>
        <HeaderCart2>Method</HeaderCart2>
        <Method>
          <CardProducts2>
            <ImagePay
              style={{
                backgroundImage: `url('${
                  process.env.PUBLIC_URL + "/assets/MercadoPago.png"
                }')`,
              }}
            />
            <DivTitlePay>
              <TitleProducts>MercadoPago</TitleProducts>
              <CategoryProducts>Debit or Credit Card</CategoryProducts>
              <CategoryProducts>PagoFácil or RapiPago</CategoryProducts>
            </DivTitlePay>
            <DivTitlePay>
              <input
                className="InputCheckBox"
                type="radio"
                name="option"
                id="box1"
              />
              <label for="box1"></label>
            </DivTitlePay>
          </CardProducts2>
          <CardProducts2>
            <ImagePay
              style={{
                backgroundImage: `url('${
                  process.env.PUBLIC_URL + "/assets/Paypal.png"
                }')`,
              }}
            />
            <DivTitlePay>
              <TitleProducts>Paypal</TitleProducts>
              <CategoryProducts>Debit or Credit Card</CategoryProducts>
              <CategoryProducts>Paypal Credit</CategoryProducts>
            </DivTitlePay>
            <DivTitlePay>
              <input
                className="InputCheckBox"
                type="radio"
                name="option"
                id="box1"
              />
              <label for="box1"></label>
            </DivTitlePay>
          </CardProducts2>
        </Method>
        <ButtonMethod>
          <BtnCart>Purchase</BtnCart>
        </ButtonMethod>
        <PayPal sx={{marginTop:"1rem", fontSize:"large", width:"500px"}} /> 
      </ContainerCart>
      <ImgAstro
        style={{
          backgroundImage: `url('${
            process.env.PUBLIC_URL + "/assets/AstroCart.png"
          }')`,
        }}
      />
    </DivGeneral>
  );
}
