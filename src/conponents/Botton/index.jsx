import {styled as muiStyled }from "@mui/material/styles";
import  Button  from "@mui/material/Button";

export const MiButton = ({fontColor="", colorBorder="", background="", children, })=>{
    const StyleButton= muiStyled(Button)`
    color: ${fontColor};
    border:1px solid ${colorBorder};
    background: ${background};
    
`
    return <StyleButton>{children }</StyleButton>  
};

