import * as yup from 'yup'

const schemaSignUp = yup.object({
  first_name: yup
    .string()
    .required('First Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters are accepted'),
  last_name: yup
    .string()
    .required('Last Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters are accepted'),
  gender: yup
    .string()
    .required('Gender is required'),
  email: yup
    .string()
    .email('Invalid E-mail')
    .required('E-Mail is required'),
  password: yup
    .string()
    .required('Password is required')
    .min(8, 'Password is too short - should be 8 characters minimum.')
    .matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%.^&*])/, 'The password must have at least 8 characters, one number, one uppercase letter, one lowercase letter and one special character'),
}).required()

const schemaLogin = yup.object({
  email: yup
    .string()
    .email('Invalid E-mail')
    .required('E-Mail is required'),
  password: yup
    .string()
    .required('Password is required')
}).required()

const schemaAddProduct = yup.object({
  product_name: yup
    .string()
    .required('Product Name is required')
    .matches(/^[A-Za-z\s]+$/, 'Only letters are accepted'),
  description: yup
    .string()
    .required('Description is required'),
  price: yup
    .number()
    .required('Price is required')
    .positive('Price must be a positive number')
    .integer('Price must not have decimals'),
  category: yup
    .string()
    .required('Category is required'),
  brand: yup
    .string()
    .required('Brand is required'),
  image: yup
    .string()
    .required('Image url is required')
    .url('Enter a valid URL')
}).required()

export { schemaSignUp, schemaLogin, schemaAddProduct }
