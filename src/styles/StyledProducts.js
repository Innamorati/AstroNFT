import styled from "styled-components";

export const ProductsFather = styled.div`
  width: 100%;
  color: white;
  background-color: white;
  margin-top: 4rem;
  display: flex;
  flex-wrap: wrap;
`;
export const FilterProducts = styled.div`
  padding: 3rem;
  width: 25%;
`;
export const ListProducts = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 75%;
  height: 100%;
`;
export const FilterClean = styled.div`
  width: 100%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  h3:nth-child(2) {
    color: #3baaff;
  }
`;
export const Title = styled.h3`
  margin-top: 1rem;
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
  align-items: center;
  justify-content: center;
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
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 30%;
  margin: 0.5rem;
  h3:nth-child(3) {
    text-align: start;
  }
`;
export const ItemProduct = styled.div`
  width: 250px;
  height: 250px;
  left: 309.82px;
  top: 671px;
  border-radius: 1rem 1rem 1rem 1rem;
  border: solid 1px white;
  @media (max-width: 880px) {
    width: 200px;
    height: 200px;
    left: 309.82px;
    top: 671px;
    border-radius: 1rem 1rem 1rem 1rem;
    border: solid 1px white;
    margin-bottom: 1rem;
  }
  @media (max-width: 360px) {
    width: 100px;
    height: 100px;
    left: 309.82px;
    top: 671px;
    border-radius: 1rem 1rem 1rem 1rem;
    border: solid 1px white;
    margin-bottom: 1rem;
  }
`;
export const PriceUser = styled.div`
  height: 2rem;
  display: flex;
  justify-content: space-between;
  width: 75%;
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
  width: 75%;
  display: flex;
  justify-content: space-between;
  text-align: end;
`;
