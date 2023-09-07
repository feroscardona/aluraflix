import styled from "styled-components";


const StyleButton = styled.button`
color: ${props=>props.fontcolor};
padding: 9px;
border-radius: 2px;
border:${props=>props.styleborder};
background: ${props=>props.background};
width:${props=>props.tamaño};
cursor: pointer;
`


export const MiButton = ({tamaño="red",fontColor="", styleborder="none", background="transparent", children, manejoClick })=>{

    return (
        <StyleButton 
            onClick={manejoClick}
            fontcolor={fontColor}
            styleborder={styleborder}
            background={background}
            tamaño={tamaño}
            
        >
            {children }
        </StyleButton> 
        ) 
};

