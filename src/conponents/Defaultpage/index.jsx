import styled from "styled-components";
import { colorGrayDark } from "../Ui/Variables";
import RegistroVideo from "../Registro/RegistroVideo";
import RegistroCategoria from "../Registro/RegistroCategoria";
import { CounterFormik } from "../../Context";
import { Routes, Route } from "react-router-dom";
import Carrusel from "../Home_carrusel/Carrusel";
import Page404 from "../Page404";



const StyleDefault = styled.section`
    width: 100%;
    min-height: 400px;
    background-color:${colorGrayDark};

`

export const Defaultpage = ()=>{
    return (
        <CounterFormik>
            <StyleDefault>
             
                <Routes>
                    <Route path="/" element={<Carrusel/>}/>
                    <Route path="/registroVideo" element={<RegistroVideo/>}/>
                    <Route path="/registroCategoria" element={<RegistroCategoria/>}/>
                    <Route path="*" element={<Page404/>}/>
                    
                </Routes>
             
            </StyleDefault>
        </CounterFormik>
    )
}
