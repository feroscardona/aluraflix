import styled from "styled-components";
import { colorGrayDark } from "../Ui/Variables";
import RegistroVideo from "../Registro/RegistroVideo";
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
                <RegistroVideo/>
            </StyleDefault>
        </CounterFormik>
    )
}
