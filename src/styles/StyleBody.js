import styled from "styled-components";

export const BodyFather = styled.section`
  width: 100%;
  height: 150vh;
  padding: 5rem;
  margin: 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;
//contenedor de las imagenes del astronauta y el texto
export const BodyConteiner = styled.div`
  padding: 0;
  margin: 0;
  background-color: white;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: space-around;
  flex-wrap: wrap;
  @media (max-width: 1060px) {
    display: none;
  }
`;

export const BodyConteinerTab = styled.div`
  @media (max-width: 1060px) {
    display: visible;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 1060px) {
    display: none;
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
export const conteinerIconWP = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row-reverse;
`;
//icono de whattsApp
export const IconWP = styled.img`
  width: 1rem;
  height: 1rem;
  padding: 1.5rem;
  background-repeat: no-repeat;
  object-fit: cover;
`;
