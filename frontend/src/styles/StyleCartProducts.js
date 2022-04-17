import { style } from "@mui/system";
import styled from "styled-components";

export const DivGeneral = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
`;

export const ImgAstro = styled.div`
  width: 300px;
  height: 300px;
  background-position: center;
  background-size: cover;
  position: absolute;
  right: 0;
  bottom: 0;
  z-index: -1;
  @media (max-width: 995px) {
    width: 230px;
    height: 230px;
  }
  @media (max-width: 600px) {
    width: 170px;
    height: 170px;
  }
  @media (max-width: 390px) {
    width: 150px;
    height: 150px;
  }
`;

export const ContainerCart = styled.div`
  width: 100%;
  padding: 2rem 10rem 2rem 10rem;
  display: flex;
  align-items: center;
  flex-direction: column;
  @media (max-width: 995px) {
    width: 100%;
    padding: 1rem 5rem 1rem 5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 650px) {
    width: 100%;
    padding: 0.5rem 2.5rem 0.5rem 2.5rem;
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (max-width: 470px) {
    margin-right: 0;
    padding: 0.5rem;
  }
`;

export const HeaderCart = styled.h3`
  width: 100%;
  text-align: center;
  color: black;
  font-size: 1.7rem;
  font-weight: 500;
`;

export const CardProducts = styled.div`
  width: 90%;
  background-color: #fffff5;
  margin-top: 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.01) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  @media (max-width: 1024px) {
    width: 100%;
  }
  @media (max-width: 890px) {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
  }
`;

export const ImageProducts = styled.div`
  width: 150px;
  height: 150px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  object-fit: contain;
  @media (max-width: 890px) {
    width: 258px;
    height: 258px;
    border-radius: 1rem;
  }
`;
export const ImagePay = styled.div`
  width: 120px;
  height: 120px;
  background-size: cover;
  background-position: center;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  @media (max-width: 600px) {
    width: 100px;
    height: 100px;
  }
`;
export const DivTitle = styled.div`
  /* background-color: blueviolet; */
  padding: 1rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 890px) {
    margin-right: 0;
  }
  @media (max-width: 470px) {
    margin-right: 0;
    padding: 0;
  }
`;
export const DivTitlePay = styled.div`
  /* background-color: blueviolet; */
  padding: 1rem;
  margin-right: 2rem;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;

  @media (max-width: 890px) {
    margin-right: 0rem;
    display: flex;
    align-items: center;
  }
`;

export const TitleProducts = styled.div`
  font-size: 1.2rem;
  font-weight: 700;
  /* background-color: aqua; */
`;

export const CategoryProducts = styled.div`
  font-size: 1rem;
  /* background-color: green; */
`;

export const PrecioEth = styled.div`
  display: flex;
  justify-content: center;
`;

export const IconEth = styled.image`
  margin-right: 0.4rem;
  width: 20px;
  height: 40px;
  background-size: cover;
  background-position: center;
`;

export const Ether = styled.div`
  font-size: 1.3rem;
  font-weight: 500;
`;

export const PrecioArg = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ArsMoney = styled.div`
  font-size: 0.8rem;
`;

/* MEDIOS DE PAGOS */

export const CardProducts2 = styled.div`
  width: 90%;
  background-color: #fffff5;
  margin-top: 2rem;
  border-radius: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.01) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const HeaderCart2 = styled.h3`
  width: 100%;
  color: black;
  font-size: 1.5rem;
  font-weight: 500;
  padding-top: 2rem;
`;

export const Method = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 3rem;

  @media (max-width: 1234px) {
    min-width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
  }
  @media (max-width: 1310px) {
    display: flex;
    flex-wrap: wrap;
    min-width: 60%;
  }
  @media (max-width: 675px) {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
`;

export const BtnCart = styled.button`
  display: flex;
  align-items: center;
  margin-top: 1rem;
  color: white;
  background-color: #067817;
  border: none;
  font-size: 1.5rem;
  border-radius: .4rem;
  padding: 0.4rem .4rem;

  &:hover {
    background-color: #016610;
  }
`;
export const BtnCart2 = styled.button`
  display: flex;
  align-items: center;
  color: white;
  margin: 1rem .2rem 0 0 ; 
  background-color: #e6191b;
  border: none;
  font-size: 1.5rem;
  border-radius: .4rem;
  padding: 0.2rem .2rem;
  &:hover {
    background-color: #c91214;
  }
`;

export const ButtonMethod = styled.div`
  width: 80%;
  display: flex;
  justify-content: flex-end;
  padding-bottom: 8rem;
  z-index: 10;
  @media (max-width: 1289px) {
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 1024px) {
    display: flex;
    justify-content: flex-end;
  }
  @media (max-width: 995px) {
    display: flex;
    justify-content: flex-end;
  }
`;
export const ButtonMethod2 = styled.div`
  width: 15rem;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  @media (max-width: 1289px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 1024px) {
    display: flex;
    justify-content: center;
  }
  @media (max-width: 995px) {
    display: flex;
    justify-content: center;
  }
`;
export const TotalBuy = styled.div`
  width: 80%;
  background-color: red;
  display: flex;
  justify-content: end;
`;
export const TotalCart = styled.div`
  margin-top: 2rem;
  width: 80%;
  @media (max-width: 890px) {
    width: 100%;
  }
`;
export const Text = styled.h3`
  text-align: end;
  @media (max-width: 890px) {
    text-align: center;
  }
`;
