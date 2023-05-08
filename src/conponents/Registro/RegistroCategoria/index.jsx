import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../../../Context';
import  Button  from '@mui/material/Button';
import CampoTexto from '../../CampoTexto';
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { colorGrayLighter } from '../../Ui/Variables';


const RegistroCategoria = () => {
  const {formik2} = useContext(CounterContext)
  
  
  return (
    
      <Box component="form"
        
        sx={{padding:"20px"}}
       onSubmit={formik2.handleSubmit}>
        <Typography variant='h3' component="h2" align='center' color="white" marginBottom="37px">
          Nueva categoría
        </Typography>
        <CampoTexto
          sx={{paddingBottom:"20px"}}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          fullWidth
          name="name"
          label="Nombre"
          type='text'
          value={formik2.values.name}
          onChange={formik2.handleChange}
          error={formik2.touched.name && Boolean(formik2.errors.name)}
          helperText={formik2.touched.name && formik2.errors.name}
        />
                <CampoTexto
          sx={{ backgroundColor:`${colorGrayLighter}`, marginBottom:"20px", borderRadius:"4px",
          ":hover":{
            backgroundColor:`${colorGrayLighter}`
          },

          "div":{
            backgroundColor:`${colorGrayLighter}`
          },
          "p":{
            backgroundColor:"transparent"
          }
        }}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          multiline
          rows={4}
          label="Descripción"
          name='descripcion'
          value={formik2.values.descripcion}
          onChange={formik2.handleChange}
          error={formik2.touched.descripcion && Boolean(formik2.errors.descripcion)}
          helperText={formik2.touched.descripcion && formik2.errors.descripcion}
        />
        <CampoTexto
          sx={{paddingBottom:"20px"}}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          name='color'
          label="Color"
          type='color'
          value={formik2.values.color}
          onChange={formik2.handleChange}
          error={formik2.touched.color && Boolean(formik2.errors.color)}
          helperText={formik2.touched.color && formik2.errors.color}
          
        />

        <CampoTexto
          sx={{paddingBottom:"20px"}}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          name="codigo"
          label="Código de seguridad"
          type="text"
          value={formik2.values.codigo}
          onChange={formik2.handleChange}
          error={formik2.touched.codigo && Boolean(formik2.errors.codigo)}
          helperText={formik2.touched.codigo && formik2.errors.codigo}
          
        />
        

        <Box sx={{
          display:'flex', 
          justifyContent:'space-between',
          flexWrap:"wrap",
          paddingBottom:"130px"
          }}>
          <Box sx={{display:"flex",flexWrap:"wrap",gap:"5px", marginBottom:"30px"}}>
          <Button sx={{width:"150px",marginRight:"30px"}}color="primary" variant="contained"  type="submit">
            Guardar
          </Button>
          <Button 
            sx={{
              backgroundColor:"#9e9e9e9e", 
              color:"white",  
              width:"150px"
            }} 
            hidden
          >
            Limpiar
         </Button>
          </Box>
         
          
        </Box>
        
      </Box>
    
  );
};
export default RegistroCategoria;