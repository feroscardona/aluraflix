import styled from "styled-components";
import { MiButton } from "../Botton";
import { colorGrayDark } from "../Ui/Variables";
import { Link, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
    img:hover{ 
        cursor: pointer;
        transform: translate3d(10px, 30%, 1em) 
    }
    
`

const Header = ()=>{
    const navigate = useNavigate()
    const location = useLocation()
    
    const presentar = window.innerWidth > 375 && location.pathname === "/"

    const [renderButton, setRender]= useState(null)
    useEffect(()=>{
        if(presentar){
            setRender(<Link to="/registroVideo"><MiButton fontColor={"white"} styleborder="1px solid white">Nuevo video</MiButton></Link>)
        }else
            setRender(false)
    },[location,presentar])
        
return (
        <StyleHeader>
            <img onClick={()=>navigate("/")} src="/img/logo_AluraFlix.png" alt="logo"/>  
            {renderButton}
        </StyleHeader>
 )
};
export default Header;

