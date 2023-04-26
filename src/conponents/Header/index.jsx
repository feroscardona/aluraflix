import styled from "styled-components";

import logo from "../../img/logo_AluraFlix.png"

import { colorGrayDark } from "../Ui/Variables";

const StyleHeader = styled.section`
    width: 100%;
    padding: 20px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${colorGrayDark} ;
    
`
const StyleImg = styled.img`
    
`



const Header = ({children })=>{
    return (
        <StyleHeader>
            <StyleImg src={logo} alt="logo"/>  
             {children }
        </StyleHeader>

    )
};
export default Header;