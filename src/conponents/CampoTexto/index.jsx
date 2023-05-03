import styled from "styled-components";
import { TextField } from "@mui/material";
import { colorGrayLighter, grisMedio } from "../Ui/Variables";


const CampoTexto = styled(TextField)`
    input{
        background-color: ${colorGrayLighter};
        border-radius: 4px;
        margin-bottom:37px;
    }
    
    label{
        color: ${grisMedio};
        font-weight: 300;
        font-size: 18px;
    }

`

export default CampoTexto;