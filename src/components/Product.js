import React, { useEffect } from "react";
import { Link as LinkRouter } from "react-router-dom";
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
  AddImg,
  ConteinerUser,
} from "../styles/StyledProducts";
import ProductActions from "../redux/actions/ProductActions";

//ESTILOS DE PRODUCTS Y PRODUCT ESTAN EN UNICO COMPONENTE DE ESTILOS
// ARCHIVO STYLED PRODUCTS

function Product(props) {
  console.log(props);
  useEffect(() => {
    props.getAllProducts();
  }, []);

  console.log(props.allProducts);
  console.log(props.filteredProducts);
  return (
    <>
      {props?.allProducts && props.filteredProducts.length > 0 ? (
        props.filteredProducts.map((product) => (
          <ConteinerProduct>
            <ItemProduct
              style={{
                background: `url('${product.file}')`,
                backgroundPosition: "center center",
                backgroundSize: "cover",
                objectFit: "cover",
              }}
            />
            <Title>{product.name}</Title>
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
                  {product.price} {product.token}
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
                <UserName>{product.creator}</UserName>
              </ConteinerUser>
            </PriceUser>
            <DivArs>
              <ArsMadeBy>≈ ARS$ 46,828.55</ArsMadeBy>
              <ArsMadeBy>Made By</ArsMadeBy>
            </DivArs>
            <DivButtons>
              <LinkRouter to={`/details/${product._id}`}>
                <ViewMore>View more</ViewMore>
              </LinkRouter>
              <AddCart>
                <AddImg
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/cart.png"
                    }')`,
                    backgroundPosition: "center center",
                    objectFit: "contain",
                  }}
                />
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
