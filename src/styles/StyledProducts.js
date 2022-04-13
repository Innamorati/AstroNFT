import styled from "styled-components";

export const ProductsFather = styled.div`
  width: 100%;
  color: white;
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  @media (max-width: 1080px) {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
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
  margin-top: 3rem;
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
export const TitleHead = styled.h1`
  width: 231px;
  height: 62px;
  left: 616.22px;
  top: 205px;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 53.6839px;
  line-height: 62px;
  color: #ffffff;
`;
export const Title = styled.h3`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 600;
  font-size: 0.9rem;
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
  margin-bottom: 0;
  height: 1.5rem;
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
export const InputPrice2 = styled.input`
  width: 3rem;
  height: 1.5rem;
  border-radius: 1rem;
  border: 0;
  background-color: #e9e9e9;
`;
export const Categories = styled.div`
  width: 100%;
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
  background: rgb(23, 82, 118);
  background: linear-gradient(169deg, white 3%, #e6efff 97%);
  display: flex;
  flex-direction: column;

  align-items: center;
  justify-content: center;
  border-radius: 1rem;
  padding: 1rem;
  gap: 0.3rem;
  width: 30%;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.17) -5px -5px 5px 5px inset,
    rgba(0, 0, 0, 0) 0px -15px 15px 0px inset,
    rgba(0, 0, 0, 0.001) 0px -20px 40px 0px inset,
    rgba(0, 0, 0, 0.001) 0px 1px 1px, rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.001) 0px 3px 4px, rgba(0, 0, 0, 0.09) 0px 2px 0px,
    rgba(0, 0, 0, 0.001) 0px 8px 8px;

  &:hover {
    border-radius: 50px;
  }

  h3:nth-child(3) {
    text-align: start;
  }

  @media (min-width: 1150px) {
    display: flex;
    flex-wrap: wrap;
    min-width: 30%;
    margin: 1rem;
  }
  @media (max-width: 1150px) {
    display: flex;
    flex-wrap: wrap;
    min-width: 40%;
    margin: 1rem;
  }

  @media (max-width: 980px) {
    display: flex;
    flex-direction: column;
    min-width: 37%;
    margin: 1rem;
  }
  @media (max-width: 850px) {
    display: flex;
    flex-direction: column;
    min-width: 40%;
    margin: 1rem;
  }
  @media (max-width: 780px) {
    display: flex;
    flex-direction: column;
    min-width: 50%;
    margin: 1rem;
  }
  @media (max-width: 613px) {
    display: flex;
    flex-direction: column;
    min-width: 80%;
    margin: 1rem;
  }
  @media (max-width: 380px) {
    display: flex;
    flex-direction: column;
    min-width: 100%;
    margin-bottom: 1rem;
  }
`;
export const ItemProduct = styled.div`
  margin: 1rem;
  width: 258px;
  height: 258px;
  border-radius: 1rem 1rem 1rem 1rem;
  box-shadow: 0 12px 16px rgb(0 0 0 / 27%);
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
  height: 2.7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  width: 80%;
  @media (min-width: 1500px) {
    width: 70%;
    justify-content: space-between;
  }
  @media (max-width: 1240px) {
    min-width: 90%;
    justify-content: space-between;
  }
  @media (max-width: 719px) {
    min-width: 90%;
    justify-content: space-between;
  }
  @media (max-width: 580px) {
    min-width: 90%;
    justify-content: space-between;
  }
  @media (max-width: 580px) {
    width: 80%;
    justify-content: space-between;
  }
  @media (max-width: 400px) {
    width: 80%;
    justify-content: space-between;
  }
  @media (max-width: 350px) {
    width: 100%;
    justify-content: space-between;
  }
`;
export const ConteinerUser = styled.div`
  display: flex;
  justify-content: center;
  justify-content: end;
  align-items: center;
`;
export const UserName = styled.h3`
  margin: 0;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 125%;
  color: #333333;
`;
export const UserImg = styled.img`
  margin-right: 0.4rem;
  border-radius: 1rem;
  width: 20.54px;
  height: 21.98px;
`;
export const Eth = styled.h3`
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 15px;
  line-height: 125%;
  color: #333333;
  margin-top: 0.5rem;
`;
export const IconEth = styled.div`
  width: 1rem;
  height: 1.5rem;
  border: 0;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
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
  width: 80%;
  height: 2.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: end;
  @media (max-width: 750px) {
    min-width: 70%;
  }
  @media (max-width: 580px) {
    min-width: 60%;
  }
`;
export const Hero = styled.div`
  background-color: #83b1ff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 300px;
  object-fit: cover;
`;

export const DivButtons = styled.div`
  width: 80%;
  height: 2.2rem;
  margin-bottom: 1rem;
  display: flex;
  justify-content: space-around;
`;
export const AddCart = styled.button`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  padding: 0.3em 1em 0.3em 0.2em;
  background-color: white;
  border: none;
  box-shadow: 0 0.7em 1.5em -0.5em grey;
  letter-spacing: 0.05em;
  border-radius: 20em;
  padding: 0.7rem;
  &:hover {
    box-shadow: 0 1em 1em -0.5em grey;
  }

  &:active {
    box-shadow: 0 0.3em 1em -0.5em grey;
  }
`;
export const AddImg = styled.div`
  width: 1.5rem;
  height: 1.5rem;
`;

export const ViewMore = styled.button`
  padding: 0.4rem;
  border: unset;
  border-radius: 15px;
  color: #212121;
  z-index: 1;
  background: white;
  position: relative;
  font-weight: 650;
  font-size: 13px;
  -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
  box-shadow: 0 0.7em 1.5em -0.5em grey;
  transition: all 250ms;
  overflow: hidden;
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 0;
    border-radius: 15px;
    background-color: #212121;
    z-index: -1;
    -webkit-box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    box-shadow: 4px 8px 19px -3px rgba(0, 0, 0, 0.27);
    transition: all 250ms;
  }

  &:hover {
    color: #e8e8e8;
    box-shadow: 0 1em 1em -0.5em grey;
  }

  &:hover::before {
    width: 100%;
  }
`;
export const Option = styled.option`
  height: 1rem;
`;
