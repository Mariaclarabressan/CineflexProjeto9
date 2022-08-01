import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./Home";
import MoviesScreen from "./MoviesScreen";
import SeatsScreen from "./SeatsScreen";
import SuccessScreen from "./SuccessScreen";
import Header from "./Header";


export default function App(){

    

    return(
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path='/' element = {<Home/>}/> 
                <Route path='/movies/:movieID' element = {<MoviesScreen/>}/>  
                <Route path='/seats/:movieTimeID' element = {<SeatsScreen/>} />  
                <Route path='/success' element = {<SuccessScreen />}/>                 
            </Routes>
        </BrowserRouter>
    )
}