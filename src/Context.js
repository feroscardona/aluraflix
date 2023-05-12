import { createContext } from "react";
import { useFormik } from "formik";
import  {validationFormVideo, validationFormCategoria} from "../src/validaciones"
import axios from "axios";

const api = axios.create({
  baseURL:"http://localhost:5000"
})
const buscar =async (url,setData) => {
  const respuesta = await api.get(url)
  setData(respuesta.data)
  
}

export const CounterContext = createContext();

export const CounterGlobal = ({children})=>{
    const formik = useFormik({
        initialValues: {
          title: '',
          urlVideo: '',
          urlImg: "",
          textArea:"",
          select:"",
          codigo:""
        },
        validationSchema: validationFormVideo,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          
        },
      });
      const formik2 = useFormik({
        initialValues: {
          name: '',
          descripcion: '',
          color:"#ffffff",
          codigo:""
        },
        validationSchema: validationFormCategoria,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          
        },
      });

      const values ={
        formik,
        formik2,
        buscar
      }
    return <CounterContext.Provider value={values}>
        {children}
    </CounterContext.Provider>
}