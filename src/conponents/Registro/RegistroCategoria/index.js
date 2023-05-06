import React from 'react';
import { useContext } from 'react';
import { CounterContext } from '../../../Context';
import  Button  from '@mui/material/Button';
import CampoTexto from '../../CampoTexto';
import BasicSelect from '../../Select';
import { Box} from '@mui/material';
import Typography from '@mui/material/Typography';
import { colorGrayLighter } from '../../Ui/Variables';


const RegistroCategoria = () => {
  const formik = useContext(CounterContext)
  
  return (
    
      <Box component="form"
        
        sx={{padding:"20px"}}
       onSubmit={formik.handleSubmit}>
        <Typography variant='h3' component="h2" align='center' color="white" marginBottom="37px">
          Nuevo video
        </Typography>
        <CampoTexto
          sx={{paddingBottom:"20px"}}
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          fullWidth
          name="title"
          label="Titulo"
          type='text'
          value={formik.values.title}
          onChange={formik.handleChange}
          error={formik.touched.title && Boolean(formik.errors.title)}
          helperText={formik.touched.title && formik.errors.title}
        />
        <CampoTexto
          sx={{paddingBottom:"20px"}}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          name='urlVideo'
          label="Link del video"
          type='text'
          value={formik.values.urlVideo}
          onChange={formik.handleChange}
          error={formik.touched.urlVideo && Boolean(formik.errors.urlVideo)}
          helperText={formik.touched.urlVideo && formik.errors.urlVideo}
          
        />

        <CampoTexto
          sx={{paddingBottom:"20px"}}
          variant="filled"
          InputLabelProps={{
            shrink: true,
          }}
          fullWidth
          name="urlImg"
          label="Link imagen del video"
          type="text"
          value={formik.values.urlImg}
          onChange={formik.handleChange}
          error={formik.touched.urlImg && Boolean(formik.errors.urlImg)}
          helperText={formik.touched.urlImg && formik.errors.urlImg}
          
        />
        <BasicSelect/>
        <CampoTexto
          sx={{ backgroundColor:`${colorGrayLighter}`, marginBottom:"37px", borderRadius:"4px",
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
          name='textArea'
          value={formik.values.textArea}
          onChange={formik.handleChange}
          error={formik.touched.textArea && Boolean(formik.errors.textArea)}
          helperText={formik.touched.textArea && formik.errors.textArea}
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
          {window.innerWidth > 375 ?
          <Box >
          <Button sx={{width:"100%"}} color="primary" variant="contained">
            Nueva Categoría
          </Button>
          </Box>:
                    <Box sx={{width:"100%"}}>
                    <Button sx={{width:"100%"}} color="primary" variant="contained">
                      Nueva Categoría
                    </Button>
                    </Box>
          }
          
        </Box>
        
      </Box>
    
  );
};
export default RegistroCategoria;