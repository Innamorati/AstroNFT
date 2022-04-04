import React from 'react'
import { Link } from 'react-router-dom';
// import { Title } from '../styles/StyleNavBar';

const NavBar = () => {
    return ( 
<>
<div>
    <div>
        <LogoAstroNFT>
        <Link to={'/home'}>
    <img src={process.env.PUBLIC_URL+'/assets/logo.jpg'} alt='logo'/>
    <p>AstroNFT</p>
        </Link>
        </LogoAstroNFT>
    </div>
        <div>
        {/* <Title>hola me llamo franco</Title> */}
    <Link to={'/products'}> 
    <button>
Products
    </button>
    </Link> 
        <Link to={'/products'}> 
    <button>
Contact
    </button>
    </Link> 
    <div>
        <Link to={'/products'}><img src={process.env.PUBLIC_URL+'/assets/shopping-cart.jpg'}/></Link>
        <Link to={'/home'}><img src={process.env.PUBLIC_URL+'/assets/user.jpg'}/></Link>
    </div>
        </div>
</div>


</>
    );
}

export default NavBar;