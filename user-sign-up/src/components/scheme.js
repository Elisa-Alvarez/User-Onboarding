import * as Yup from "yup";

const formSchema = Yup.object().shape({
  

  first_name: Yup
  .string()
  .min(3, "First name must be at least 3 characters long.")
  .required("Password is Required"),

email: Yup
  .string()
  .email("Must be a valid email address.")
  .required("Must include email address."),
password: Yup
  .string()
  .min(2, 'Password must be at least 6 characters long')
  .required("Must include a valid ."),
Terms: Yup
.boolean()
.oneOf([true],"Please accept Terms"),

})

export default formSchema
