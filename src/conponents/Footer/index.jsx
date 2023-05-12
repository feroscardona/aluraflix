import styled from "styled-components";
import { colorGrayDark } from "../Ui/Variables";
const Stylepie = styled.section`
    width: 100%;
    padding: 20px 40px;
    background-color: ${colorGrayDark};
    display: flex;
    justify-content: center;

`
const StyleImg = styled.img`
    padding-bottom: 40px;
`
export const Footer = ()=>{
    return <Stylepie>
        <StyleImg src="/img/logo_AluraFlix.png" alt="logo"/>
    </Stylepie>
}