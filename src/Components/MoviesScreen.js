
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from 'styled-components'
import SessionTime from "./SessionTime";

export default function MoviesScreen(){

    const {movieID} = useParams();

    const [movie, setMovie] = useState(null)    

    useEffect(() => {
        const URL =`https://mock-api.driven.com.br/api/v7/cineflex/movies/${movieID}/showtimes`;
        
        const promise = axios.get(URL)

    promise.then(response => {
        const {data} = response ; 
        setMovie(data);       
    })    
    promise.catch((error) => {
        alert("Communication problems with the server, please try later.")
    })  

    }, [])

    function showSession (){
        
        if (movie !== null){
            console.log(movie.days);
            return movie.days.map(day=> {
                const{weekday, date, showtimes, id} = day;
                return <SessionTime key = {id} weekday = {weekday}  id = {id} date = {date} showtimes = {showtimes}/>
            })

        }else{
            return <p>Loading....</p>
        }
        
    }

    function footerSession(){
        if(movie !== null ){
            const {posterURL, title} = movie;

            return(
                <>
                    <img src = {posterURL} alt = {title}/>
                    <h1>{title}</h1>
                </>
            );
        }else{
            return <></>
        }
    }

    return(
        <Container>
            <h1>Selecione o horário</h1>
            <Days>{showSession()}</Days>
            <Footer>{footerSession()}</Footer>
        </Container>
    )
}

const Days = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    margin: 70px 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 50px;
    h1{
        height: 100px;
        font-size: 24px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`
const Footer = styled.div`
    position : fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 120px;
    display: flex;
    align-items: center;
    background-color: #9EADBA;
    img{
        width: 48px;
        height: 72px;
        padding: 8px;
        background-color: #FFFFFF;
        border-radius: 3px;
        margin: 10px;
    }
    h1{
        font-size: 26px;
    }

`;