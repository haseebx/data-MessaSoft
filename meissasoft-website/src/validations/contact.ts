import * as yup from 'yup';

export const contactValidation = yup.object().shape({
  name: yup.string().required('Name is Required'),
  email: yup.string().email('Please Enter Valid Email').required('Name is Required'),
  subject: yup.string().required('Subject is Required'),
  message: yup.string().required('Message is Required'),
});
