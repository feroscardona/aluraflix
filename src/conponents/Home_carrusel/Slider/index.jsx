import SimpleSlider from "../../slid";
import { useEffect, useState } from "react";
import { buscar} from "../../../api";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const ubicacion =()=>{
  const addres = window.location.pathname ==="/"
  if(addres)
   return"600px"
   else
   return"300px"
}


const CotainerSlider = styled.div`
  position: sticky;
  top: 0;
  height: ${ubicacion};
  overflow: scroll;
  &::-webkit-scrollbar {
  width: 0.12em;
}
`
const Texth2 = styled.h2`
  font-size: 1.5rem;
  border-radius:2px;
  padding: 4px;
  margin-right:5px;
  display: inline-block;
  background-color: ${props=>props.backgroun};
  color: white;
  @media screen and (max-width: 376px) {
    display: block;
  }
`


 const Slider =({url})=>{
    const [videos, setVideos] = useState([]);
    useEffect(()=>{
        buscar(url,setVideos)
    },[url]);  

    const [categorias, setCategorias]= useState([]);
    useEffect(()=>{
      buscar("/categorias",setCategorias)
    },[url])

      return <CotainerSlider>
        
          {categorias.map((category, index)=>{
           const video= videos.filter((video)=>video.categoria === category.nombre)
            
        return video.length>0 &&<div key={index}>
                  <div>
                    <Texth2 backgroun={category.color}>{category.nombre}</Texth2>
                    <span style={{color:"white"}}>{category.descripcion}</span>
                    <SimpleSlider 
                      datos={video}
                      color={category.color}
                    />
                  </div>
                    
                </div>
            })}
      
    </CotainerSlider>;
  
    
}
export default Slider