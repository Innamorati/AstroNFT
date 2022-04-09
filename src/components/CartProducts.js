import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
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

const CartProducts = () => {
  return (
    <DivGeneral>
      <ContainerCart>
        <HeaderCart>Cart</HeaderCart>
        <CardProducts>
          <ImageProducts
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/image1.png"
              }')`,
              backgroundPosition: "center center",
            }}
          />
          <DivTitle>
            <TitleProducts>One Astro #1715 by GIIO</TitleProducts>
            <CategoryProducts>CATEGORY: Premium TYPE: Image</CategoryProducts>
          </DivTitle>
          <PrecioArg>
            <PrecioEth>
              {
                <IconEth
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/IconETH.png"
                    }')`,
                  }}
                />
              }
              <Ether>0.121 ETH</Ether>
            </PrecioEth>
            <ArsMoney>≈ ARS$ 46,828.55</ArsMoney>
          </PrecioArg>
          <FontAwesomeIcon
            style={{
              width: "35px",
              height: "35px",
              cursor: "pointer",
              marginRight: "1rem",
              color: "#45A9F2",
              padding: "1rem",
            }}
            icon={faXmark}
          />
        </CardProducts>
        <CardProducts>
          <ImageProducts
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/image1.png"
              }')`,
              backgroundPosition: "center",
            }}
          />
          <DivTitle>
            <TitleProducts>One Astro #1715 by GIIO</TitleProducts>
            <CategoryProducts>CATEGORY: Premium TYPE: Image</CategoryProducts>
          </DivTitle>
          <PrecioArg>
            <PrecioEth>
              {
                <IconEth
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/IconEth.png"
                    }')`,
                  }}
                />
              }
              <Ether>0.121 ETH</Ether>
            </PrecioEth>
            <ArsMoney>≈ ARS$ 46,828.55</ArsMoney>
          </PrecioArg>
          <FontAwesomeIcon
            style={{
              width: "35px",
              height: "35px",
              cursor: "pointer",
              marginRight: "1rem",
              color: "#45A9F2",
              padding: "1rem",
            }}
            icon={faXmark}
          />
        </CardProducts>
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
              <input type="radio" name="option" id="box1" />
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
              <input type="radio" name="option" id="box1" />
              <label for="box1"></label>
            </DivTitlePay>
          </CardProducts2>
        </Method>
        <ButtonMethod>
          <BtnCart>Purchase</BtnCart>
        </ButtonMethod>
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
};

export default CartProducts;
