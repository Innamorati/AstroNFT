import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
  height: 65rem;
  width: 100%;
`;
export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 32%;
  min-height: 60vh;
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin: auto;
  border-radius: 20px;
  p {
    text-align: center;
  }

  @media (max-width: 850px) {
    width: 50%;
  }

  @media (max-width: 550px) {
    width: 60%;
  }

  @media (max-width: 450px) {
    width: 85%;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 2rem;
  margin-left: 2rem;
  width: 90%;
`;
export const Label = styled.label`
  font-size: 16px;
  font-weight: 700;
  text-align: start !important;
`;
export const Input = styled.input`
  margin-top: 0.5rem;
  border: 1px solid #e9e5e5;
  border-radius: 10px;
  width: 90%;
  height: 3rem;
  padding: 0.5rem;
  outline: none;
`;

export const Title = styled.h2`
  font-size: 31px;
  font-weight: 700;
  text-align: center;
  margin-top: -1rem;
`;
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

  button:nth-child(1) {
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

export const GoogleButton = styled.div`
  margin: 1rem 0;
  width: 90%;
  height: 3rem;
  border: 1px solid #e9e5e5;
  border-radius: 10px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;

  button {
    color: #333333 !important;
    border: none !important;
    box-shadow: none !important;
    font-weight: bolder !important;
    font-size: 14px !important;
    line-height: 125% !important;
    color: black !important;
  }
`;

export const FacebookButton = styled.div`
  button {
    margin-bottom: 1rem;
    width: 90%;
    height: 3rem;
    border-radius: 10px;
    color: white;
    background-color: #4080ff;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px !important;
    font-size: 12px !important;
    margin-bottom: 2rem !important;
  }
`;
export const CallToAction = styled.div`
  width: 90%;
  height: 3rem;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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
export const RememberMe = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
  align-items: center;
  margin-top: 1rem;

  input {
    margin-right: 1rem;
  }

  label {
    color: #828282;
  }
`;
export const SignInButton = styled.button`
  width: 90%;
  height: 3rem;
  border-radius: 10px;
  background-color: #3baaff;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin-top: 1rem;

  button:nth-child(1) {
    background-color: #3baaff;
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
export const Or = styled.p`
  text-align: center;
  margin: 2rem 1.5rem -1rem 0;
`;

export const InputPassword = styled.div`
  div:nth-child(1) {
    margin-top: 0.5rem;
    border: 1px solid #e9e5e5;
    border-radius: 10px;
    width: 90% !important;
    height: 3rem;
    padding: 0.5rem;
  }

  InputAdornment {
    width: 90% !important;
  }
`;
export const PasswordDiv = styled.div`
  display: flex;
  align-items: center;

  Input {
    width: 75%;
  }

  button {
    background-color: transparent;
    border: none;
    height: 50px;
    width: 50px;
  }
`;
