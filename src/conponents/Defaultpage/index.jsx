import styled from "styled-components";
import { colorGrayDark } from "../Ui/Variables";
import RegistoCategoria from "../Registro/RegistroCategoria";
import { CounterFormik } from "../../Context";




const StyleDefault = styled.section`
    width: 100%;
    min-height: 600px;
    background-color:${colorGrayDark};

`

export const Defaultpage = ()=>{
    return (
        <CounterFormik>
            <StyleDefault>
                <RegistoCategoria/>
            </StyleDefault>
        </CounterFormik>
    )
}