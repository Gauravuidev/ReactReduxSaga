import React, { useState } from 'react';
 import { Formik, Field, Form, ErrorMessage, FormikConfig, FormikValues } from 'formik';
 import * as Yup from 'yup';
 import '../App.css'; 
 
 const SignupForm = () => {
   return (
     <FormikStepper
       initialValues={{ firstName: '', lastName: '', email: '' }}
    //    onSubmit={() => {
    //     //  setTimeout(() => {
    //     //    alert(JSON.stringify(values, null, 2));
    //     //    setSubmitting(false);
    //     //  }, 400);
    //    }}
     >
        <div validationschema={Yup.object({
         firstName: Yup.string()
           .max(15, 'Must be 15 characters or less')
           .required('firstName Required'),
         lastName: Yup.string()
           .max(20, 'Must be 20 characters or less')
           .required('lastName Required'),
         email: Yup.string()
           .email('Invalid email address')
           .required('email Required')  
        })}>
         <label htmlFor="firstName">First Name</label>
         <Field name="firstName" type="text" />
         <span className="error"><ErrorMessage name="firstName" /></span>
        
         <label htmlFor="lastName">Last Name</label>
         <Field name="lastName" type="text" />
         <span className="error"><ErrorMessage name="lastName" /></span>
         
         <label htmlFor="email">Email Address</label>
         <Field name="email" type="email" />
         <span className="error"><ErrorMessage name="email" /></span>
         </div>
         
         <div validationschema={Yup.object({
         money: Yup.number().when('millions', {
             is: true,
             then: Yup.number().required().min(1_000_000, 'ache se daal tu miillionier h'),
             otherwise: Yup.number().required()
         })
        })}>
         <label htmlFor="millions">Are you Millionier</label>
         <Field name="millions"  id="millions" type="checkbox"/>
         <span className="error"><ErrorMessage name="millions" /></span>
       
         <label htmlFor="money">Enter Money</label>
         <Field name="money" type="number" />
         <span className="error"><ErrorMessage name="money" /></span>
         </div>
         <div validationschema={Yup.object({
         desc: Yup.string().required('desc required')  
        })}>
         <label htmlFor="desc">Address</label>
         <Field name="desc" type="text" />
         <span className="error"><ErrorMessage name="desc" /></span>
         </div>
       
     </FormikStepper>
   );
 };

 export default SignupForm;

//  export function FormikSteps({children, ...props}) {
//      return <>{children}</>
//  }

 export function FormikStepper({children, ...props}) {
     const childrenArr = React.Children.toArray(children);
     const [steps, setSteps] = useState(0);
     const currentChild = childrenArr[steps];
     function checkLastStep() {
         return steps === childrenArr.length -1;
     }
     console.log(currentChild);
    return (
        <Formik {...props} 
        validationSchema = {currentChild.props.validationschema}
        onSubmit={async (values, helper) =>{ 
            console.log(steps, '---------------------------------------------> on submit')
            if(checkLastStep()) {
                await props.onSubmit(values, helper)
            } else {
                setSteps((steps) => steps+1)
            }
        }}>
            <Form autoComplete="off">
                {currentChild}
                {steps > 0 ? <button type="button" onClick={() => setSteps((s) => s-1)}>Back</button> : null}
                <button type="submit">{checkLastStep() ? 'Submit' : 'next'}</button>
            </Form>
        </Formik>
    )
 } 