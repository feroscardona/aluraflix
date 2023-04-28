import ReactPlayer from "react-player";
import styled from "styled-components";
import { Typography } from "@mui/material";
const ContentVideoCart = styled.section`
    width: 100%;
    display: flex;
    align-items: center;
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
    margin:8px ;
    @media screen and (max-width: 769px) {
        width: 80%;
    }
`
const BoxVideo = styled.div`
width: 60%;
border: solid 2px green;
@media screen and (max-width: 769px) {
        width: 100%;
    }
`
export const StyleFont = styled(Typography)`
    width: max-content;
`

const VideoCard = () =>{

   return <ContentVideoCart>
   <BoxFont>
        <StyleFont border="solid" variant="h4" component="h1"color="white">FrontEnt</StyleFont>
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