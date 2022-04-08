import styled from "styled-components";

export const BackgroundError404 = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #97c6fe; /* #83B1FF; */

    p:nth-child(1) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 9rem;
    font-weight: 700;
    color: #333333;

    @media (max-width: 700px) {
        font-size: 7rem;
    }

    @media (max-width: 500px) {
        font-size: 5rem;
    }

    @media (max-width: 360px) {
        font-size: 4rem;
    }

    }

    p:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 500;
    font-size: 2rem;
    color: #333333;

    @media (max-width: 700px) {
        font-size: 1.5rem;
    }

    @media (max-width: 360px) {
        font-size: 1rem;
    }
    }

    a {
        text-decoration: none;
    }
`;

export const ButtonBackToHome = styled.button`
    width: 20%;
    height: 3rem;
    border-radius: 10px;
    background-color: #f2c94c;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: auto;
    color: #333333;

    @media (max-width: 560px){
        width: 30%;
    }

    @media (max-width: 370px){
        width: 40%;
    }
`;

export const ImageError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10%;
    width: 100%;

    @media (max-width: 360px) {

        img{
            width: 70%;
        }
        
    }
`;