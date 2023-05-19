import ReactPlayer from "react-player";
import styled from "styled-components";
import { Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { buscar } from "../../../api";
import {useParams, useNavigate} from "react-router-dom"

const ContentVideoCart = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.9) 80%), url("/img/baner2.png");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top:100px ;
    position: sticky;
 @media screen and (max-width: 769px) {
        flex-direction: column;
    }

`

const BoxFont = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 40%;
    margin:15px ;
    @media screen and (max-width: 769px) {
        width: 80%;
    }
`
const BoxVideo = styled.div`
width: 55%;
border: solid 2px;
border-color: ${props=>props.colorborde};

@media screen and (max-width: 769px) {
        width: 100%;
    }
`
const StyleFont = styled(Typography)`
width: fit-content;
position: relative;
text-decoration: line-through;
text-decoration-color: ${props=>props.decoracioncolor};
text-decoration-thickness:35px;

&::after{
    content: "${props=>props.titulo}";
    width: fit-content;
    position: absolute;
    top: 5px;
    left: 0;
    right: 0;
}

`



const VideoCard = () =>{
    const [video, setVideo]=useState([]);
    const {id}= useParams();
    const navigate = useNavigate()
    useEffect(()=>{
        buscar(`/videos/${id}`,setVideo).catch(()=>{
            navigate("/notfoutn")
        })
    },[id, navigate])

    const [categorias, setCategorias]= useState([]);
    useEffect(()=>{
      buscar("/categorias",setCategorias)
    },[])
    
    const filtro = categorias.find(dato=>dato.nombre === video.categoria)
    const colorCategory = filtro && filtro.color

   
   return <ContentVideoCart>
   <BoxFont>
       
        <StyleFont decoracioncolor={colorCategory} variant="h4" component="h1"color="white" titulo={video.titulo}>{video.titulo}</StyleFont>
        <Typography paragraph align="justify" component="p"color="white">{video.descripcion}</Typography>
   </BoxFont>
   <BoxVideo colorborde={colorCategory}>
        <ReactPlayer
        url={video.linkVideo}
        width="100%"
        playing
        controls
        
        />
    </BoxVideo>
   </ContentVideoCart>
   
};
export default VideoCard;