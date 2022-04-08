import React from "react";
import {BackgroundError404, ButtonBackToHome} from '../styles/StyleError404';

const Error404 = () => {
    return(
        <BackgroundError404>
            <p>Error 404</p>
            <ButtonBackToHome>
                Back to Home
            </ButtonBackToHome>
        </BackgroundError404>
    );
}
export default Error404;