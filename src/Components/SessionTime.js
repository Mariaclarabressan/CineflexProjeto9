import { Link } from "react-router-dom";
import styled from "styled-components"; 

 export default function SessionTime(props){

    const {weekday, date, showtimes} = props;

    function buttonSession(){
        return showtimes.map(session => {
            const {id, name} = session;

            return (
                <Link key = {id} to = {`/seats/${id}`}>
                    <button>{name}</button>   
                </Link>                
            );
        })
    }

    return(
        <Container>
            <p>
                {weekday} - {date}
            </p>
            {buttonSession()}
        </Container>
    );

    
 }
 const Container = styled.div`
    max-width: 500px;
    margin: 10px 0;

    p{
        width: 100%;
        display: flex;
        justify-content: flex-start;
        align-items: center;
        height: 60px;
        font-size: 20px;
    }

    button{
        font-size: 18px;
        background-color: #E8833A;
        border-radius: 4px;
        color: #FFFFFF;
        padding: 15px 20px;
        margin-right: 10px;
        cursor: pointer;
    }
 `;