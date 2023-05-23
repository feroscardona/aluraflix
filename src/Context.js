import { createContext, useEffect, useState} from "react";
import { useFormik } from "formik";
import  {validationFormVideo, validationFormCategoria} from "../src/validaciones"
import { postear, postearCategoria,update} from "./api";
import Swal from "sweetalert2";




export const CounterContext = createContext();

export const CounterGlobal = ({children})=>{
    const recargar =()=> window.location.reload()
    const [infFormik,setInfFormik]=useState({
      title: '',
      urlVideo: '',
      urlImg: "",
      textArea:"",
      select:"",
      codigo:""
    });
    const [infFormik2, setInfFormik2]=useState({
      nombre: "",
      descripcion:"",
      color:"#ffffff",
      codigoSeguridad:"",
    });
    useEffect(() => {
      formik2.setValues({
        nombre: infFormik2.nombre,
        descripcion: infFormik2.descripcion,
        color: infFormik2.color,
        codigoSeguridad: infFormik2.codigoSeguridad,
      });
      formik.setValues({
        title: '',
        urlVideo: '',
        urlImg: "",
        textArea:"",
        select:"",
        codigo:""
      })

    }, [infFormik2,infFormik]);

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
          }).then(recargar);
          
        },
      });
      const formik2 = useFormik({
        initialValues: {
          nombre:infFormik2.nombre,
          descripcion: infFormik2.descripcion,
          color:infFormik2.color,
          codigoSeguridad:infFormik2.codigoSeguridad,
        },
        validationSchema: validationFormCategoria,
        onSubmit: (values) => {
          values.id=infFormik2.id
          if(values.id)
           update(`/categorias/${values.id}`,values)
            else 
            postearCategoria(values)

          Swal.fire({
            title: 'Guardado con exito',
            width: 600,
            padding: '3em',
            color: "#3D45F5",
            background: '#fff url(/img/rodando.gif)',

          }).then(recargar);
          
        },
      });

      const values ={
        formik,
        formik2,
        recargar,
        setInfFormik,
        setInfFormik2,
   
      }
    return <CounterContext.Provider value={values}>
        {children}
    </CounterContext.Provider>
}