import styled from "styled-components";

export const MainContainer = styled.div`
    display: flex;
/*     justify-content: center; */
    min-height: 100vh;
    width: 100%;
`;
export const FormContainer = styled.div`
    width: 26rem;
    height: 43rem;
    display: flex;
    justify-content: center;
    background-color: #fff;
    margin: auto;
    border-radius: 20px;
`;
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
`;
export const Label = styled.label`
    font-size: 16px;
    font-weight: 700;
    text-align: start;
`;
export const Input = styled.input`
    margin-top: .5rem;
    border: 1px solid #E9E5E5;
    border-radius: 10px;
    margin-bottom: 1rem; 
`;

export const Title = styled.h2`
    font-size: 31px;
    font-weight: 700;
    text-align: center;
`
export const SignUpButton = styled.button`
    width: 22rem;
    height: 3rem;
    border-radius: 10px;
    background-color: #f2c94c;
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;

    Input:nth-child(1){
        background-color: #f2c94c;
        border: none;
        color: white;
        font-weight: 700;
        font-size: 1.5rem;
        letter-spacing: 2px;
    }
`;

export const GoogleButton = styled.div`
    margin: 1rem 0;
    width: 22rem;
    height: 3rem;
    border: 1px solid #f2c94c;
    border-radius: 10px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;

export const FacebookButton= styled.div`
    margin: 1rem 0;
    width: 22rem;
    height: 3rem;
    border-radius: 10px;
    color: white;
    background-color: #4080ff;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const CallToAction = styled.div`
    width: 18rem;
    height: 2rem;
    margin: auto;

    a {
        color: #4080ff !important;
        font-weight: 500;
    }
`;