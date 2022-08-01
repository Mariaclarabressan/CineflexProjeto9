import axios from "axios"
import styled from "styled-components"
import { useState,useEffect } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Seat from "./Seat"
import SuccessScreen from "./SuccessScreen"

export default function SeatsScreen(props){
    

    const navigate = useNavigate();

    const {movieTimeID} = useParams();

    const [informationUser, setInformationUser] = useState({cpf:"", nome: ""})

    const [session, setSession] = useState(null);  

    const [selectSeats, setSelectSeats] = useState([]);

    useEffect(() => {
        const URL =`https://mock-api.driven.com.br/api/v7/cineflex/showtimes/${movieTimeID}/seats`;
        
        const promise = axios.get(URL)

    promise.then(response => {
        const {data} = response ; 
        setSession(data);       
    })    
    promise.catch((error) => {
        alert("Communication problems with the server, please try later.")
    })  

    }, [])
    
    function toggle(id){
        
        const alreadySelected = selectSeats.some(userSeat => userSeat === id);
        
        if(!alreadySelected){
            setSelectSeats([...selectSeats, id] );
        }
        else{
            const newSeats = selectSeats.filter(userSeats => userSeats !== id );
            setSelectSeats(newSeats);
        }
    }

    function AvailableSeats(){
        
        if( session) {
            
            return session.seats.map(seat => {
                const{ id, name, isAvailable} = seat;


                const clicked = selectSeats.some(userSeat => userSeat === id); 

                return(
                    <Seat key = {id} id = {id} number = {name} available = {isAvailable} clicked = {clicked} 
                    unclicked = {() => toggle(id)}
                    />                    
                )
            })
        }
        else {
            return(
                <p>Carregando....</p>
            )
        }
    }

    function PurchaseInformation(FinalizePurchase){
        return(
            <>
                <label htmlFor="name">Nome do comprador: </label>
                <input type="text" id="name" value = {informationUser.name} placeholder = "Digite seu nome..." required onChange={ e => setInformationUser ({...informationUser , name: e.target.value})} />


                <label htmlFor="CPF">CPF do comprador: </label>
                <input type="text" id="cpf" value = {informationUser.cpf} placeholder = "Digite seu CPF..." required onChange={ e => setInformationUser ({...informationUser , cpf: e.target.value})} />         

                <div>
                    <button onClick={FinalizePurchase}>Reservar assentos</button>
                </div>   
            </>
        );
    }

    function FinalizePurchase (){
        
        if(selectSeats.length >0){
            const URL = `https://mock-api.driven.com.br/api/v7/cineflex/seats/book-many`;
            const promise = axios.post(URL, {
                ids: selectSeats,
                name: informationUser.name,
                cpf: informationUser.cpf
            });

            promise.then(response => {
                
                window.localStorage.setItem("userInfo", JSON.stringify({
                    movie: session.movie.title,
                    day: session.day.date,
                    time: session.name,
                    seats: selectSeats,
                    buyer: informationUser,
                }))
                navigate('/success')
            });

            promise.catch(err => alert(err.response.statusText));
            
        }else{
            alert("Please select at least one seat");
        }
    }

    return(
        <Container>
            <h1>Selecione os assentos</h1>
            <Seats><AvailableSeats/></Seats>
            <Form >{PurchaseInformation(FinalizePurchase)}</Form>
        </Container>
    )
}

const Container = styled.div`
    margin: 70px 30px;
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
    }
`;

const Seats = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 20px;
    justify-content: center;
    align-items: center;
`
const Form = styled.div`
    display: flex;
    flex-direction: column;
    align-self: start;
    width: 100%;

    input{
        width: 300px;
        height: 40px;
        border-radius: 3px;
        font-size: 18px;
        font-family: 'Roboto';
        padding: 0 20px;
        margin-bottom: 20px;
    }

    button{
        width: 225px;
        height: 42px;
        color: #FFFFFF;
        background-color: #E8833A;
        cursor: pointer;
        border-radius: 3px;
        border: none;
        font-size: 18px;
        
    }

    div{
        display: flex;
        align-items: center;
        flex-direction: center;
    }
`
