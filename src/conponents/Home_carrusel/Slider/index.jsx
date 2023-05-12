import Slider from "react-slick";
import { useContext, useEffect, useState } from "react";
import { CounterContext } from "../../../Context";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";



 const SimpleSlider =({url})=>{
    const {buscar} = useContext(CounterContext);
    const [posts, setPosts] = useState([]);
    useEffect(()=>{
        buscar(url,setPosts)
        
    },[url])
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
          <div key={id}
            
          >
            <img style={{ width:"80%",marginLeft:"10px"}} src={linkimagen} alt={linkimagen} />
          </div>
        ))}
        
        </Slider>
      </div>
    );
  
    
}
export default SimpleSlider