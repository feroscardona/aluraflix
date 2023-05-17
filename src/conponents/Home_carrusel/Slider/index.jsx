import SimpleSlider from "../../slid";
import { useEffect, useState } from "react";
import { buscar} from "../../../api";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";





 const Slider =({url})=>{
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        buscar(url,setVideos)
    },[url]);  

    

    const [categorias, setCategorias]= useState([]);
    useEffect(()=>{
      buscar("/categorias",setCategorias)
    },[url])

    videos.filter(video=>video.categoria === "Front-end")

      return <>
        
          {categorias.map((category, index)=>{
           const video= videos.filter((video)=>video.categoria === category.nombre)
            
        return video.length>0 &&<div style={{padding:"20px"}} key={index}>
                  <div >
                    <h2>{category.nombre}</h2>
                    <SimpleSlider 
                      datos={video}
                      color={category.color}
                    />
                  </div>
                    
                </div>
            })}
      
    </>;
  
    
}
export default Slider