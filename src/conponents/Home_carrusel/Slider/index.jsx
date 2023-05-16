import Slider from "react-slick";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { buscar} from "../../../api";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";


const Styledimg=styled.img`
  border:solid 3px green;
  border-radius: 2px;
  cursor: pointer;
  width: 80% ;
  margin-left:10px;
`

 const SimpleSlider =({url})=>{
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        buscar(url,setPosts)
        
    },[url]);
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 4000,
      pauseOnHover: true
    };

      return (
        
        <div style={{padding:"20px"}} >
          
        <Slider {...settings}>
        

        {posts.map(({id,linkimagen}) => (
          <div key={id}>
            
            <Link to={`/videos/${id}`}>
              <Styledimg  src={linkimagen} alt={linkimagen} />
            </Link>
            
          </div>
        ))}
        
        </Slider>
      </div>
    );
  
    
}
export default SimpleSlider