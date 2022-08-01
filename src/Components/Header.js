import styled from "styled-components"

export default function Header(){
    return(
        <Top>
            <h1>CineFlex</h1>
        </Top>
    )
}

const Top = styled.div `
background-color: #C3CFD9;
position: fixed;
top:0;
left: 0;
width: 100%;
height: 75px;
display: flex;
justify-content: center;
align-items: center;
h1{
    font-size: 34px;
    color: #E8833A;
    text-transform: uppercase;
}

`