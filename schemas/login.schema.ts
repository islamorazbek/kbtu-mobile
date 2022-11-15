import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email("Incorrect email format").required("Email is required"),
  password: yup.string().min(8, "Min. required length is 8").required("Password is required")
})

export const registerSchema = loginSchema.shape({
  firstName: yup.string().required("First name is required"),
  lastName: yup.string().required("Last name is required"),
  phone: yup.string().min(11, "Incorrect phone format").required("Phone number is required")
})