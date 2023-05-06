import { useContext} from 'react';
import { CounterContext } from '../../Context';
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { TextField } from '@mui/material';
import { colorGrayLighter, grisOscuro } from '../Ui/Variables';



const profesiones= [
    'Fron-ent',
    'Back-ent',
    'mobile',
    'Ralph Hubbard',
    'Omar Alexander',
    'Carlos Abbott',
    'Miriam Wagner',
    'Bradley Wilkerson',
    'Virginia Andrews',
    'Kelly Snyder',
  ];

export default function BasicSelect() {
  
  const formik = useContext(CounterContext);


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
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
          onChange={formik.handleChange}
        >
          {profesiones.map((opcion,index) => (
            <MenuItem 
            key={index} value={opcion}>
              {opcion}
            </MenuItem>
          ))}
        </TextField>
      
    </Box>
  );
}