import React from 'react';
import styled from 'styled-components';
import { colorGrayDark, colorGrayMedium } from '../Ui/Variables';
import { useNavigate } from 'react-router-dom';

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  color:#F5F5F5;
  
`;

const TableHeader = styled.th`
 background-color: ${colorGrayDark};
  border:3px solid #2A7AE4;
  padding: 4px;
  text-align: left;
  font-weight: 300;
  font-size: 18px;
`;

const TableCell = styled.td`
  padding: 5px;
  border: 3px solid #000;
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

export const MyTable = () => {
    const navigate = useNavigate()
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
        <tbody>
          <tr>
            <TableCell>Dato 1</TableCell>
            <TableCell>Dato 2</TableCell>
            <CellMod onClick={()=>navigate("/registrovideo")}>Editar</CellMod>
            <CellMod onClick={()=>console.log("click")}>Remover</CellMod>
          </tr>

        </tbody>
      </Table>
      </div>
    );
  };
  