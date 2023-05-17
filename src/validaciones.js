import * as yup from 'yup';

export const validationFormVideo = yup.object().shape({
    title: yup
      .string()
      .required('Campo requerido'),
      urlVideo: yup
      .string()
      .required("Campo requerido"),
      urlImg: yup
      .string()
      .required("Campo requerido"),
      textArea: yup
      .string()
      .required("campo requerido"),
      select: yup
      .string()
      .required("campo requerido"),
      codigo: yup
      .string()
      .required("campo requerido")
  });
  export const validationFormCategoria = yup.object().shape({
    nombre: yup
      .string()
      .required('Campo requerido'),
      descripcion: yup
      .string()
      .required("Campo requerido"),
    color: yup
      .string()
      .test('no-blank', 'El color no puede ser blanco', value => value !== '#ffffff'),
      codigoSeguridad: yup
      .string()
      .required("campo requerido"),
      
  })

