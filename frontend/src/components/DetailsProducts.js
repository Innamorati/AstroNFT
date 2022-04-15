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
import UserActions from "../redux/actions/UserActions";
import ProductActions from "../redux/actions/ProductActions";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useNavigate } from "react-router-dom";

function DetailsProducts(props) {
  const { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0)
    props.getOneProduct(id);
  }, []);

  function buy() {
    const userId = props.user?.user?.id
    console.log(id)
    props.addToBasket(id, userId)
    navigate('/basket')
  }
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
            <FavoriteBorderIcon />
          </ConteinerTitleAndLike>
          <PriceFatherDetails>
            <PriceDetails>
              <TitlePrice>Price</TitlePrice>
              <DivPrice>
                <IconEther
                  style={{
                    backgroundImage: `url('${process.env.PUBLIC_URL + "/assets/IconEth.png"
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
              <BtnBuy onClick={buy}>BUY</BtnBuy>
            </BtnDetails>
          </PriceFatherDetails>

          <div class="dropdown3">
            <input type="checkbox" id="dropdown3" />

            <label class="dropdown3__face" for="dropdown3">
              <h6 className="TitleDetails">Details</h6>

              <div class="dropdown3__arrow"></div>
            </label>

            <ul class="dropdown3__items">
              <div class="dropdown3__text">
                <h5 className="TitleDetails">Description</h5>
                <p className="textDetails">{props.oneProduct?.description}</p>
                <h5 className="TitleDetails">Details</h5>
                <p className="textDetails">
                  Creator: {props.oneProduct?.creator}
                </p>
                <p className="textDetails">Contract Address: 0x1dDB...a9Ec</p>
                <p className="textDetails">Token ID: 100300925873</p>
              </div>

              {/*  <div class="dropdown3__text">
                <h5 className="TitleDetails">Creator: </h5>

                {props.oneProduct?.creator}
              </div>
              <div class="dropdown3__text">Contract Address: 0x1dDB...a9Ec</div>
              <div class="dropdown3__text">Token ID: 100300925873</div> */}
            </ul>
          </div>

          {/*  <Accordion>
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
          </Accordion> */}
        </HeaderDetails2>
      </FatherDetails>
    </DivFather>
  );
}

const mapStateToProps = (state) => {
  return {
    oneProduct: state.ProductReducer.oneProduct,
    user: state.UserReducer.user
  };
};

const mapDispatchToProps = {
  getOneProduct: ProductActions.getOneProduct,
  addToBasket: UserActions.addToBasket,

};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsProducts);
