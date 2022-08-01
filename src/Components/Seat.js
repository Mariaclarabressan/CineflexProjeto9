import styled from "styled-components"; 

export default function Seat(props){
    const {id, number, available, clicked, unclicked } = props;

    function choiceSeat(){
        
        if(!available){
            alert("This seat is not available, please choise another seat. ")
        } 
        
        else {
            unclicked(id, number);
        }
    }
    console.log(available, clicked);
    return (
        
        <Container available = {available} clicked = {clicked} onClick = {choiceSeat}>                     
            {number}
        </Container>
    );
}

// function seatColor (clicked, available){
//     if(clicked) {
//         console.log("toaqui", clicked)
//         return 
//     }
//     else if(available){
//         return ;
//     } 
//     else  {
//         return ;
//     }
// }

const Container = styled.button`
    width: 26px;
    height: 26px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    cursor: pointer;
    margin: 20px 7px;
    color: #C3CFD9;
    border: 1px solid #808F9D;
    background-color: ${({clicked,available}) => clicked  && available  ? '#8DD7CF' : available ? '#C3CFD9': '#FBE192' };
    color: black;

`;