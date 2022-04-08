import React from "react";
import {BackgroundError404, ButtonBackToHome, ImageError} from '../styles/StyleError404';
import { Link as LinkRouter } from 'react-router-dom';

const Error404 = () => {
    return(
        <BackgroundError404>
            <p>Error 404</p>
            <p>Sorry! Page not found ☹</p>
            <ImageError>
            <img src={process.env.PUBLIC_URL + '/assets/error1.jpg'} alt="astronaut" />
            {/* <img src={process.env.PUBLIC_URL + '/assets/error4.jpg'} alt="astronaut-moon" /> */}
            </ImageError>
            <LinkRouter to={'/home'}> <ButtonBackToHome>Back to Home</ButtonBackToHome> </LinkRouter>
        </BackgroundError404>
    );
}
export default Error404;