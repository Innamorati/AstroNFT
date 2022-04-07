import React from "react";
import product1 from "../Assest/product1.png";
import IconEtherium from "../Assest/IconEth.png";
import {
  Title,
  ItemProduct,
  PriceUser,
  UserName,
  Eth,
  ConteinerProduct,
  IconEth,
  DivPriceETH,
  ArsMadeBy,
  DivArs,
} from "../styles/StyledProducts";

//ESTILOS DE PRODUCTS Y PRODUCT ESTAN EN UNICO COMPONENTE DE ESTILOS
// ARCHIVO STYLED PRODUCTS

const Product = () => {
  return (
    <>
      <ConteinerProduct>
        <ItemProduct
          style={{
            backgroundImage: `url(${product1}) `,
            backgroundPosition: "center center",
            objectFit: "contain",
          }}
        />
        <Title>One Astro #1715</Title>
        <PriceUser>
          <DivPriceETH>
            <IconEth
              style={{
                backgroundImage: `url(${IconEtherium}) `,
              }}
            />
            <Eth>0.121 ETH</Eth>
          </DivPriceETH>
          <UserName>GIIIO</UserName>
        </PriceUser>
        <DivArs>
          <ArsMadeBy>≈ ARS$ 46,828.55</ArsMadeBy>
          <ArsMadeBy>Made By</ArsMadeBy>
        </DivArs>
      </ConteinerProduct>
    </>
  );
};

export default Product;
