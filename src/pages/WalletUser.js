import React from "react";
import Footer from "../components/Footer";

import {
  ConteinerWallet,
  UserWallet,
  NameUser,
  ImgUser,
  DivNfts,
  ProductWallet,
  NameNFT,
  Sell,
  ConteinerNFT,
  Money,
  Ethereum,
  Bnb,
  DivUser,
  TextMoney,
  Title,
  TextDescription,
} from "../styles/StyleWallet";

export default function WalletUser() {
  return (
    <>
      <ConteinerWallet>
        <UserWallet>
          <DivUser>
            <ImgUser
              style={{
                backgroundImage: `url('${
                  process.env.PUBLIC_URL + "/assets/Photo1.png"
                }')`,
                objectFit: "contain",
                backgroundPosition: "center center",
                backgroundSize: "cover",
              }}
            />
            <NameUser>Kevin</NameUser>
          </DivUser>
          <Money>
            <TextMoney>Money in Wallet</TextMoney>
            <TextDescription>500 USD</TextDescription>
          </Money>
          <Ethereum>
            <TextMoney>Ethereum</TextMoney>
            <TextDescription>0,1645077762825849 ETH</TextDescription>
          </Ethereum>
          <Bnb>
            <TextMoney>BNB</TextMoney>
            <TextDescription>1,205778088600574 BNB</TextDescription>
          </Bnb>
        </UserWallet>
      </ConteinerWallet>
      <Title>NFT´s in collection</Title>

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
      <Footer />
    </>
  );
}
