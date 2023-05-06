import styled from "styled-components";
import { TextField } from "@mui/material";
import { colorGrayLighter, grisOscuro } from "../Ui/Variables";


const CampoTexto = styled(TextField)`
    input{
        background-color: ${colorGrayLighter};
        border-radius: 4px;
        
    }
    
    label{
        color: ${grisOscuro};
        font-weight: 300;
        font-size: 18px;
    }


`

export default CampoTexto;