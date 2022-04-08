import { style } from "@mui/system";
import styled from "styled-components";

export const DivGeneral = styled.div`
    width: 100%;
    min-height: 100vh;
    position: relative;
`;

export const ImgAstro = styled.div`
    width: 300px;
    height: 300px;
    background-position: center;
    background-size: cover;
    position: absolute;
    right: 0;
    bottom: 0;
`;


export const ContainerCart = styled.div`
    width: 100%;
    padding: 2rem 10rem 2rem 10rem;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

export const HeaderCart = styled.div`
    width: 100%;
    color: black;
    font-size: 2rem;
    font-weight: 500;
`;

export const CardProducts = styled.div`
    width: 80%;
    background-color: #FFFFF5;
    margin-top: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    box-shadow: 0 12px 16px rgb(0 0 0 / 27%);
`;

export const ImageProducts = styled.div`
    width: 100px;
    height: 100px;
    background-size: cover;
    background-position: center;
    border-top-left-radius: 1rem;
    border-bottom-left-radius: 1rem;
`;

export const DivTitle = styled.div`
    /* background-color: blueviolet; */
    margin-right: 2rem;
`;

export const TitleProducts = styled.div`
    font-size: 1.2rem;
    /* background-color: aqua; */
`;

export const CategoryProducts = styled.div`
    font-size: 1.2rem;
    /* background-color: green; */
`;

export const PrecioEth = styled.div`
    display: flex;
    justify-content: center;
`;

export const IconEth = styled.image`
    width: 20px;
    height: 40px;
    background-size: cover;
    background-position: center;
`;

export const Ether = styled.div`
    font-size: 1.5rem;
    font-weight: 500;
`;

export const PrecioArg = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const ArsMoney = styled.div`
    font-size: 1rem;
`;

/* MEDIOS DE PAGOS */

export const CardProducts2 = styled.div`
    width: 80%;
    background-color: #FFFFF5;
    margin-top: 2rem;
    border-radius: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    box-shadow: 0 12px 16px rgb(0 0 0 / 27%);
`;

export const HeaderCart2 = styled.div`
    width: 100%;
    color: black;
    font-size: 2rem;
    font-weight: 500;
    padding-top: 2rem;
`;

export const Method = styled.div`
    width: 80%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 3rem;
`;

export const BtnCart = styled.button`
    display: flex;
    justify-content: flex-end;
    margin-top: 1rem;
    color: white;
    background-color: #2355F2;
    border: none;
    font-size: 2rem;
    border-radius: 1rem;
    padding: .5rem 1.5rem;

    &:hover{
        background-color: #0034B3;
    }
`;

export const ButtonMethod = styled.div`
    width: 80%;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 15rem;
    padding-top: 2rem;
    z-index: 10;
`;