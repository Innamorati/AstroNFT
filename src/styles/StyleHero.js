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
`;
export const HeroText = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
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
 align-text: center;
}

&:hover {
 color: #fff;
 align-text: center;
}

&:before {
 top: 100%;
 left: 100%;
 transition: all .7s;
 align-text: center;
}

&:hover:before {
 top: -30px;
 left: -30px;
 align-text: center;
}

&:active:before {
 background: #3a0ca3;
 transition: background 0s;
 align-text: center;
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

    @media (max-width: 900px) {

        img {
            width: 336px;
            height: 287px;
        }
    },

    @media (max-width: 700px) {
        img {
        width: 236;
        height: 187;
        }
    }
    
`;