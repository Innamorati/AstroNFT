import React from "react";
import Footer from "../components/Footer";

import {
  DivNfts,
  ProductWallet,
  NameNFT,
  Sell,
  ConteinerNFT,
  Title,
} from "../styles/StyleWallet";

export default function WalletUser() {
  return (
    <>
      <Title>NFT in collection</Title>

      <ConteinerNFT>
        <DivNfts>
          <ProductWallet
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/product1.png"
              }')`,
              objectFit: "contain",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
          <NameNFT>NAME NFT 1</NameNFT>
          <Sell>Sell </Sell>
        </DivNfts>
        <DivNfts>
          <ProductWallet
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/product1.png"
              }')`,
              objectFit: "contain",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
          <NameNFT>NAME NFT 2</NameNFT>
          <Sell>Sell</Sell>
        </DivNfts>
        <DivNfts>
          <ProductWallet
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/product1.png"
              }')`,
              objectFit: "contain",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
          <NameNFT>NAME NFT 3</NameNFT>
          <Sell>Sell</Sell>
        </DivNfts>
        <DivNfts>
          <ProductWallet
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/product1.png"
              }')`,
              objectFit: "contain",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
          <NameNFT>NAME NFT 4</NameNFT>
          <Sell>Sell</Sell>
        </DivNfts>
        <DivNfts>
          <ProductWallet
            style={{
              backgroundImage: `url('${
                process.env.PUBLIC_URL + "/assets/product1.png"
              }')`,
              objectFit: "contain",
              backgroundPosition: "center center",
              backgroundSize: "cover",
            }}
          />
          <NameNFT>NAME NFT 5</NameNFT>
          <Sell>Sell</Sell>
        </DivNfts>
      </ConteinerNFT>
    </>
  );
}
