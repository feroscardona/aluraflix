import styled from "styled-components";
import img404 from "../../img/img404.png"
import { Typography } from "@mui/material";
import cariFlix from "../../img/cariFlix.png"
const Style404 = styled.section`
    width: 100%;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Page404 = () =>{
    return(
        <Style404>
            <img src={img404} alt="404" width={"300px"} />
            <div style={{display:"flex",flexDirection:"column", alignItems:"center"}}>
              <Typography variant="h3" component={"samp"} color={"white"}>Esta página  existe</Typography>
              <img src={cariFlix} alt="mascota" width="300px"/>
            </div>
        </Style404>
    );
};
export default Page404;