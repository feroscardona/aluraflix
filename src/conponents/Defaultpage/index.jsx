import styled from "styled-components";
import { colorGrayDark } from "../Ui/Variables";
import RegistoCategoria from "../Registro/RegistroCategoria";




const StyleDefault = styled.section`
    width: 100%;
    min-height: 600px;
    background-color:${colorGrayDark};

`

export const Defaultpage = ()=>{
    return (
        <StyleDefault>
          <RegistoCategoria/>
        </StyleDefault>
    )
}
