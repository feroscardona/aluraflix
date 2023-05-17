import { useContext} from 'react';
import { CounterContext } from '../../Context';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import { colorGrayLighter, grisOscuro } from '../Ui/Variables';
import { useState } from 'react';
import { useEffect } from 'react';
import { buscar } from '../../api';





export default function BasicSelect() {
    const [profesiones, setProfeciones] = useState([]);
    useEffect(()=>{
      buscar("/categorias", setProfeciones)
    },[])
  const {formik}= useContext(CounterContext);


  return (
    <Box sx={{ minWidth: 120 , marginBottom:"37px" }} >
      
      <TextField
      sx={{
        width:"100%",
        borderRadius:"4px",
        ".MuiInputLabel-root":{
          color: `${grisOscuro}`,
          fontWeight: "300",
          fontSize: "18px",
        },
        ".MuiInputBase-root":{
          backgroundColor:`${colorGrayLighter}`
        },
        ".MuiInputBase-root:hover":{
          backgroundColor:`${colorGrayLighter}`
        }
      }}
          id="select"
          variant='filled'
          name='select'
          select
          label="Escoja una Categoría"
          value={formik.values.select}
          error={formik.touched.select && Boolean(formik.errors.select)}
          helperText={formik.touched.select && formik.errors.select}
          onChange={formik.handleChange}
        >
          {profesiones.map((opcion,index) => (
            <MenuItem 
            key={index} value={opcion.nombre}>
              {opcion.nombre}
            </MenuItem>
          ))}
        </TextField>
      
    </Box>
  );
}