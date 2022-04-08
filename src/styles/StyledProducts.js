import styled from "styled-components";

export const ProductsFather = styled.div`
  width: 100%;
  color: white;
  background-color: white;
  margin-top: 4rem;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`;
export const DivFilterProducts = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  margin: 0.7rem;
  @media (max-width: 804px) {
    min-width: 30%;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const FilterProducts = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-evenly;
  align-items: center;
  @media (max-width: 804px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const ListProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  height: 100%;
  @media (max-width: 1160px) {
    width: 100%;
  }
`;
export const FilterClean = styled.div`
  width: 100%;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  h3:nth-child(2) {
    color: #3baaff;
    cursor: pointer;
  }
`;
export const Title = styled.h3`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 125%;
  color: #333333;
  flex: none;
  order: 0;
  flex-grow: 0;
`;
export const Title2 = styled.h3`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 1rem;
  line-height: 125%;
  flex: none;
  order: 0;
  flex-grow: 0;
  color: #828282;
  text-align: center;
  text-align: start;
`;
export const Order = styled.select`
  border: 0;
  margin-bottom: 1rem;
`;
export const SelectPrice = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  width: 100%;
  border: 6px solid #3baaff;
  box-shadow: 0px 3px 6px rgba(40, 139, 218, 0.15);
`;
export const Slider = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const InputPrice = styled.div`
  width: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  justify-content: flex-start;
  justify-content: space-around;
  h3:nth-child(1) {
    margin-top: 0.6rem;
  }
  h3:nth-child(3) {
    margin-top: 0.6rem;
  }
`;
export const InputTextPrice = styled.input`
  width: 3rem;
  height: 1.5rem;
  margin: 0.5rem;
  border-radius: 1rem;
  border: 0;
  background-color: #e9e9e9;
`;
export const Categories = styled.div`
  margin-top: 1rem;
`;
export const ButtonCategory = styled.button`
  width: auto;
  background-color: white;
  margin: 0.3rem;
  border-radius: 1rem;
  background-color: #e9e9e9;
  border: 0;
`;

//INICIO DE LOS PRODUCTIOS
export const ConteinerProduct = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  width: 25%;
  h3:nth-child(3) {
    text-align: start;
  }

  @media (max-width: 1060px) {
    display: flex;
    flex-wrap: wrap;
    min-width: 25%;
    margin: 1rem;
  }
  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    min-width: 35%;
    margin: 0.3rem;
  }
  @media (max-width: 750px) {
    display: flex;
    flex-direction: column;
    min-width: 50%;
    margin: 0.3rem;
  }
  @media (max-width: 580px) {
    display: flex;
    flex-direction: column;
    min-width: 70%;
    margin: 0.3rem;
  }
  @media (max-width: 380px) {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    margin: 0.3rem;
  }
`;
export const ItemProduct = styled.div`
  margin: 1rem;
  width: 258px;
  height: 258px;
  border-radius: 1rem 1rem 1rem 1rem;
  @media (max-width: 880px) {
    width: 250px;
    height: 250px;
    left: 309.82px;
    top: 671px;
    border-radius: 1rem 1rem 1rem 1rem;
    border: solid 1px white;
    margin-bottom: 1rem;
  }
  @media (max-width: 750px) {
    width: 258px;
    height: 258px;
    border-radius: 1rem 1rem 1rem 1rem;
  }

  @media (max-width: 360px) {
    width: 258px;
    height: 258px;
    border-radius: 1rem 1rem 1rem 1rem;
    border: solid 1px white;
    margin-bottom: 1rem;
  }
`;
export const PriceUser = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  width: 80%;
  @media (max-width: 750px) {
    min-width: 70%;
  }
  @media (max-width: 580px) {
    min-width: 30%;
  }
  @media (max-width: 580px) {
    width: 60%;
  }
  @media (max-width: 400px) {
    width: 70%;
  }
`;
export const UserName = styled.h3`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 125%;
  color: #333333;
`;
export const Eth = styled.h3`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 125%;
  color: #333333;
`;
export const IconEth = styled.div`
  width: 1rem;
  height: 1.7rem;
  border: 0;
  margin-right: 0.5rem;
`;
export const DivPriceETH = styled.div`
  display: flex;
`;
export const ArsMadeBy = styled.h4`
  width: 95px;
  height: 15px;
  left: 2px;
  top: 0px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 125%;
  color: #828282;
`;
export const DivArs = styled.div`
  width: auto;
  display: flex;
  justify-content: space-between;
  text-align: end;
  @media (max-width: 750px) {
    min-width: 70%;
  }
  @media (max-width: 580px) {
    min-width: 60%;
  }
`;
export const Hero = styled.div`
  width: 100%;
  min-height: 40vh;
  background-color: #83b1ff;
  object-fit: cover;
  background-repeat: no-repeat;
`;
