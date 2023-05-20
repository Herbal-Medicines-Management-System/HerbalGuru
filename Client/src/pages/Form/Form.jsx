import React, { useReducer, useState, useEffect } from 'react';
import './Form.css';
import { deliverReducer, INITIAL_STATE } from '../../reducers/deliverReducer';
import newRequest from '../../utils/newRequest';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Form = () => {
  const queryClient = useQueryClient();

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});
  const [state, dispatch] = useReducer(deliverReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const mutation = useMutation({
    mutationFn: (deliver) => {
      return newRequest.post('/deliver', deliver);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myDeliver']);
    },
  });
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     const validationErrors = {};

  //     if (!name.trim()) {
  //       validationErrors.name = 'Name is required';
  //     }

  //     if (!address.trim()) {
  //       validationErrors.address = 'Address is required';
  //     }

  //     if (!phone.trim()) {
  //       validationErrors.phone = 'Phone number is required';
  //     } else if (!/^\d{10}$/.test(phone)) {
  //       validationErrors.phone = 'Invalid phone number';
  //     }

  //     if (Object.keys(validationErrors).length === 0) {
  //       // Form is valid, proceed with submission
  //       console.log('Form submitted successfully!');
  //       // Add your logic to process the form data here
  //     } else {
  //       setErrors(validationErrors);
  //     }
  //     mutation.mutate(state);
  //     navigate('/');
  //     toast.success(' New Product Added Successfully', {
  //       position: toast.POSITION.TOP_RIGHT,
  //     });
  //   };

  const handleSubmit = (e) => {
    // e.preventDefault();
    e.preventDefault();
    //     const validationErrors = {};

    //     if (!name.trim()) {
    //       validationErrors.name = 'Name is required';
    //     }

    //     if (!address.trim()) {
    //       validationErrors.address = 'Address is required';
    //     }

    //     if (!phone.trim()) {
    //       validationErrors.phone = 'Phone number is required';
    //     } else if (!/^\d{10}$/.test(phone)) {
    //       validationErrors.phone = 'Invalid phone number';
    //     }

    //     if (Object.keys(validationErrors).length === 0) {
    //       // Form is valid, proceed with submission
    //       console.log('Form submitted successfully!');
    //       // Add your logic to process the form data here
    //     } else {
    //       setErrors(validationErrors);
    //     }
    mutation.mutate(state);
    navigate('/');
    toast.success(' New Product Added Successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

   const { isLoading, error, data } = useQuery({
    queryKey: ['myProducts'],
    queryFn: () =>
      newRequest.get(`/review/${productId}`).then((res) => {
        return res.data;
      }),
  });

  return (
    <div className='form-container'>
      <h2>Delivery Details</h2>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>Name</label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={handleChange}
            value={state.name}
          />
          {errors.name && <span className='error'>{errors.name}</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='address'>Address</label>
          <input
            type='text'
            id='address'
            name='address'
            value={state.address}
            onChange={handleChange}
          />
          {errors.address && <span className='error'>{errors.address}</span>}
        </div>

        <div className='form-group'>
          <label htmlFor='phone'>Phone Number</label>
          <input
            type='text'
            name='pNumber'
            id='phone'
            value={state.phone}
            onChange={handleChange}
          />
          {errors.phone && <span className='error'>{errors.phone}</span>}
        </div>

        <div className='form-group'>
          {/* <label htmlFor='deliveryOption'>Delivery Option</label> */}

          {/* <select name='dOption' id='dOption' onChange={handleChange}>
            <option value='standard'>Standard Delivery</option>
            <option value='express'>Express Delivery</option>
          </select> */}

          <label htmlFor=''>Delivery Option</label>
          <input
            type='text'
            name='dOption'
            id='dOption'
            value={state.dOption}
            onChange={handleChange}
          />
        </div>

        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default Form;
