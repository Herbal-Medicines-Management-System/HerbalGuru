import React, { useState } from "react";
import upload from "../../utils/upload";
import "./Register.scss";
import newRequest from "../../utils/newRequest";
import * as Yup from 'yup';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';


const validationSchema = Yup.object().shape({
  username: Yup.string().required("Username is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
  country: Yup.string().required("Country is required"),
  phone: Yup.string().required("Phone number is required"),
  desc: Yup.string().required("Description is required"),
});

function Register() {
  const [file, setFile] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (values) => {
    const url = await upload(file);
    try {
      await newRequest.post("/auth/register", {
        ...values,
        img: url,
      });
      navigate("/");
      toast.success("Registration is Successful", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="register">
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          country: "",
          phone: "",
          desc: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="left">
            <h1>Create a New Account</h1>
            <label htmlFor="username">Username</label>
            <Field type="text" name="username" placeholder="johndoe" />
            <ErrorMessage name="username" component="div" className="error" />
            
            <label htmlFor="email">Email</label>
            <Field type="email" name="email" placeholder="email" />
            <ErrorMessage name="email" component="div" className="error" />
            
            <label htmlFor="password">Password</label>
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" className="error" />
            
            <label htmlFor="profilePicture">Profile Picture</label>
            <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            
           
            
            <button type="submit">Register</button>
          </div>
          <div className="right">
            <h2>I want to become a seller</h2>
            <div className="toggle">
              <label htmlFor="isSeller">Activate the seller account</label>
              <label className="switch">
                <Field type="checkbox" name="isSeller" />
                <span className="slider round"></span>
              </label>
            </div>
            <label htmlFor="country">Country</label>
            <Field type="text" name="country" placeholder="USA" />
            <ErrorMessage name="country" component="div" className="error" />

            <label htmlFor="phone">Phone Number</label>
            <Field type="text" name="phone" placeholder="+1 234 567 89" />
            <ErrorMessage name="phone" component="div" className="error" />
            
            <label htmlFor="desc">Description</label>
            <Field as="textarea"  cols="30"
            rows="8" name="desc" placeholder="A short description of yourself" />
            <ErrorMessage name="desc" component="div" className="error" />
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default Register;
