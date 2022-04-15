import React from "react";
import { Link as LinkRouter } from "react-router-dom";
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
  DivButton,
  DivTitleCoin,
  ConteinerNftCollection,
} from "../styles/StyleWallet";
import { connect } from "react-redux";
import ProductActions from "../redux/actions/ProductActions";
import { useEffect, useState } from "react";
import axios from "axios";

function WalletUser(props) {
  console.log(props);
  const [BTC, setBTC] = useState();
  const [ETH, setETH] = useState();
  const [BNB, setBNB] = useState();

  console.log(BTC);
  console.log(ETH);
  console.log(BNB);

  const getBTC = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
      );
      setBTC(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getETH = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=ethereum&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
      );
      setETH(res.data);
    } catch (error) {
      console.error(error);
    }
  };
  const getBNB = async () => {
    try {
      const res = await axios.get(
        "https://api.coingecko.com/api/v3/simple/price?ids=binancecoin&vs_currencies=usd&include_24hr_change=true&include_last_updated_at=true"
      );
      setBNB(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const id = [
      "6255be1a675d3c93869c44de",
      "6255be1a675d3c93869c44d2",
      "6255be1a675d3c93869c4495",
    ];
    props.getOneProduct(id);
    getBTC();
    getETH();
    getBNB();
  }, []);
  return (
    <>
      <HeaderWallet>
        <Portfolio>
          <Title>Portfolio</Title>
          <Balance>
            <Title2>
              {BTC?.bitcoin.usd * 6 +
                ETH?.ethereum.usd * 3 +
                BNB?.binancecoin.usd * 21}{" "}
              USD
            </Title2>
            <TextCoin>Portfolio balance</TextCoin>
          </Balance>
        </Portfolio>
        <Assets>
          <Title>Your Assets</Title>
          <ConteinAssets>
            <Nfts1>
              <DivTitleCoin>
                <Title2>6 BTC =</Title2>
                <Paragraph>{BTC?.bitcoin.usd * 6} USD</Paragraph>
              </DivTitleCoin>
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
                <TextCoin>{BTC?.bitcoin.usd_24h_change}%</TextCoin>
              </ConteinCoin>
            </Nfts1>
            <Nfts2>
              <DivTitleCoin>
                <Title2>3 ETH =</Title2>
                <Paragraph>{ETH?.ethereum.usd * 3} USD</Paragraph>
              </DivTitleCoin>

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
                <TextCoin>{ETH?.ethereum.usd_24h_change}%</TextCoin>
              </ConteinCoin>
            </Nfts2>
            <Nfts3>
              <DivTitleCoin>
                <Title2>21 BNB =</Title2>
                <Paragraph>{BNB?.binancecoin.usd * 21} USD</Paragraph>
              </DivTitleCoin>

              <ConteinCoin>
                <Coin
                  style={{
                    backgroundImage: `url('${
                      process.env.PUBLIC_URL + "/assets/bnb.png"
                    }')`,
                    backgroundPosition: "center center",
                    objectFit: "contain",
                    backgroundSize: "cover",
                  }}
                />
                <TextCoin>{BNB?.binancecoin.usd_24h_change}%</TextCoin>
              </ConteinCoin>
            </Nfts3>
          </ConteinAssets>
        </Assets>
      </HeaderWallet>
      <ConteinerNftCollection>
        <Title>NFT in collection</Title>
      </ConteinerNftCollection>
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
          <DivButton>
            <Sell>Sell</Sell>
            <LinkRouter to={"/details/:id"}>
              <Sell>Details</Sell>
            </LinkRouter>
          </DivButton>
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
          <DivButton>
            <Sell>Sell</Sell>
            <LinkRouter to={"/details/:id"}>
              <Sell>Details</Sell>
            </LinkRouter>{" "}
          </DivButton>
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
          <DivButton>
            <Sell>Sell</Sell>
            <LinkRouter to={"/details/:id"}>
              <Sell>Details</Sell>
            </LinkRouter>
          </DivButton>
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
          <DivButton>
            <Sell>Sell</Sell>
            <LinkRouter to={"/details/:id"}>
              <Sell>Details</Sell>
            </LinkRouter>{" "}
          </DivButton>
        </DivNfts>
      </ConteinerNFT>
    </>
  );
}
const mapDispatchToProps = {
  getOneProduct: ProductActions.getOneProduct,
};

const mapStateToProps = (state) => {
  return {
    oneProduct: state.ProductReducer.oneProduct,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(WalletUser);
