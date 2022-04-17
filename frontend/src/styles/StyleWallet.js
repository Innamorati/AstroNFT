import styled from "styled-components";

export const ConteinerNFT = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0.5rem;
  @media (max-width: 940px) {
    display: flex;
    padding: 0.5rem;
    flex-direction: column;
    min-width: 30%;
  }
`;
export const DivNfts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  margin-bottom: 2rem;
  width: 25%;
  border-radius: 1rem;
  color: black;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.01) 0px -79px 40px 0px inset,
    rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  @media (max-width: 1070px) {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 30%;
  }
  @media (max-width: 940px) {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 45%;
  }
  @media (max-width: 690px) {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 60%;
  }
  @media (max-width: 510px) {
    display: flex;
    padding: 0.5rem;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 95%;
  }
`;
export const ProductWallet = styled.div`
  width: 15rem;
  height: 15rem;
  background-color: grey;
  border-radius: 1rem;
`;
export const NameNFT = styled.h3`
  width: 258px;
  padding: 1rem;
  text-align: center;
`;

export const Title = styled.h3`
  padding: 0.2rem;
  text-align: center;
  color: black;
`;
export const Title2 = styled.h5`
  margin: 0;
  padding: 0.2rem;
  font-weight: 700;
  font-size: 14px;
  text-align: center;
  color: black;
`;
export const Paragraph = styled.h6`
  font-weight: 500;
  margin-top: 0.6rem;
  padding: 0.5rem;
  text-align: center;
  color: black;
`;
export const Sell = styled.button`
  padding: 0.3rem;
  margin: 1rem;
  border: unset;
  border-radius: 1rem;
  color: #212121;
  z-index: 1;
  background: white;
  position: relative;
  font-weight: 500;
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
export const HeaderWallet = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  justify-content: space-between;
  @media (max-width: 1070px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const Portfolio = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 30%;
  height: 20rem;
  @media (max-width: 1070px) {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 70%;
    height: 15rem;
    margin-bottom: 1rem;
  }
`;
export const Balance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 85%;
  height: 50%;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #e6f2fe;
  box-shadow: rgba(0, 0, 0, 0.17) -5px -5px 5px 5px inset,
    rgba(0, 0, 0, 0) 0px -15px 15px 0px inset,
    rgba(0, 0, 0, 0.001) 0px -20px 40px 0px inset,
    rgba(0, 0, 0, 0.001) 0px 1px 1px, rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.001) 0px 3px 4px, rgba(0, 0, 0, 0.09) 0px 2px 0px,
    rgba(0, 0, 0, 0.001) 0px 8px 8px;
  @media (max-width: 1070px) {
    width: 100%;
    height: 100%;
  }
`;
export const ConteinAssets = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  @media (max-width: 1070px) {
    padding: 0.5rem;
    margin-top: 1rem;
    width: 90%;
    display: flex;
    flex-wrap: wrap;
  }
`;
export const Assets = styled.div`
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
export const Nfts1 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 13rem;
  border-radius: 1rem;
  padding: 1rem;
  margin: 0.1rem;
  background-color: #efebf6;
  box-shadow: rgba(0, 0, 0, 0.17) -5px -5px 5px 5px inset,
    rgba(0, 0, 0, 0) 0px -15px 15px 0px inset,
    rgba(0, 0, 0, 0.001) 0px -20px 40px 0px inset,
    rgba(0, 0, 0, 0.001) 0px 1px 1px, rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.001) 0px 3px 4px, rgba(0, 0, 0, 0.09) 0px 2px 0px,
    rgba(0, 0, 0, 0.001) 0px 8px 8px;
  @media (max-width: 1070px) {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 65%;
    height: 15rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 460px) {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 95%;
    height: 15rem;
    margin-bottom: 1rem;
  }
`;
export const Nfts2 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 13rem;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #e6f4e8;
  margin: 0.1rem;

  box-shadow: rgba(0, 0, 0, 0.17) -5px -5px 5px 5px inset,
    rgba(0, 0, 0, 0) 0px -15px 15px 0px inset,
    rgba(0, 0, 0, 0.001) 0px -20px 40px 0px inset,
    rgba(0, 0, 0, 0.001) 0px 1px 1px, rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.001) 0px 3px 4px, rgba(0, 0, 0, 0.09) 0px 2px 0px,
    rgba(0, 0, 0, 0.001) 0px 8px 8px;
  @media (max-width: 1070px) {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 65%;
    height: 15rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 460px) {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 95%;
    height: 15rem;
    margin-bottom: 1rem;
  }
`;
export const Nfts3 = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30%;
  height: 13rem;
  border-radius: 1rem;
  padding: 1rem;
  background-color: #ffd9c9;
  margin: 0.1rem;

  box-shadow: rgba(0, 0, 0, 0.17) -5px -5px 5px 5px inset,
    rgba(0, 0, 0, 0) 0px -15px 15px 0px inset,
    rgba(0, 0, 0, 0.001) 0px -20px 40px 0px inset,
    rgba(0, 0, 0, 0.001) 0px 1px 1px, rgba(0, 0, 0, 0.09) 0px 2px 1px,
    rgba(0, 0, 0, 0.001) 0px 3px 4px, rgba(0, 0, 0, 0.09) 0px 2px 0px,
    rgba(0, 0, 0, 0.001) 0px 8px 8px;
  @media (max-width: 1070px) {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 65%;
    height: 15rem;
    margin-bottom: 1rem;
  }
  @media (max-width: 460px) {
    margin-top: 1rem;
    padding: 0.5rem;
    width: 95%;
    height: 15rem;
    margin-bottom: 1rem;
  }
`;
export const ConteinCoin = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
`;
export const TextCoin = styled.h5`
  font-size: 15px;
  text-align: center;
`;
export const Coin = styled.div`
  height: 1.5rem;
  width: 1.5rem;
  border-radius: 50%;
  object-fit: cover;
`;
export const DivButton = styled.div`
  display: flex;
`;
export const DivTitleCoin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ConteinerNftCollection = styled.div`
  width: 100%;
`;
export const Text2 = styled.h3`
  margin-top: 1rem;
  text-align: center;
`;
