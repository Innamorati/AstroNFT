import React from "react";
import { Accordion } from "react-bootstrap";
import Footer from "./Footer";
import { useParams } from "react-router-dom";
import {
  FatherDetails,
  DivFather,
  ImgDetails,
  HeaderDetails,
  TitleDetails,
  CategoryDetails,
  BtnLike,
  HeaderDetails2,
  PriceDetails,
  PriceFatherDetails,
  TitlePrice,
  DivPrice,
  IconEther,
  EtherDetails,
  ArMoney,
  BtnDetails,
  BtnBuy,
  CreatorDetails,
  Creator,
  TitleCreator,
  DivCreator,
  ConteinerTitleAndLike,
} from "../styles/StyleDetailsProducts";
import { connect } from "react-redux";
import ProductActions from "../redux/actions/ProductActions";
import { useEffect, useState } from "react";

function DetailsProducts(props) {
  const { id } = useParams();

  console.log(id);
  console.log(props.oneProduct);
  useEffect(() => {
    props.getOneProduct(id);
  }, []);
  
  return (
      <DivFather>
        <FatherDetails>
          <HeaderDetails>
            <ImgDetails
              style={{
                backgroundImage: `url('${props.oneProduct?.file}')`,
              }}
            />
          </HeaderDetails>
          <HeaderDetails2>
            <ConteinerTitleAndLike>
              <TitleDetails>{props.oneProduct?.name}</TitleDetails>
              <CategoryDetails>{props.oneProduct?.category}</CategoryDetails>
              <BtnLike
                style={{
                  backgroundImage: `url('${
                    process.env.PUBLIC_URL + "/assets/Heart.png"
                  }')`,
                }}
              />
            </ConteinerTitleAndLike>
            <PriceFatherDetails>
              <PriceDetails>
                <TitlePrice>Price</TitlePrice>
                <DivPrice>
                  <IconEther
                    style={{
                      backgroundImage: `url('${
                        process.env.PUBLIC_URL + "/assets/IconEth.png"
                      }')`,
                    }}
                  />
                  <EtherDetails>
                    {props.oneProduct?.price} {props.oneProduct?.token}{" "}
                  </EtherDetails>
                </DivPrice>
                <ArMoney>≈ ARS$ 46,828.55 "ficticio"</ArMoney>
              </PriceDetails>
              <BtnDetails>
                <BtnBuy>BUY</BtnBuy>
              </BtnDetails>
            </PriceFatherDetails>
            <Accordion>
              <Accordion.Item eventKey="0">
                <Accordion.Header>Description</Accordion.Header>
                <Accordion.Body>{props.oneProduct?.description}</Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1">
                <Accordion.Header>Details</Accordion.Header>
                <Accordion.Body>
                  <CreatorDetails>
                    <Creator>
                      <TitleCreator>Creator</TitleCreator>
                      <DivCreator>{props.oneProduct?.creator} </DivCreator>
                    </Creator>
                    <Creator>
                      <TitleCreator>Network</TitleCreator>
                      <DivCreator>{props.oneProduct?.red}</DivCreator>
                    </Creator>
                    <Creator>
                      <TitleCreator>Contract Address</TitleCreator>
                      <DivCreator>0x1dDB...a9Ec</DivCreator>
                    </Creator>
                    <Creator>
                      <TitleCreator>Token ID</TitleCreator>
                      <DivCreator>100300925873</DivCreator>
                    </Creator>
                  </CreatorDetails>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </HeaderDetails2>
        </FatherDetails>
      </DivFather>
  );
}

const mapStateToProps = (state) => {
  return {
    oneProduct: state.ProductReducer.oneProduct,
  };
};

const mapDispatchToProps = {
  getOneProduct: ProductActions.getOneProduct,
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsProducts);
