import styled from "styled-components";
import { MiButton } from "../Botton";
import { colorGrayDark } from "../Ui/Variables";
import { Link } from "react-router-dom";

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




const Header = ()=>{
    return (
        <StyleHeader>
            <img src="/img/logo_AluraFlix.png" alt="logo"/>  
            
             {window.innerWidth > 375 && <Link to="/registroVideo"><MiButton fontColor={"white"} colorBorder={"White"} >Nuevo video</MiButton></Link>}
        </StyleHeader>

    )
};
export default Header;