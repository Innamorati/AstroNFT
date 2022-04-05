import styled from "styled-components";
const NavLink = styled.a``;

export const BodyFather = styled.section`
  width: 100%;
  height: auto;
  padding: 6rem;
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
  @media (max-width: 1081px) {
    display: none;
  }
`;

export const BodyConteinerTab = styled.div`
  @media (max-width: 1081px) {
    display: visible;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 1081px) {
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
  @media (max-width: 800px) {
    min-width: 300px;
  }
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
  @media (max-width: 430px) {
    width: 290px;
    height: 290px;
    background-position: center;
  }
  /* &:hover {
    background-color: black;
  } */
`;
//conteiner wp
export const conteinerWP = styled.div`
  width: auto;
  display: flex;
  justify-content: end;
`;
//icono de whattsApp
export const IconWP = styled.button`
  background-color: white;
  border: 0;
  width: 2rem;
  height: 2rem;
  background-repeat: no-repeat;
  object-fit: cover;
`;
export const Button = styled.button`
  padding: 0.8em 1.8em;
  border: 2px solid #17c3b2;
  position: relative;
  overflow: hidden;
  background-color: transparent;
  text-align: center;
  text-transform: uppercase;
  font-size: 16px;
  transition: 0.3s;
  z-index: 1;
  font-family: inherit;
  color: #17c3b2;
`;
export const boton = styled.button`
  content: "";
  width: 0;
  height: 300%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  background: #17c3b2;
  transition: 0.5s ease;
  display: block;
  z-index: -1;
`;
