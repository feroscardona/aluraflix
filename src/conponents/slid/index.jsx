import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { Link } from "react-router-dom";

const Styledimg=styled.img`
  border:solid 3px ;
  border-color:${props=>props.colorBorde};
  border-radius: 2px;
  cursor: pointer;
  width: 80% ;
  margin-left:10px;
`
const SimpleSlider =({datos, color})=>{ 
    
    
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
        
        <div style={{padding:"20px"}}>
            
            <Slider {...settings}>
        

                {datos.map(({id,linkimagen})=>

                    <div key={id}>
                        
                        <Link to={`/videos/${id}`}>
                          <Styledimg colorBorde={color}
                           src={linkimagen } 
                           alt={linkimagen} />
                        </Link>
                        
                    </div>
                    
                )}
               
                    
            </Slider>
                    
        </div>
    );
  
    
}
export default SimpleSlider