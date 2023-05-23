import { useContext} from 'react';
import { CounterContext } from '../../../Context';
import  Button  from '@mui/material/Button';
import CampoTexto from '../../CampoTexto';
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { colorGrayLighter } from '../../Ui/Variables';
import MyTable from '../../tabla';

const RegistroCategoria = () => {
  const {formik2,setInfFormik2} = useContext(CounterContext)

  return (
    <>
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
          name="nombre"
          label="Nombre"
          type='text'
          value={formik2.values.nombre}
          onChange={formik2.handleChange}
          error={formik2.touched.nombre && Boolean(formik2.errors.nombre)}
          helperText={formik2.touched.nombre && formik2.errors.nombre}
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
          name="codigoSeguridad"
          label="Código de seguridad"
          type="text"
          value={formik2.values.codigoSeguridad}
          onChange={formik2.handleChange}
          error={formik2.touched.codigoSeguridad && Boolean(formik2.errors.codigoSeguridad)}
          helperText={formik2.touched.codigoSeguridad && formik2.errors.codigoSeguridad}
          
        />

        <Box sx={{
          display:'flex', 
          justifyContent:'space-between',
          flexWrap:"wrap",
          paddingBottom:"20px"
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
            onClick={()=>setInfFormik2({
              nombre: "",
              descripcion:"",
              color:"#ffffff",
              codigoSeguridad:"",
            })}
          >
            Limpiar
         </Button>
          </Box>
         
          
        </Box>
        
      </Box>
      <MyTable/>
    </>
  );
};
export default RegistroCategoria;