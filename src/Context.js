import { createContext } from "react";
import { useFormik } from "formik";
import  {validationFormVideo, validationFormCategoria} from "../src/validaciones"
import { postear, postearCategoria} from "./api";
import Swal from "sweetalert2";



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
          postear(values)
          Swal.fire({
            title: 'Guardado con exito',
            width: 600,
            padding: '3em',
            color: "#3D45F5",
            background: '#fff url(/img/rodando.gif)',

          });
          
        },
      });
      const formik2 = useFormik({
        initialValues: {
          nombre: '',
          descripcion: '',
          color:"#ffffff",
          codigoSeguridad:""
        },
        validationSchema: validationFormCategoria,
        onSubmit: (values) => {
          postearCategoria(values)
          Swal.fire({
            title: 'Guardado con exito',
            width: 600,
            padding: '3em',
            color: "#3D45F5",
            background: '#fff url(/img/rodando.gif)',

          });
          
        },
      });

      const values ={
        formik,
        formik2,
      }
    return <CounterContext.Provider value={values}>
        {children}
    </CounterContext.Provider>
}