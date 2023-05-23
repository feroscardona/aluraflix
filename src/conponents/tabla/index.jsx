import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../../Context';
import styled from 'styled-components';
import {  colorGrayMedium } from '../Ui/Variables';
import { useState,useEffect } from 'react';
import { buscar, borrar} from '../../api';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color:#F5F5F5;
  
`;

const TableHeader = styled.th`
  background-color: "#1A1A1A";
  border:3px solid #2A7AE4;
  padding: 4px;
  text-align: left;
  font-weight: 300;
  font-size: 18px;
  
`;

const TableCell = styled.td`
  background-color: "#1A1A1A";
  padding: 5px;
  border: 2px solid #000;
  font-weight: 100;
  font-size: 12px;
  word-wrap: break-word;
  max-width: 100px;
  overflow: auto;
  
`;
const CellMod = styled(TableCell)`
  text-align: center;
  cursor: pointer;
  :hover{
    background-color: ${colorGrayMedium};
  }
  :active{
    background-color: silver;
  }
`

const MyTable = () => {
  const {recargar,setInf} = useContext(CounterContext)
    

    const [categorias, setCategorias] = useState([]);
    useEffect(()=>{
      buscar("/categorias", setCategorias)
    },[])

    return (
      <div style={{padding:"20px"}}>
      <Table>
        <thead>
          <tr>
            <TableHeader style={{width:"18%"}}>Nombre</TableHeader>
            <TableHeader>Descripcíon</TableHeader>
            <TableHeader style={{width:"5px"}}>Editar</TableHeader>
            <TableHeader style={{width:"5px"}}>Remover</TableHeader>
          </tr>
        </thead>
        <tbody style={{border:"3px solid #2A7AE4"}}>
           { categorias.map((categoria)=>{
              return <tr key={categoria.id}>
              <TableCell>{categoria.nombre}</TableCell>
              <TableCell>{categoria.descripcion}</TableCell>
              <CellMod onClick={()=>{
                buscar(`/categorias/${categoria.id}`,respuesta=>{
                  setInf(respuesta)
                  
                  })
                
              }}>Editar</CellMod>
              <CellMod onClick={()=>{
                borrar("/categorias/",categoria.id)
                recargar()
                }}>Remover</CellMod>
            </tr>
            })
           }

        </tbody>
      </Table>
      </div>
    );
  };
  export default MyTable;