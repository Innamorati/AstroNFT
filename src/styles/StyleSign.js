import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
    height: 65rem;
    width: 100%;

`;
export const FormContainer = styled.div`
    width: 26%;
    height: 70vh;
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin: auto;
    border-radius: 20px;


    @media (max-width: 650px) {
        width: 50%;
    }

    @media (max-width: 400px) {
        width: 85%;
    }
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 2rem;
    width: 90%;

   /*  @media (max-width: 800px) {
        width: 16rem;
        height: 33rem;
    } */
`;
export const Label = styled.label`
    font-size: 16px;
    font-weight: 700;
    text-align: start !important;

    /* @media (max-width: 800px) {
        font-size: 13px;
        padding-left: 1rem;
    } */
`;
export const Input = styled.input`
    margin-top: .5rem;
    /* border: 1px solid #E9E5E5; */
    border: 1px solid black;
    border-radius: 10px;
    width: 90%;
    height: 3rem;
    /* margin-bottom: 1rem; */
    
/*     @media (max-width: 800px) {
        width: 90%; */
        /* margin: auto; */
   /*  } */
`;

export const Title = styled.h2`
    font-size: 31px;
    font-weight: 700;
    text-align: center;
    margin-top: -1rem;

  /*   @media (max-width: 800px) {
        margin-top: -2.5rem;
        font-size: 21px;
    } */
`
export const SignUpButton = styled.button`
    width: 90%;
    height: 3rem;
    border-radius: 10px;
    background-color: #f2c94c;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    margin-top: 1rem;

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
/* 
    @media (max-width: 800px) {
        width: 90%;
        height: 2rem;
        margin: auto;
        margin-top: 1rem;

        Input:nth-child(1){
            font-size: 1rem;
            font-weight: 500;
        }
    } */
`;

export const GoogleButton = styled.div`
    margin: 1rem 0;
    width: 90%;
    height: 3rem;
    /* border: 1px solid #f2c94c; */
    border: 1px solid #E9E5E5;
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;

    button {
        color: #333333 !important;
        border: none !important;
        box-shadow: none !important;
        font-weight: 700 !important;
        font-size: 14px !important;
        line-height: 125% !important;
    }
    


    color: black !important;
    box-shadow: 3px #114861 !important;
    letter-spacing: 2px;

  /*   @media (max-width: 800px) {
        width: 90%;
        height: 2rem; */
        /* margin: auto; */
        /* margin-top: 1rem; */

    
`;

export const FacebookButton= styled.div`
    margin-bottom: 1rem;
    width: 90%;
    height: 3rem;
    border-radius: 10px;
    color: white;
    background-color: #4080ff;
    display: flex;
    align-items: center;
    justify-content: center;

 /*    @media (max-width: 800px) {
        width: 90%;
        height: 2rem; */
        /* margin: auto; */
/*         margin-top: 1rem; */
    
`;
export const CallToAction = styled.div`
    width: 90%;
    height: 10rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: auto;
    text-align: center;

    a {
        color: #4080ff !important;
        font-weight: 500;
        text-decoration: none;
        margin-left: 2px;
    }

    @media (max-width: 400px) {
        font-size: 12px;
    }


`;

