import {
  CardProducts,
  ImageProducts,
  TitleProducts,
  DivTitle,
  CategoryProducts,
  PrecioEth,
  IconEth,
  Ether,
  PrecioArg,
  ArsMoney,
} from "../styles/StyleCartProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import ProductActions from "../redux/actions/ProductActions";
import UserActions from "../redux/actions/UserActions";
import { useState } from "react";
import axios from "axios";
function CartContent(props) {
  console.log(props);
  const products = [];
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

  return (
    <>
      {props.user?.user?.basket.length !== 0
        ? props.user?.user?.basket.map((products) => (
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
                    ? financial(products.nftId.price * ETH?.ethereum.usd) + " "
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
          ))
        : ""}
    </>
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
export default connect(mapStateToProps, mapDispatchToProps)(CartContent);
