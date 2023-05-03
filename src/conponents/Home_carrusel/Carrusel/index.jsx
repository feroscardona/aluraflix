import styled from "styled-components";
import VideoCard from "../VideoCard"
import SimpleSlider from "../Slider";


const StyleCarrusel = styled.section`
    width: 100%;
`
const Carrusel = () =>{
    return (
        <StyleCarrusel>
            <VideoCard/>
            <SimpleSlider/>
        </StyleCarrusel>
    )
};
export default Carrusel;