import React from "react";

import {
  DivNfts,
  ProductWallet,
  NameNFT,
  Sell,
  ConteinerNFT,
  Title,
  HeaderWallet,
  Portfolio,
  Assets,
  Balance,
  Title2,
  Paragraph,
  Nfts1,
  Nfts2,
  Nfts3,
  ConteinAssets,
  Coin,
  ConteinCoin,
  TextCoin,
} from "../styles/StyleWallet";

export default function WalletUser() {
  return (
    <>
      <HeaderWallet>
        <Portfolio>
          <Title>Portfolio</Title>
          <Balance>
            <Title2>$17.643,41</Title2>
            <TextCoin>Portfolio balance</TextCoin>
          </Balance>
        </Portfolio>
        <Assets>
          <Title>Your Assets</Title>
          <ConteinAssets>
            <Nfts1>
              <Title2>1 BTC</Title2>
              <Paragraph>$2546</Paragraph>
              <ConteinCoin>
                <Coin
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/btc.png"
                    }')`,
                    backgroundPosition: "center center",
                    objectFit: "contain",
                    backgroundSize: "cover",
                  }}
                />
                <TextCoin>+14%</TextCoin>
              </ConteinCoin>
            </Nfts1>
            <Nfts2>
              <Title2>0.32 LTC</Title2>
              <Paragraph>$2546</Paragraph>
              <ConteinCoin>
                <Coin
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/ltc.png"
                    }')`,
                    backgroundPosition: "center center",
                    objectFit: "contain",
                    backgroundSize: "cover",
                  }}
                />
                <TextCoin>+14%</TextCoin>
              </ConteinCoin>
            </Nfts2>
            <Nfts3>
              <Title2>1.25 ETH</Title2>
              <Paragraph>$2546</Paragraph>
              <ConteinCoin>
                <Coin
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/eth.png"
                    }')`,
                    backgroundPosition: "center center",
                    objectFit: "contain",
                    backgroundSize: "cover",
                  }}
                />
                <TextCoin>+14%</TextCoin>
              </ConteinCoin>
            </Nfts3>
          </ConteinAssets>
        </Assets>
      </HeaderWallet>
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
