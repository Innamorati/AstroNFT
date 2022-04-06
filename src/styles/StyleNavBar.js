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

    a {
        text-decoration: none;
    }
`;

export const LogoText = styled.h2`
    font-size: 1.5em;
    color: black;
    text-decoration: none;
    margin-left: 0.5em;
`;
export const NavBarAstroNFT = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  flex-wrap: wrap;
  text-decoration: none;

    @media (max-width: 650px){
        display: none;
    }
`;

export const NavBarButtons = styled.div`
    display: flex;
    justify-content: space-between;
    width: 30em;

    a {
        text-decoration: none;
    }
`;
export const NavButton = styled.button`
    align-items: center;
    background-color: #FFFFFF;
    border: none;
    box-sizing: border-box;
    color: rgba(0, 0, 0, 0.85) !important;
    cursor: pointer;
    display: inline-flex;
    font-family: system-ui,-apple-system,system-ui,"Helvetica Neue",Helvetica,Arial,sans-serif;
    font-size: 16px;
    font-weight: 600;
    justify-content: center;
    line-height: 1.25;
    min-height: 3rem;
    padding: calc(.875rem - 1px) calc(1.5rem - 1px);
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
    width: 20em;
`;
export const NotUnderlined = styled.a`
  text-decoration: none;
`;
export const VerticalNavBar = styled.nav`
    display: none;
    @media (max-width: 650px){
        display: flex;
        justify-content: flex-end;
        wdith: 100%;
    }
`;
export const DropdownSign = styled.button`
    display: flex;
    width: 2rem;
    justify-content: center;
    padding: 0;
    border: none;
    background-color: white;
    
    button{
        padding: 0;
        border: none;
    }

    .btn {
        background-color: white;
    }

    .show>.btn-primary.dropdown-toggle {
        border: none;
        background-color: white;
    }

    .btn-primary {
        background-color: white;
    }
    .dropdown-menu {
        min-width: 5rem !important;
    }
    
    div.dropdown-menu.show {
        text-align:center;
    }

    a.dropdown-item {
        font-weight: bold;
    }
`;

export const SideNav = styled.div`
    display: flex;
    justify-content: space-between;

    .bg-light {
        background-color: white !important;
    }
`;

export const LogoAstroNFTResponsive = styled.div`
    display: none;
    @media (max-width: 650px){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        width: 50%;
        margin-left: 1em;

        a {
            text-decoration: none;
        }
}
`;

export const ShoppingCart = styled.div`
    display: none;
    @media (max-width: 650px){
        display: flex;
        justify-content: flex-end;
        align-items: center;
        align-content: center;
        flex-direction: row;
        width: 100%;
    }
`;

export const SignButton = styled.div`
    color: rgba(0,0,0,0.85);
    font-weight: 500;
`;

export const SideNavButton = styled.div`
    display: flex;
    justify-content: center;
    padding: 15px 25px;
    margin: 5px 5px;;
 color: #212121;
 z-index: 1;
 position: relative;
 font-weight: 500;
 font-size: 17px;
 transition: all 250ms;
 overflow: hidden;
    text-align: center;
    a {
        text-decoration: none;
    }
button::before {
 content: "";
 position: absolute;
 top: 0;
 left: 0;
 height: 100%;
 width: 0;
 border-radius: 15px;
 background-color: #212121;
 z-index: -1;
 -webkit-box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 box-shadow: 4px 8px 19px -3px rgba(0,0,0,0.27);
 transition: all 250ms
}

button:hover {
 color: #e8e8e8;
}

button:hover::before {
 width: 100%;
}
`;

export const ResponsiveNavButtons = styled.div`
    a {
        text-decoration: none;
    }
`
export const SideNavButtonSign = styled.div`
    color: rgba(0,0,0,0.85);
    font-weight: 500;
    text-align: center;
`
