import styled from "styled-components";

export const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: aliceblue;
`;

export const LogoAstroNFT = styled.div`
  display: flex;
  align-items: center;
  h2 {
    text-decoration: none;
  }
`;

export const LogoText = styled.h2`
  font-size: 1.5em;
  color: black;
  margin-left: 0.5em;
`;
export const NavBarAstroNFT = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  text-decoration: none;

  background-color: rgba(255, 255, 255, 0.322);
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.27);

  @media (max-width: 600px) {
    display: none;
  }
`;

export const NavBarButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 20em;
  a {
    text-decoration: none;
  }
  h2 {
    text-decoration: none;
  }
`;
export const NavButton = styled.button`
  align-items: center;
  background-color: #ffffff;
  border: none;
  box-sizing: border-box;
  color: rgba(0, 0, 0, 0.85);
  cursor: pointer;
  display: inline-flex;
  font-family: system-ui, -apple-system, system-ui, "Helvetica Neue", Helvetica,
    Arial, sans-serif;
  font-size: 16px;
  font-weight: 600;
  justify-content: center;
  line-height: 1.25;
  min-height: 3rem;
  padding: calc(0.875rem - 1px) calc(1.5rem - 1px);
  transition: all 250ms;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  width: auto;
`;

export const NavIconButtons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: 10em;
`;
export const NotUnderlined = styled.a`
  text-decoration: none;
`;
export const VerticalNavBar = styled.nav`
  display: none;
  @media (max-width: 600px) {
    display: flex;
    justify-content: flex-end;
    wdith: 100%;
  }
`;
