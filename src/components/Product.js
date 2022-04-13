import React, { useEffect, useState } from "react";
import { Link as LinkRouter } from "react-router-dom";
import axios from "axios";
import ErrorProducts from "./ErrorProducts";
import { connect } from "react-redux";
import {
  Title,
  ItemProduct,
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

//ESTILOS DE PRODUCTS Y PRODUCT ESTAN EN UNICO COMPONENTE DE ESTILOS
// ARCHIVO STYLED PRODUCTS

function Product(props) {
  /* const [product, setProducts] = useState([]);
  const getInfo = async () => {
    const info = await axios.get(
      "https://6254659989f28cf72b5d37c7.mockapi.io/api/products"
    );
    setProducts(info.data);
  };
  console.log(product); */
  useEffect(() => {
    props.getAllProducts();
  }, []);
  
  console.log(props.allProducts);
  console.log(props.filteredProducts);
  return (
    <>
      {props.allProducts && props.filteredProducts.length > 0 ? (
        props.filteredProducts.map((productNft) => (
          <ConteinerProduct>
            <ItemProduct
              style={{
                backgroundImage: `url('${
                  process.env.PUBLIC_URL + "/assets/product1.png"
                }')`,
                backgroundPosition: "center center",
                objectFit: "contain",
              }}
            />
            <Title>{productNft.name}</Title>
            <PriceUser>
              <DivPriceETH>
                <IconEth
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/IconEth.png"
                    }')`,
                  }}
                />
                <Eth>
                  {productNft.price} {productNft.token}
                </Eth>
              </DivPriceETH>
              <ConteinerUser>
                <UserImg
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/userImage.png"
                    }')`,
                    backgroundPosition: "center center",
                    objectFit: "contain",
                  }}
                />
                <UserName>{productNft.creator}</UserName>
              </ConteinerUser>
            </PriceUser>
            <DivArs>
              <ArsMadeBy>≈ ARS$ 46,828.55</ArsMadeBy>
              <ArsMadeBy>Made By</ArsMadeBy>
            </DivArs>
            <DivButtons>
              <LinkRouter to={"/details"}>
                <ViewMore>View more</ViewMore>
              </LinkRouter>
              <AddCart>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                >
                  <path fill="none" d="M0 0h24v24H0z"></path>
                  <path
                    fill="currentColor"
                    d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"
                  ></path>
                </svg>
                <span>Add</span>
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
    filteredProducts: state.ProductReducer.filteredProducts,
  };
};

const mapDispatchToProps = {
  getAllProducts: ProductActions.getAllProducts,
};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
