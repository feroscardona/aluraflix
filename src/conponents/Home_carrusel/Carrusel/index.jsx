import styled from "styled-components";
import { Route, Routes, } from "react-router-dom";
import SimpleSlider from "../Slider";
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
            <SimpleSlider url={"/videos/"} />
        </StyleCarrusel>
    )
};
export default Carrusel;