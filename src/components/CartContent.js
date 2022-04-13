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

function CartContent(props) {
    function productGet() {
        { props.allProducts.length === 0 ? props.getAllProducts() : console.log("mayor que 0") }
    }
    const products = props.user?.user?.basket.map(userNft => props.allProducts.filter(product => product._id === userNft.nftId))

    productGet()
    console.log(products)
    return (
        <>
            {products?.map(products =>
                < CardProducts >
                    <ImageProducts style={{ backgroundImage: `url('${products.file}')`, backgroundPosition: "center center", }} />
                    <DivTitle>
                        <TitleProducts>{products.name}</TitleProducts>
                        <CategoryProducts>CATEGORY: Premium TYPE: Image</CategoryProducts>
                    </DivTitle>
                    <PrecioArg>
                        <PrecioEth>
                            {
                                <IconEth
                                    style={{
                                        backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/IconETH.png"
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
            )}
        </>
    )
}
const mapDispatchToProps = {
    getAllProducts: ProductActions.getAllProducts,
}
const mapStateToProps = (state) => {
    return {
        user: state.UserReducer.user,
        allProducts: state.ProductReducer.allProducts
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartContent)