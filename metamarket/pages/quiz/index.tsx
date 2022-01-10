import { NextPage } from "next";
import React from 'react';
import { Formik, Form, Field } from 'formik';
import styles from './index.module.css';
import * as Yup from 'yup';

const Quiz: NextPage = () => {
  // Pass the useFormik() hook initial form values and a submit function that will
  // be called when the form is submitted
  const validate = Yup.object().shape({ //form validation here
    name: Yup.string()
      .min(2, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    address: Yup.string()
      .min(42, 'Too Short!')
      .max(42, 'Too Long!')
      .required('Required'),
    email: Yup.string().email('Invalid email').required('Required'),
  });
  return (
    <div>
     <h1 className="text-center font-extrabold text-lg ">Quiz Time</h1>
     <Formik
       initialValues={{
         name: '',
         address: '',
         email: '',
       }}
       validationSchema={validate}
       onSubmit={values => {
         // same shape as initial values
         console.log(values); //do something to values
       }}
     >
       {({ errors, touched }) => (
         <Form>
           {/* styling at styles.global.css */}
           <label className="formTitles">Name</label> 
           <Field name="name" />
           {errors.name && touched.name ? (
             <div>{errors.name}</div>
           ) : null}

            <label className="formTitles">Wallet Address</label>
           <Field name="address" />
           {errors.address && touched.address ? (
             <div>{errors.address}</div>
           ) : null}

            <label className="formTitles">Email</label>
           <Field name="email" type="email" />
           {errors.email && touched.email ? <div>{errors.email}</div> : null}

           <button className="text-center font-medium" type="submit">Submit</button>
         </Form>
       )}
     </Formik>
   </div>
  );
};

export default Quiz;
