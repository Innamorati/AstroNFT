import React from "react";
import { Link as LinkRouter } from "react-router-dom";

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

//ESTILOS DE PRODUCTS Y PRODUCT ESTAN EN UNICO COMPONENTE DE ESTILOS
// ARCHIVO STYLED PRODUCTS

const Product = () => {
  return (
    <>
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
        <Title>One Astro #1715</Title>
        <PriceUser>
          <DivPriceETH>
            <IconEth
              style={{
                backgroundImage: `url('${
                  process.env.PUBLIC_URL + "/assets/IconEth.png"
                }')`,
              }}
            />
            <Eth>0.121 ETH</Eth>
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
            <UserName>GIIIO</UserName>
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
    </>
  );
};

export default Product;
