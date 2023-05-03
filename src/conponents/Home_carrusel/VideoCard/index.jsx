import ReactPlayer from "react-player";
import styled from "styled-components";
import { Typography } from "@mui/material";
import baner from "../../../img/baner2.png"

const ContentVideoCart = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
    background: linear-gradient(360deg, rgba(0, 0, 0, 0.1) 40%, rgba(0, 0, 0, 0.9) 80%), url(${baner});;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-top:100px ;
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
border: solid 2px aqua;

button{
    display: none;
}
@media screen and (max-width: 769px) {
        width: 100%;
    }
`
export const StyleFont = styled(Typography)`
    width: max-content;
    background-color: aqua;
`

const VideoCard = () =>{

   return <ContentVideoCart>
   <BoxFont>
        <StyleFont  variant="h4" component="h1"color="white">FrontEnt</StyleFont>
        <Typography paragraph align="justify" component="p"color="white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, tempore earum! Vero, dolor placeat sunt ipsam sint quaerat facere minima quas sit eum similique est aut magni? Velit, eaque rerum!</Typography>
   </BoxFont>
   <BoxVideo>
        <ReactPlayer
        url='https://youtu.be/ov7vA5HFe6w'
        width="100%"
        playing
        controls
        
        />
    </BoxVideo>
   </ContentVideoCart>
   
};
export default VideoCard;