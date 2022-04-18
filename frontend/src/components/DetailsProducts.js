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
  FavContainer,
  CounterFav,
} from "../styles/StyleDetailsProducts";
import { connect } from "react-redux";
import UserActions from "../redux/actions/UserActions";
import ProductActions from "../redux/actions/ProductActions";
import { useEffect, useState } from "react";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function DetailsProducts(props) {
  const { id } = useParams();
  let navigate = useNavigate();
  const [reload, setReload] = useState(false);
  const [ETH, setETH] = useState();
  const [BNB, setBNB] = useState();

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
    props.getOneProduct(id);
    getETH();
    getBNB();
  }, [reload]);
  function financial(x) {
    return Number.parseFloat(x).toFixed(2);
  }
  function buy() {
    const userId = props.user?.user?.id;
    props.addToBasket(id, userId);
    navigate("/basket");
  }
  async function fav(productId) {
    {
      props.user?.user === null
        ? navigate("/signin")
        : await props.likeDislike(productId);
    }

    setReload(!reload);
    console.log(props.user?.user);
  }
  console.log(props.oneProduct?.likes?.includes(props.user?.user?.id));
  console.log(props.user?.user);
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

            <FavContainer onClick={() => fav(props.oneProduct?._id)}>
              {props.oneProduct?.likes?.includes(props.user?.user?.id) ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon />
              )}
              <CounterFav>{props.oneProduct?.likes?.length}</CounterFav>
            </FavContainer>
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
              <ArMoney>
                ≈{" "}
                {props.oneProduct?.token === "ETH"
                  ? financial(props.oneProduct?.price * ETH?.ethereum.usd) + " "
                  : financial(props.oneProduct?.price * BNB?.binancecoin.usd) +
                    " "}{" "}
                USD
              </ArMoney>
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
    user: state.UserReducer.user,
  };
};

const mapDispatchToProps = {
  getOneProduct: ProductActions.getOneProduct,
  addToBasket: UserActions.addToBasket,
  likeDislike: ProductActions.likeDislike,
};
export default connect(mapStateToProps, mapDispatchToProps)(DetailsProducts);
