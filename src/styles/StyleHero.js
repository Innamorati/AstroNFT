import styled from "styled-components";

export const BackgroundHero = styled.div`
    display: flex;
    width: 100%;
    height: 30rem;
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap');
`;
export const HeroTitle = styled.h1`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 50%;
    color: white;
    font-weight: 700;
    margin: 3rem 0 1rem 0rem;
    text-align: center;

    @media (max-width: 800px) {
        font-size: 1.5rem;
        font-weight: 700;
        margin: auto;
        margin-bottom:1rem;
    }

    @media (max-width: 600px) {
        font-size: 1rem;
        font-weight:700;
        margin: auto;
        margin-bottom:1rem ;
    }
    @media (max-width: 350px) {
        font-size: .8rem;
        font-weight:500;
        margin: auto;
        margin-bottom:-5rem ;
    }
`;

export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    a {
        text-decoration: none;

}
`;

export const HeroParagraph = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 50%;
    color: white;
    margin: 1.5rem 0 1rem 0rem;
    text-align: center;

    margin-bottom:-5rem ;
    @media (max-width: 800px) {
        font-size: 1rem;
        margin-bottom:-5rem ;
    }
    @media (max-width: 600px) {
        font-size: .8rem;
        margin-bottom:-7rem ;
    }
    @media (max-width: 350px) {
        font-size: .7rem;
        margin: auto;
        margin-bottom:-5rem ;
    }
`;

export const HeroButton = styled.button`
    --color: #F2C94C;
    font-family: inherit;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 10em;
    height: 2.6em;
    line-height: 2.5em;
    margin: 20px;
    position: relative;
    overflow: hidden;
    border: 3px solid var(--color);
    transition: color .5s;
    z-index: 1;
    font-size: 17px;
    border-radius: 6px;
    font-weight: 900;
    color: var(--color);
    background: transparent;
    margin: auto;

    &:before {
    content: "";
    position: absolute;
    z-index: -1;
    background: var(--color);
    height: 150px;
    width: 300px;
    border-radius: 50%;
    text-align: center;
}

&:hover {
    color: #fff;
    text-align: center;
}

&:before {
    top: 100%;
    left: 100%;
    transition: all .7s;
    text-align: center;
}

&:hover:before {
    top: -30px;
    left: -30px;
    text-align: center;
}

&:active:before {
    background: #F2C94C;
    transition: background 0s;
    text-align: center;
}

/* @media (max-width: 800px) {
    font-size: 1rem;
    width: 10em;
} */

@media (max-width: 600px) {
    font-size: 1rem;
    font-size: 1rem ;
    font-weight:300 ;
    width: 10em;
    width: 7em;
}
@media (max-width: 350px) {
    font-size: 1rem ;
    font-weight:100 ;
    width: 7em;
}
`;

export const HeroImage = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 50%;
`;
export const Astronaut = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* img {
        height: 436px;
        width: 389px;
    }
 */
    @media (max-width: 900px) {

        /* img {
            width: 336px;
            height: 287px;
        } */

        img {
            width: 70%;
            height: 50%;
        }
    }
/* 
    @media (max-width: 700px) {
        img {
            width: 236px;
            height: 187px;
        }
    } */
    
`;