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
  ButtonMethod2,
  BtnCart2,
} from "../styles/StyleCartProducts";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";
import React, { useEffect } from "react";
import ProductActions from "../redux/actions/ProductActions";
import UserActions from "../redux/actions/UserActions";
import { useState } from "react";
import axios from "axios";
import { Link as LinkRouter } from "react-router-dom";

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

  return <></>;
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
