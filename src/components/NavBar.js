import React from 'react'
import { Link } from 'react-router-dom';
// import { Title } from '../styles/StyleNavBar';
import { LogoAstroNFT, LogoText, NavBarAstroNFT, NavBarButtons, NavButton, NavIconButtons, NotUnderlined } from '../styles/StyleNavBar';
const NavBar = () => {
    return ( 
<>
<NavBarAstroNFT>
    <LogoAstroNFT>
        <Link to={'/home'}>
            <img src={process.env.PUBLIC_URL+'/assets/logo.jpg'} alt='logo'/>
        </Link>
        <Link to={'/home'}>
            <LogoText>AstroNFT</LogoText>
        </Link>
    </LogoAstroNFT>
        {/* <Title>hola me llamo franco</Title> */}
    <NavBarButtons>
    <Link to={'/products'}> 
        <NavButton>
Products
        </NavButton>
    </Link> 
        <Link to={'/contact'}> 
    <NavButton>
Contact
    </NavButton>
    </Link> 
    <NavIconButtons>
        <Link to={'/products'}><img src={process.env.PUBLIC_URL+'/assets/shopping-cart.jpg'}/></Link>
        <Link to={'/contact'}><img src={process.env.PUBLIC_URL+'/assets/user.jpg'}/></Link>
    </NavIconButtons>
    </NavBarButtons>
</NavBarAstroNFT>


</>
    );
}

export default NavBar;