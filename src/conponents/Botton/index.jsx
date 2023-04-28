import {styled as muiStyled }from "@mui/material/styles";
import  Button  from "@mui/material/Button";


export const MiButton = ({fontColor="", colorBorder="", background="", children, manejoClick })=>{
    const StyleButton= muiStyled(Button)`
    color: ${fontColor};
    border:1px solid ${colorBorder};
    background: ${background};
    
`
    return <StyleButton onClick={manejoClick}>{children }</StyleButton>  
};

