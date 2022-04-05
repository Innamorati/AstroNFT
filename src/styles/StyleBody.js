import styled from "styled-components";

export const BodyFather = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
//contenedor de las imagenes del astronauta y el texto
export const BodyConteiner = styled.div`
  padding: 3rem;
  margin: 0;
  background-color: white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  }
`;

export const BodyConteiner2 = styled.div`
  padding: 3rem;
  margin: 0;
  background-color: white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 1080px) {
    flex-direction: column;
  }
`;

export const TextConteiner = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

//Titulos del body
export const Text = styled.p`
  position: static;
  width: 100%;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 700;
  font-size: 25px;
  line-height: 29px;
  color: #494949;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 21px 0px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//Parrafos body
export const Paragraph = styled.p`
  position: static;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: #494949;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
`;

// div para con fondo renderizado en el componente body
export const Image = styled.div`
  width: 400px;
  height: 400px;
  left: 309.82px;
  top: 671px;
  border-radius: 1rem 1rem 1rem 1rem;
  margin: 1rem;
  border: solid 1px white;
`;
//conteiner wp
export const BodyConteiner3 = styled.div`
  width: 100%;
`;
//icono de whattsApp
export const IconWP = styled.div`
  /* display: flex !important;
  justify-content: center !important; */
  position: fixed;
  right: 20px;
  bottom: 20px;
  width: 1.2rem;
  height: 1.2rem;
  padding: 1.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: cover;
  cursor: pointer;
`;
//Footer
export const Footer = styled.div`
  width: 100%;
  height: 9rem;
  background-color: #494949;
  display: flex;
  justify-content: center;
  justify-content: space-around;
  color: white;
`;
//Div redes
export const SocialMedia = styled.div`
  width: 33%;
  background-color: #494949;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContactUs = styled.div`
  padding: 1rem;
  width: 33%;
  background-color: #494949;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AstroNFT = styled.div`
  margin: 0.2rem;
  padding: 0.3rem;
  width: auto;
  background-color: #494949;
  display: flex;

  justify-content: center;
  align-items: center;
`;

export const IconSocial = styled.div`
  margin: 0.3rem;
  width: 1rem;
  height: 1rem;
  object-fit: cover;
  border-radius: 0.3rem;
  padding: 0.2rem;
  cursor: pointer;
`;
//Parrafos body
export const Paragraph2 = styled.p`
  position: static;
  font-family: "Ubuntu";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  color: white;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 10px 0px;
  margin-left: 1rem;
`;
export const IconAstroFoot = styled.div`
  margin: 0.3rem;
  width: 1.5rem;
  height: 1.5rem;
  object-fit: cover;
  border-radius: 0.3rem;
  padding: 0.2rem;
  cursor: pointer;
`;
