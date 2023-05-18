import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import newRequest from '../../utils/newRequest';
import './Login.scss';

function Login() {
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  const handleFormSubmit = async (values, { setSubmitting }) => {
    try {
      const res = await newRequest.post('/auth/login', values);
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('currentUser', JSON.stringify(res.data.info));

      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

      toast.success(currentUser.username + " Login Successfully", {
        position: toast.POSITION.TOP_RIGHT,
      });
      navigate('/');
    } catch (err) {
      setError(err.response.data);
      toast.error('Login failed. Please try again.');
    }
    setSubmitting(false);
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required('Username is required'),
    password: Yup.string().required('Password is required'),
  });

  return (
    <div className='login'>
      <Formik
        initialValues={{ username: '', password: '' }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <h1>Sign in</h1>

          <div>
            <label htmlFor='username'>Username</label>
            <Field
              type='text'
              id='username'
              name='username'
              placeholder='Chandima Sooriyaarachchi'
            />
            <ErrorMessage name='username' component='div' className='error' />
          </div>

          <div>
            <label htmlFor='password'>Password</label>
            <Field type='password' id='password' name='password' />
            <ErrorMessage name='password' component='div' className='error' />
          </div>

          <button
            type='submit'
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            Login
          </button>

          {error && <div className='error-message'>{error}</div>}
        </Form>
      </Formik>
      <ToastContainer />
    </div>
  );
}

export default Login;
