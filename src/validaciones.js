import * as yup from 'yup';

const validation = yup.object().shape({
    title: yup
      .string()
      .required('Campo requerido'),
      urlVideo: yup
      .string()
      .required("Campo requerido"),
      urlImg: yup
      .string()
      .required("Campo requerido")
  });

  export default validation;