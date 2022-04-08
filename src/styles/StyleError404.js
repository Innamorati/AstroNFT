import styled from "styled-components";

export const BackgroundError404 = styled.div`
    min-height: 100vh;
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    background-color: #83B1FF;

    p:nth-child(1){
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 15rem;
    font-weight: 700;
    }
`;

export const ButtonBackToHome = styled.button`
    width: 15%;
    height: 3rem;
    border-radius: 10px;
    background-color: #f2c94c;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin: auto;

    button:nth-child(1){
        background-color: #f2c94c;
        border: none;
        color: white;
        font-weight: 700;
        font-size: 1.1rem;
        letter-spacing: 2px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;