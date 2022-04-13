import styled from "styled-components";

export const ContactBack = styled.div`
  display: flex;
  width: 100%;
  /* min-height: 100vh; */
  height: 50rem;
  background-image: url("${process.env.PUBLIC_URL + "/assets/contact.png"}");
  background-position:center ;
  background-size:cover ;
`;
export const ContactContainer = styled.div`
  width: 30%;
  min-height: 75vh;
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin: auto;
  border-radius: 20px;
  box-shadow: 0 12px 16px rgba(0, 0, 0, 0.27);
  
  @media (max-width: 800px) {
    width: 45%;
  }

  @media (max-width: 550px) {
    width: 55%;
  }

  @media (max-width: 400px) {
    width: 65%;
  }
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  width: 90%;
`;
export const Title = styled.div`
  font-size: 31px;
  font-weight: 700;
  text-align: center;

  @media (max-width: 550px) {
    font-size: 25px;
  }

  @media (max-width: 400px) {
    font-size: 20px;
  }
`;
export const ContactButton = styled.div`
  width: 90%;
  height: 2rem;
  border-radius: 10px;
  background-color: #f2c94c;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  margin: 1rem 0;
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

export const Select = styled.div`
  select:nth-child(1) {
    width: 90%;
    height: 2rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    border: 1px solid #E9E5E5;
  }
`;
export const Text = styled.div`
  textarea:nth-child(1) {
    width: 90%;
    height: 7rem;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0;
    border: 1px solid #E9E5E5;
    resize: none;
  }
`;
export const ContactInputs = styled.div`
  label {
    font-size: 12px;
    font-weight: 700;
  }

  input {
    margin-top: 0.5rem;
    border: 1px solid #e9e5e5;
    border-radius: 10px;
    width: 90%;
    height: 2rem;
    padding: 0.5rem;
  }
`;
