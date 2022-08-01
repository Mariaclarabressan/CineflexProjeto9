
import axios from "axios";
import { useEffect, useState } from "react";
import Movie from "./Movie";
import styled from 'styled-components'

export default function Home(){
    
    const [movies, setMovies] = useState([])    

    useEffect(() => {
        const URL = "https://mock-api.driven.com.br/api/v7/cineflex/movies";
        
        const promise = axios.get(URL)

    promise.then(response => {
        const {data} = response ; 
        setMovies(data);        
    })    
    promise.catch((error) => {
        alert("Communication problems with the server, please try later.")
    })  

    }, [])

    return(  
        <div>     

        <Container>
            <h1>Selecione o filme</h1>
            <div>
                {
                    movies.map(movie => {
                        const {posterURL, title, id} = movie
                        return <Movie key = {id} id={id} posterURL={posterURL} title={title}/>
                    })
                }
            </div>
        </Container>
        </div>
    )
}
const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
h1 {
    height: 100px;
    font-size: 24px;
    text-align: center;
    padding-top: 80px;
}
div{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

`