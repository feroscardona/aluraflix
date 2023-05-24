import axios from "axios"


const api = axios.create({
    baseURL:"https://aluraflix.free.beeceptor.com"
  })

export const buscar =async (url,setData) => {
    const respuesta = await api.get(url)
    setData(respuesta.data)
    
  }

export const postear = ({title,urlVideo,urlImg,textArea,select,codigo})=>{
  api.post("/videos",{
    titulo:title,
    linkVideo:urlVideo,
    categoria:select,
    linkimagen:urlImg,
    descripcion:textArea,
    codigoSeguridad:codigo,
  })
}

export const postearCategoria =({nombre,descripcion,color,codigoSeguridad})=>{
  api.post("/categorias",{
    nombre,
    descripcion,
    color,
    codigoSeguridad
  })
}

export const borrar = (url,id)=>{
  api.delete(`${url}${id}`)
};

export const update = (url,datos)=>{
  
  const {nombre,descripcion,color,codigoSeguridad}=datos
  api.put(`${url}`,{
    nombre,
    descripcion,
    color,
    codigoSeguridad,
    
  }).catch((error)=>alert(error))
}
