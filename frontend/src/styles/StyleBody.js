import styled from "styled-components";

export const BodyFather = styled.section`
  width: 100%;
  min-height: 100vh;
  padding: 3rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  @media (max-width: 1080px) {
    padding: 0;
    width: 100vw;
  }
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
    padding: 0;
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
    padding: 0;
  }
`;

export const TextConteiner = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  @media (max-width: 1080px) {
    width: 60%;
  }
  @media (max-width: 680px) {
    width: 80%;
  }
  @media (max-width: 670px) {
    width: 90%;
  }
`;

//Titulos del body
export const Text = styled.p`
  position: static;
  width: 100%;
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
  border: solid 1px white;
  @media (max-width: 880px) {
    width: 350px;
    height: 350px;
    left: 309.82px;
    top: 671px;
    border-radius: 1rem 1rem 1rem 1rem;
    border: solid 1px white;
    margin-bottom: 1rem;
  }
  @media (max-width: 360px) {
    width: 300px;
    height: 300px;
    left: 309.82px;
    top: 671px;
    border-radius: 1rem 1rem 1rem 1rem;
    border: solid 1px white;
    margin-bottom: 1rem;
  }
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
  bottom: 2.2rem;
  width: 1.2rem;
  height: 1.2rem;
  padding: 1.5rem;
  background-repeat: no-repeat;
  background-size: contain;
  object-fit: cover;
  cursor: pointer;
`;
