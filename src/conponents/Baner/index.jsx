
import styled from "styled-components";
import baner from "../../img/baner2.png"

const StyleBaner = styled.section`
    width: 100%;
    height: 85vh;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.1) 20%, rgba(0, 0, 0, 0.8) 70%), url(${baner});
    background-size: 100% 100%; 
    background-repeat: no-repeat;
    @media (max-width: 376px) {
        height: 260px;
        background-size: contain;
        background-repeat: repeat;
    }
    
   
`
export const Baner = ({Children})=>{
    return <StyleBaner>
        {Children}
        </StyleBaner>
};