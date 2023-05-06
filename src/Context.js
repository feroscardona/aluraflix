import { createContext } from "react";
import { useFormik } from "formik";
import validation from "./validaciones";

export const CounterContext = createContext();

export const CounterFormik = ({children})=>{
    const formik = useFormik({
        initialValues: {
          title: '',
          urlVideo: '',
          urlImg: "",
          textArea:"",
          select:"",
        },
        validationSchema: validation,
        onSubmit: (values) => {
          alert(JSON.stringify(values, null, 2));
          
        },
      });
    return <CounterContext.Provider value={formik}>
        {children}
    </CounterContext.Provider>
}