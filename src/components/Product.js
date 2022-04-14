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
  AddImg,
  ConteinerUser,
} from "../styles/StyledProducts";
import ProductActions from "../redux/actions/ProductActions";
import UserActions from "../redux/actions/UserActions";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

//ESTILOS DE PRODUCTS Y PRODUCT ESTAN EN UNICO COMPONENTE DE ESTILOS
// ARCHIVO STYLED PRODUCTS

function Product(props) {


  useEffect(() => {
    props.getAllProducts();
  }, []);

  const addBasket = (id) => {
    const userId = props.user?.user?.id
    console.log(id, userId)
    props.addToBasket(id, userId)
  }
  console.log(props.user)
  return (
    <>
      {props?.allProducts && props.filteredProducts.length > 0 ? (
        props.filteredProducts.map((product) => (
          <ConteinerProduct>
            {
              product.file.split('.')[3] === 'png' || product.file.split('.')[3] === 'gif'
                ? <ItemProductImage src={product.file} />
                : <ItemProductVideo controls><source src={product.file} type="" /></ItemProductVideo>
            }
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
                <UserImg style={{
                  backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/userImage.png"}')`,
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
