import styled from "styled-components";
import { Route, Routes, } from "react-router-dom";
import Slider from "../Slider";
import VideoCard from "../VideoCard";

const StyleCarrusel = styled.section`
    width: 100%;
`
  

const Carrusel = () =>{

    return (
        <StyleCarrusel>
            <Routes>
            <Route path="/:id" element={<VideoCard/>}/>
            </Routes>
                <Slider url={"/videos/"}/>
         
        </StyleCarrusel>
    )
};
export default Carrusel;