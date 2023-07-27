// import React from 'react'
// import {Formik} from "formik";
// import {Form} from "formik";
// import yup from "yup";
// import TextField from './TextField';





 
//   return (
//    <Formik
//    initialValues={
//     {
//       firstName:'',
//       lastName:'',
//       email:'',
//       password:'',
//       confirmPassword:''
//     }
//    }
// >
//       {formik => (<div>
//         <h1>Signup</h1>
//         { console.log(formik)}
//         <Form>
//           <TextField label="First Name" name="firstName" type="text"/>
//         </Form>
//     </div>
    
//   )
// }
//    </Formik>  


// )}
import React from 'react'
import {useFormik} from 'formik'

function Formikform() {
  const validate = values =>{
    const errors ={}
   if(!values.email){
    errors.email = 'Required'}
    else if(values.email.length <4){
      errors.email =" Must be 5 character or more"
    }

    if(!values.password){
      errors.password = 'Required'}
      else if(values.password.length < 8){
        errors.password =" Must be 8 character or more"
      }
     else if (values.password === '123445678'){
   errors.password = 'must not be 12345678 !!!'
     }
      if(!values.repassword){
        errors.repassword = 'Required'}
        else if(values.repassword.length !== values.password){
          errors.repassword=" second password doesnt match"  
        }   
        return errors
   }
  
  const formik = useFormik({
    initialValues:{
      email:'',
      password:'',
      repassword:''
    },
    validate,
    onSubmit: (values , action)=>{
      // (JSON.stringify(values,null,2))
      console.log(values)
      action.resetForm();
    }
  })
return (
  <div>
    <h1>Register</h1>
    <form onSubmit={formik.handleSubmit}>
      <lable htmlFor ="email">Email Address</lable>
      <input  onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur} id='email' name='email'/><br/>
     { formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div>:null}<br/>

      <lable htmlFor ="password">password</lable>
      <input type="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} id='password' name='password'/><br/>
      { formik.touched.password && formik.errors.password ? <div>{formik.errors.password}</div>:null}<br/>

      <lable htmlFor ="repassword">password again</lable>
      <input type="password" onChange={formik.handleChange} value={formik.values.repassword} onBlur={formik.handleBlur}  id='repassword' name='repassword'/><br/>
      { formik.touched.repassword && formik.errors.repassword ? <div>{formik.errors.repassword}</div>:null}<br/>

        <button type="submit">Register</button>
    </form>
  </div>
)

}
export default Formikform;


