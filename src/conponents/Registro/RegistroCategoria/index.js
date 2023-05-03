import React from 'react';
import { useFormik} from 'formik';
import validation from '../../../validaciones';
import  Button  from '@mui/material/Button';
import CampoTexto from '../../CampoTexto';




const RegistroCategoria = () => {
  const formik = useFormik({
    initialValues: {
      title: '',
      urlVideo: '',
      urlImg: "",
    },
    validationSchema: validation,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      
    },
  });
  
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <CampoTexto
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
        
        
        <Button color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
};
export default RegistroCategoria;