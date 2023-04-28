import styled from "styled-components";
import { colorGrayDark } from "../Ui/Variables";
import baner from "../../img/baner2.png"





const StyleDefault = styled.section`
    width: 100%;
    min-height: 600px;
    padding: 0px 0 40px 40px;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.9) 80%), url(${baner});;
    background-repeat: no-repeat;
    background-size: contain;
    background-color:${colorGrayDark};
    @media screen and (max-width: 376px ){
        padding: 0 0 20px 20px
    }
`

export const Defaultpage = ()=>{
    return (
        <StyleDefault>
         
         
       
        </StyleDefault>
    )
}
