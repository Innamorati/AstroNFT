import styled from "styled-components";

export const ConteinerWallet = styled.div`
  width: 100%;
  padding: 1rem;
  display: flex;
`;

export const UserWallet = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-between;
  margin: 1rem;
  width: 100%;
  height: 8rem;
`;
export const NameUser = styled.h5`
  text-align: center;
  padding: 0.5rem;
  color: black;
`;
export const ImgUser = styled.div`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
`;
export const ConteinerNFT = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const DivNfts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  width: 22%;
  border-radius: 1rem;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.01) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
`;
export const ProductWallet = styled.div`
  width: 258px;
  height: 258px;
  background-color: grey;
  border-radius: 1rem;
`;
export const NameNFT = styled.h3`
  width: 258px;
  padding: 1rem;
  text-align: center;
`;
export const TextMoney = styled.h4`
  padding: 1rem;
  text-align: center;
  color: black;
`;
export const Title = styled.h3`
  padding: 1rem;
  text-align: center;
  color: black;
`;
export const TextDescription = styled.h5`
  width: 100%;
  padding: 1rem;
  font-weight: 400;
  text-align: center;
  color: black;
`;

export const Sell = styled.button`
  padding: 0.5rem;
  border: unset;
  border-radius: 1rem;
  color: #212121;
  z-index: 1;
  background: white;
  position: relative;
  font-weight: 650;
  font-size: 1.1rem;
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

export const Money = styled.div`
  margin-top: 1rem;
  width: 30%;
  height: 10rem;
`;

export const Ethereum = styled.div`
  margin-top: 1rem;
  width: 30%;
  height: 10rem;
`;

export const Bnb = styled.div`
  margin-top: 1rem;
  width: 30%;
  height: 10rem;
`;
export const DivUser = styled.div`
  display: flex;
  flex-direction: column;
  color: black;
`;
