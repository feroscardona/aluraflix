import styled from "styled-components";
import { MiButton } from "../Botton";
import logo from "../../img/logo_AluraFlix.png"

import { colorGrayDark } from "../Ui/Variables";

const StyleHeader = styled.section`
    width: 100%;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colorGrayDark} ;
    @media screen and (max-width: 376px ){
        padding: 10px 20px;
        justify-content: center;
    }
    
`
const StyleImg = styled.img`
    
`



const Header = ()=>{
    return (
        <StyleHeader>
            <StyleImg src={logo} alt="logo"/>  
             {window.innerWidth > 375 && <MiButton fontColor={"white"} colorBorder={"White"} >Nuevo video</MiButton>}
        </StyleHeader>

    )
};
export default Header;