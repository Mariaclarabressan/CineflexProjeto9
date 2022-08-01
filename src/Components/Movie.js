import { Link } from "react-router-dom"
import styled from "styled-components"


export default function Movie(props) {

    const { id, title, posterURL } = props

    return (
        <Link to ={`/movies/${id}`}>
            <IMGMovie>
                <img src={posterURL} alt={title} />
            </IMGMovie>
        </Link>
    )
}

const IMGMovie = styled.div`
background-color: #FFFFFF;
border-radius: 4px;
margin: 10px 15px;
cursor: pointer;

img{
    height: 193px;
    width: 129px;
}
`