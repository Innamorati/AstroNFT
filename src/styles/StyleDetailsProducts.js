import { style } from "@mui/system";
import styled from "styled-components";

export const DivFather = styled.div`
  width: 100%;
  background-color: white;
  padding: 3rem;
  min-height: 100vh;
  @media (max-width: 1000px) {
    padding: 1rem;
  }
  @media (max-width: 850px) {
    padding: 0;
  }
  @media (max-width: 850px) {
    padding: 0;
  }
`;

export const FatherDetails = styled.div`
  width: 100%;
  display: flex;
  margin-top: 2rem;
  @media (max-width: 1024px) {
    margin-top: 5rem;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 850px) {
    padding: 1rem;
    margin-bottom: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  @media (max-width: 580px) {
    margin-bottom: 3rem;

    padding: 0;
  }
`;

export const ImgDetails = styled.div`
  width: 370px;
  height: 370px;
  background-position: center;
  background-size: cover;
  border-radius: 10px;
  margin-bottom: 2rem;

  @media (max-width: 850px) {
    margin-bottom: 1.5rem;
  }
`;

export const HeaderDetails = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;

export const TitleDetails = styled.h1`
  font-size: 2rem;
  margin: 0;
`;

export const CategoryDetails = styled.p`
  font-size: 1rem;
  margin: 0;
  text-align: center;
`;

export const BtnLike = styled.button`
  width: 24px;
  height: 24px;
  border: 0;
  margin-left: 0.3rem;
  padding-right: 1rem;
`;

export const HeaderDetails2 = styled.div`
  /* display: flex;
  justify-content: space-between; */
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 1024px) {
    margin-top: 5rem;
    padding: 1rem;
    display: flex;
  }
  @media (max-width: 850px) {
    display: flex;
    justify-content: center;
    width: 70%;
  }
  @media (max-width: 580px) {
    display: flex;
    justify-content: center;
    width: 90%;
  }
`;

export const PriceFatherDetails = styled.div`
  font-size: 2rem;
`;

export const PriceDetails = styled.div`
  font-size: 2rem;
`;

export const TitlePrice = styled.h2`
  margin-top: 1rem;
  font-size: 1.2rem;
`;

export const DivPrice = styled.div`
  display: flex;
`;

export const IconEther = styled.div`
  width: 20px;
  height: 40px;
  background-size: cover;
  background-position: center;
  margin: 0.5rem;
`;

export const EtherDetails = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ArMoney = styled.div`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

export const BtnDetails = styled.div``;

export const BtnBuy = styled.button`
  padding: 0.5rem 1rem;
  border: none;
  font-size: 1rem;
  width: 12rem;
  margin-bottom: 1.3rem;
  background-color: #fed900;
  font-weight: 600;
`;

export const CreatorDetails = styled.div``;

export const Creator = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 1rem;
`;

export const TitleCreator = styled.div``;

export const DivCreator = styled.div``;
export const ConteinerTitleAndLike = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
