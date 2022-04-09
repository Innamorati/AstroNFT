import React from "react";
import {BackgroundError404, ButtonBackToHome, ImageError} from '../styles/StyleError404';
import { Link as LinkRouter } from 'react-router-dom';

const Error404 = () => {
    return(
        <BackgroundError404>
            <p>Error 404</p>
            <p>Oops! Page not found</p>
            <ImageError>
            <img src={process.env.PUBLIC_URL + '/assets/image-12.png'} alt="astronaut" />
            </ImageError>
            <LinkRouter to={'/home'}> <ButtonBackToHome>Back to Home</ButtonBackToHome> </LinkRouter>
        </BackgroundError404>
    );
}
export default Error404;