import styled from "styled-components";
import Slider from "../Home_carrusel/Slider";


const StyleHome = styled.section`
    width: 100%;
`


  

const Home = () =>{

    return (
        <StyleHome>          
                <Slider url={"/videos/"} />
        
        </StyleHome>
    )
};
export default Home;