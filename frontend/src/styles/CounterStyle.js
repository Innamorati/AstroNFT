import styled from "@emotion/styled";

export const Counter = styled.div`
    display:flex ;
    flex-direction: row;
    justify-content: space-evenly;
    justify-items: center;
    margin-top: -3rem;
    @media (max-width:500px){
        display: flex;
        justify-content: space-between;
    }
`;

export const Count1 = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width:10rem;
    height:8rem;  
    border-radius:13px ;
    background-color:#ffff ;
    text-align:center ;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.270);
    /* overflow: hidden; */
    /* padding: 8px; */

    @media (max-width:1000px){
        margin:1rem ; 
    }
    @media (max-width:650px){
        padding: 6px;
        margin:1rem .2rem;
    }
    @media (max-width:480px){
        padding: 3.5px;
        margin:1rem .2rem;
        box-shadow: 0 0 9px rgba(0, 0, 0, 0.270);
    }
`;
export const Count2 = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width:10rem;
    height:8rem;  
    border-radius:13px ;
    background-color:#ffff ;
    text-align:center ;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.270);

    @media (max-width:1000px){
        /* Width:30%;
        min-Height:28%; */
        margin:1rem ; 
    }

    @media (max-width:650px){
        padding: 6px;
        margin:1rem .2rem;
    }
    @media (max-width:480px){
        padding: 3.5px;
        margin:1rem .2rem;
        box-shadow: 0 0 9px rgba(0, 0, 0, 0.270);
    }
`;
export const Count3 = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width:10rem;
    height:8rem; 
    border-radius:13px ;
    background-color:#ffff ;
    text-align:center ;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.270);

    @media (max-width:1000px){
        /* Width:30%;
        min-Height:28%; */
        margin:1rem ;
    }
    @media (max-width:650px){
        padding: 6px;
        margin:1rem .2rem;
    }
    @media (max-width:480px){
        padding: 3.5px;
        margin:1rem .2rem;
        box-shadow: 0 0 9px rgba(0, 0, 0, 0.270);
    }
`;
export const Count4 = styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width:10rem;
    height:8rem;  
    border-radius:13px ; 
    background-color:#ffff ;
    text-align:center ;
    box-shadow: 0 12px 16px rgba(0, 0, 0, 0.270);

    @media (max-width:1000px){
        /* Width:30%;
        min-Height:28%; */
        margin:1rem ;
    }
    @media (max-width:650px){
        padding: 6px;
        margin:1rem .2rem;
    }
    @media (max-width:480px){
        padding: 3.5px;
        margin:1rem .2rem;
        box-shadow: 0 0 9px rgba(0, 0, 0, 0.270);
    }
`;

export const PrimerP = styled.div`
    font-size:1.7rem ;
    font-weight:500 ;

    @media (max-width:750px){
        font-size: 22px;
        font-weight:400;
    }

    @media (max-width:500px){
        font-size: 14px;
        font-weight:400;
    }
    @media (max-width: 380px) {
        font-size: 12px;
        font-weight: 400;
    }
`;

export const SegundoP = styled.div`
    font-size:.8rem ;
    font-weight:300 ;

    @media (max-width:500px){
        font-size: 14px;
        font-weight:400 ;
    }
    @media (max-width: 380px) {
        font-size: 12px;
        font-weight: 400;
    }
`;