import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
import ErrorProducts from "./ErrorProducts";
import { connect } from "react-redux";
import {
  Title,
  ItemProductImage,
  ItemProductVideo,
  PriceUser,
  UserName,
  UserImg,
  Eth,
  ConteinerProduct,
  IconEth,
  DivPriceETH,
  ArsMadeBy,
  DivArs,
  ViewMore,
  AddCart,
  DivButtons,
  ConteinerUser,
} from "../styles/StyledProducts";
import ProductActions from "../redux/actions/ProductActions";
import UserActions from "../redux/actions/UserActions";
import { useState } from "react";
import axios from "axios";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useNavigate } from "react-router-dom";
import { useDispatch } from 'react-redux'

//ESTILOS DE PRODUCTS Y PRODUCT ESTAN EN UNICO COMPONENTE DE ESTILOS
// ARCHIVO STYLED PRODUCTS

function Product(props) {

  let navigate = useNavigate();
  const dispatch = useDispatch()
  const [BTC, setBTC] = useState();
  const [ETH, setETH] = useState();
  const [BNB, setBNB] = useState();

  console.log(BTC);
  console.log(ETH);
  console.log(BNB);

  const getBTC = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
      );
      setBTC(res.data);
    } catch (error) {
      console.error(error);
    }
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

  useEffect(() => {
    props.getAllProducts();
    getBTC();
    getETH();
    getBNB();
  }, []);


  const addBasket = (id) => {
    const userId = props.user?.user?.id
    const searchNftInBasket = props.user?.user?.basket.filter(filter => filter.nftId._id === id)
    {
      userId === undefined ? navigate('/signin') :
      searchNftInBasket.length === 1 ?
      dispatch({ type: 'user', payload: { view: true, message: "You have already added this nft to the basket", user: props.user.user } }) :
      props.addToBasket(id, userId)
      
    }
  }

  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }

  return (
    <>
      {props?.allProducts && props.filteredProducts.length > 0 ? (
        props.filteredProducts.map((product) => (
          <ConteinerProduct>
            {product.file.split(".")[3] === "png" ||
              product.file.split(".")[3] === "gif" ? (
              <ItemProductImage src={product.file} />
            ) : (
              <ItemProductVideo controls>
                <source src={product.file} type="" />
              </ItemProductVideo>
            )}
            <Title>{product.name}</Title>
            <PriceUser>
              <DivPriceETH>
                <IconEth
                  style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/IconEth.png"
                      }')`,
                  }}
                />

                <Eth>
                  {product.price} {product.token}
                </Eth>
              </DivPriceETH>
              <ConteinerUser>
                {/*  <UserImg
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/userImage.png"
                    }')`,
                    backgroundPosition: "center center",
                    objectFit: "contain",
                  }}
                /> */}
                <UserName>{product.creator}</UserName>
              </ConteinerUser>
            </PriceUser>

            <DivArs>
              <ArsMadeBy>
                {product.token == "ETH"
                  ? financial(product.price * ETH?.ethereum.usd) + " "
                  : financial(product.price * BNB?.binancecoin.usd) + " "}
                USD
              </ArsMadeBy>
              <ArsMadeBy>Made By</ArsMadeBy>
            </DivArs>

            <DivButtons>
              <LinkRouter to={`/details/${product._id}`}>
                <ViewMore>View more</ViewMore>
              </LinkRouter>
              <AddCart>
                <AddShoppingCartIcon onClick={() => addBasket(product._id)} />
              </AddCart>
            </DivButtons>
          </ConteinerProduct>
        ))
      ) : (
        <ErrorProducts />
      )}
    </>
  );
}
const mapStateToProps = (state) => {
  return {
    allProducts: state.ProductReducer.allProducts,
    user: state.UserReducer.user,
    filteredProducts: state.ProductReducer.filteredProducts,
  };
};

const mapDispatchToProps = {
  getAllProducts: ProductActions.getAllProducts,
  addToBasket: UserActions.addToBasket,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
