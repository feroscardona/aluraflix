import { createContext } from "react";
import { useFormik } from "formik";
import  {validationFormVideo, validationFormCategoria} from "../src/validaciones"


export const CounterContext = createContext();

export const CounterFormik = ({children})=>{
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
        formik2
      }
    return <CounterContext.Provider value={values}>
        {children}
    </CounterContext.Provider>
}