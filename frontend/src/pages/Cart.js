import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import Total from "../components/Total";
import "../styles/StyleCheckbox.css";
import {
  ContainerCart,
  HeaderCart,
  CardProducts2,
  CardProducts,
  TitleProducts,
  CategoryProducts,
  Method,
  BtnCart,
  ButtonMethod,
  ImgAstro,
  DivGeneral,
  HeaderCart2,
  DivTitlePay,
  ImagePay,
  ImageProducts,
  DivTitle,
  PrecioArg,
  PrecioEth,
  Ether,
  ArsMoney,
  ButtonMethod2,
  BtnCart2,
} from "../styles/StyleCartProducts";
import { connect } from "react-redux";
import PayPal from "../components/PayForm/PayPal";

import ProductActions from "../redux/actions/ProductActions";
import UserActions from "../redux/actions/UserActions";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link as LinkRouter } from "react-router-dom";

function Cart(props) {
  console.log(props.user?.user?.basket);

  const [ETH, setETH] = useState();
  const [BNB, setBNB] = useState();
  const deleteNft = (id) => {
    props.delteNftToBasket(id);
    console.log(id);
  };
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
  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  useEffect(() => {
    getETH();
    getBNB();
  }, []);

  const Price = [];

  props.user?.user?.basket.map((item) => {
    if (item.nftId.token === "BNB") {
      Price.push(Number(financial(item.nftId.price * BNB?.binancecoin.usd)));
    } else if (item.nftId.token === "ETH") {
      Price.push(Number(financial(item.nftId.price * ETH?.ethereum.usd)));
    }
  });
  /*   console.log(Price.reduce((a, b) => a + b, 0));
   */
  return (
    <DivGeneral>
      <ContainerCart>
        <HeaderCart>Cart</HeaderCart>
        {props.user?.user?.basket.length !== 0 ? (
          props.user?.user?.basket.map((products) => (
            <>
              <CardProducts>
                <ImageProducts
                  style={{
                    backgroundImage: `url('${products.nftId.file}')`,
                    backgroundPosition: "center center",
                  }}
                />
                <DivTitle>
                  <TitleProducts>{products.nftId.name}</TitleProducts>
                  <CategoryProducts>{products.nftId.category}</CategoryProducts>
                </DivTitle>
                <PrecioArg>
                  <PrecioEth>
                    <Ether>
                      {products.nftId.price} {products.nftId.token}
                    </Ether>
                  </PrecioEth>
                  <ArsMoney>
                    ≈
                    {products.nftId.token === "ETH"
                      ? financial(products.nftId.price * ETH?.ethereum.usd) +
                        " "
                      : financial(products.nftId.price * BNB?.binancecoin.usd) +
                        " "}
                    USD
                  </ArsMoney>
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
                  onClick={() => deleteNft(products._id)}
                />
              </CardProducts>
            </>
          ))
        ) : (
          <CardProducts>
            <ImageProducts
              style={{
                backgroundImage: `url('${
                  process.env.PUBLIC_URL + "/assets/errorProducts.png"
                }')`,
                backgroundPosition: "center center",
              }}
            />
            <DivTitle>
              <TitleProducts>Add nfts to cart</TitleProducts>
              <CategoryProducts></CategoryProducts>
            </DivTitle>
            <PrecioArg>
              <LinkRouter to={`/products`}>
                <ButtonMethod2>
                  <BtnCart2>Go to Store</BtnCart2>
                </ButtonMethod2>
              </LinkRouter>
            </PrecioArg>
          </CardProducts>
        )}
        <Total price={Price.reduce((a, b) => a + b, 0)} />

        <HeaderCart2>Method</HeaderCart2>
        <Method>
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
        <PayPal price={Price.reduce((a, b) => a + b, 0).toFixed(2)} sx={{marginTop:"1rem", fontSize:"large", width:"500px"}} /> 
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
const mapDispatchToProps = {
  getAllProducts: ProductActions.getAllProducts,
  delteNftToBasket: UserActions.delteNftToBasket,
};
const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
    allProducts: state.ProductReducer.allProducts,
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
