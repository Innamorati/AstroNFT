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

function CartContent(props) {
  const productos = []

  const deleteNft = (id) => {
    props.delteNftToBasket(id)
    console.log(id)
  }

  return (
    <>
      {props.user?.user?.basket.length !== 0 ?
        props.user?.user?.basket.map(products =>
          < CardProducts >
            <ImageProducts style={{ backgroundImage: `url('${products.nftId.file}')`, backgroundPosition: "center center", }} />
            <DivTitle>
              <TitleProducts>{products.nftId.name}</TitleProducts>
              <CategoryProducts>{products.nftId.category}</CategoryProducts>
            </DivTitle>
            <PrecioArg>
              <PrecioEth>
                <IconEth
                  style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/IconETH.png"
                      }')`,
                  }}
                />
                <Ether>{products.nftId.price}ETH</Ether>
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
              onClick={() => deleteNft(products._id)}
            />
          </CardProducts>
        )

        : ""
      }


    </>
  )
}
const mapDispatchToProps = {
  getAllProducts: ProductActions.getAllProducts,
  delteNftToBasket: UserActions.delteNftToBasket,
}
const mapStateToProps = (state) => {
  return {
    user: state.UserReducer.user,
    allProducts: state.ProductReducer.allProducts
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContent)