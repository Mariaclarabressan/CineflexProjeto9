import styled from "styled-components"

import { useNavigate } from "react-router-dom"

export default function SuccessScreen(){
    
    
    
    const {movie, day, time, seats, buyer} = JSON.parse(window.localStorage.getItem("userInfo") )

    const navigate = useNavigate();
    
    function comeHome(){

        navigate('../');

        window.localStorage.removeItem("userInfo")
    }
    return(
        <Container>
            <BuyerInformation>
                <h1>Pedido feito com sucesso!</h1>
                <Details>
                    <h1>Filme e sessão</h1>
                    <p>{movie}</p>
                    <p>{day}  {time}</p>
                </Details>
                <Details>
                    <h1>Ingressos</h1>
                    {seats.map((number) =>{
                        return <p key = {number}>Assento {number}</p>;
                    })}
                </Details>
                <Details>
                    <h1>Comprador</h1>
                    <p>Nome: {buyer.name}</p>
                    <p>CPf: {buyer.cpf}</p>
                </Details>
            </BuyerInformation>
            <ButtonComeHome onClick = {comeHome}>Voltar para a sessão de filmes</ButtonComeHome>
        </Container>
    )
}
const Container = styled.div `
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    h1{
        height: 100px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #247A6B;
        padding-top: 50px;
    }
`;
const BuyerInformation = styled.div `
    font-size: 22px;

    h1{
        width: 370px;
        height: 60px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #247a6b;
        font-weight: 700;
    }
`;

const ButtonComeHome = styled.div `
        width: 225px;
        height: 42px;
        color: #FFFFFF;
        background-color: #E8833A;
        cursor: pointer;
        border-radius: 3px;
        border: none;
        font-size: 18px;
`;
const Details = styled.div`
    display: flex;
    flex-direction: column;
    h1{
         display: flex;
         justify-content: flex-start;
         align-items: center;
         color: black;
         font-weight: 700;

    }
    p{
        line-height: 25px;
    }
`;