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

const Product = () => {
  return (
    <>
      <ConteinerProduct>
        <ItemProduct
          style={{
            backgroundImage: `url(${product1}) `,
            backgroundPosition: "center center",
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
