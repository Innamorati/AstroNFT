import styled from "styled-components";

//Footer
export const Footer = styled.div`
  margin-top: 4rem;
  width: auto;
  height: auto;
  background-color: #494949;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  color: white;
  font-family: "Ubuntu";

  @media (max-width: 880px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
//Div redes footer
export const SocialMedia = styled.div`
  width: 20%;
  background-color: #494949;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 880px) {
    width: 100%;
  }
`;
//div contacto footer
export const ContactUs = styled.div`
  padding: 1rem;
  width: 35%;
  background-color: #494949;
  display: flex;
  flex-direction: column;
  justify-content: center;
  @media (max-width: 880px) {
    width: 60%;
  }
`;
//div logo y copyright
export const AstroNFT = styled.div`
  width: auto;
  background-color: #494949;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
//div dentro de logo y nombre en footer
export const InAstroNFT = styled.div`
  display: flex;
  align-items: center;
  @media (max-width: 880px) {
    margin-top: 2rem;
  }
`;
// iconos de redes en footer
export const IconSocial = styled.div`
  margin: 0.3rem;
  width: 1.2rem;
  height: 1.2rem;
  object-fit: cover;
  border-radius: 0.3rem;
  padding: 0.2rem;
  cursor: pointer;
  @media (max-width: 376px) {
    object-fit: cover;
    cursor: pointer;
    margin: 0.3rem;
  }
`;
//Texto
export const Paragraph2 = styled.p`
  position: static;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  color: white;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
  margin-left: 0.5rem;
  font-family: "Ubuntu";
  display: flex;
  justify-content: center;
  text-align: center;
`;
export const IconAstroFoot = styled.div`
  width: 2rem;
  height: 2rem;
  object-fit: cover;
  border-radius: 0.3rem;
  padding: 0.2rem;
  cursor: pointer;
`;
