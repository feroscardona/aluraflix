import styled from "styled-components";
import SimpleSlider from "../Home_carrusel/Slider";


const StyleHome = styled.section`
    width: 100%;
`

  

const Home = () =>{

    return (
        <StyleHome>          
            <SimpleSlider url={"/videos/"} />
        </StyleHome>
    )
};
export default Home;