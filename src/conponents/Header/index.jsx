import styled from "styled-components";
import { MiButton } from "../Botton";
import { colorGrayDark } from "../Ui/Variables";
import { Link, useLocation} from "react-router-dom";
import { useEffect, useState } from "react";




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
    const location = useLocation()
    
    const presentar = window.innerWidth > 375 && location.pathname === "/"

    const [renderButton, setRender]= useState(null)
    useEffect(()=>{
        if(presentar){
            setRender(<Link to="/registroVideo"><MiButton fontColor={"white"} colorBorder={"White"} >Nuevo video</MiButton></Link>)
        }else
            setRender(false)
    },[location,presentar])
        
    
        

    

    return (
        <StyleHeader>
            <img src="/img/logo_AluraFlix.png" alt="logo"/>  
            
             {renderButton}
        </StyleHeader>

    )
};
export default Header;

