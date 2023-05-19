import styled from "styled-components";
import { MiButton } from "../Botton";
import { colorGrayDark } from "../Ui/Variables";
import { Link, useLocation } from "react-router-dom";
import { useState,useEffect } from "react";

const Stylepie = styled.section`
    width: 100%;
    padding: 20px 40px;
    background-color: ${colorGrayDark};
    display: flex;
    align-items: center;
    flex-direction: column;
    @media screen and (max-width: 376px) {
        padding: 0;
    }

`
const StyleImg = styled.img`
    padding-bottom: 40px;

`
export const Footer = ()=>{
    const location = useLocation()
    
    const presentar = window.innerWidth < 376 && location.pathname === "/";

    const [renderButton, setRender]= useState(null)

    useEffect(()=>{
        if(presentar){
            setRender(<Link style={{width:"100%"}} to="/registroVideo">
                <MiButton 
                    tamaño={"100%"}
                    fontColor="white"
                    background={"#2A7AE4"}
                >Nuevo video</MiButton></Link>)
        }else
            setRender(false)
    },[location,presentar])

    return <Stylepie>
        {window.innerWidth > 374 && <StyleImg src="/img/logo_AluraFlix.png" alt="logo"/>}
        {renderButton}
       
    </Stylepie>
}