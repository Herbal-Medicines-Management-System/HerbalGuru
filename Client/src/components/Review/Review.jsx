import React, { useReducer, useState, useEffect } from 'react';
import './Review.scss';
import { reviewReducer, INITIAL_STATE } from '../../reducers/reviewReducer.js';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { useParams, useNavigate } from 'react-router-dom';
import newRequest from '../../utils/newRequest';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import 'react-toastify/dist/ReactToastify.css';
import Swal from 'sweetalert2';

const Review = () => {
  const queryClient = useQueryClient();

  const { productId } = useParams();

  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [titleTouched, setTitleTouched] = useState(false);
  const [state, dispatch] = useReducer(reviewReducer, INITIAL_STATE);

  //   const [review, setReview] = useState(null);

  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [feedbacks, setFeedbacks] = useState([]);
  const [productIdFromParams, setProductId] = useState();

  const handleChange = (e, productId) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    });
  };

  const handleTitleBlur = () => {
    setTitleTouched(true);
  };

  useEffect(() => {
    setProductId(productId);
  }, [productId]);
  //   const validateForm = () => {
  //     if (state.title.trim() === '') {
  //       toast.error('Please Enter a Comment.');
  //       return false;
  //     }
  //     return true;
  //   };
  const mutation = useMutation(
    (state) => {
      // Add the productId to the state object
      const updatedState = { ...state, addId: productIdFromParams };
      console.log(updatedState);
      return newRequest.post('/review', updatedState);
    },
    {
      onSuccess: () => {
        queryClient.invalidateQueries(['myreview']);
      },
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    // if (!validateForm()) {
    //   return;
    // }

    mutation.mutate(state);
     navigate('/');
    toast.success(' New Review Added Successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };

  useEffect(() => {
    // Fetch product data from the server using productId
    const fetchProduct = async () => {
      try {
        const response = await newRequest.get(`/adds/single/${productId}`);
        const productData = response.data;
        setProduct(productData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  const { isLoading, error, data } = useQuery({
    queryKey: ['myProducts'],
    queryFn: () =>
      newRequest.get(`/review/${productId}`).then((res) => {
        return res.data;
      }),
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Confirm To Delete',
      text: 'Are You Sure You Want To Delete This Review?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes',
    }).then((result) => {
      if (result.isConfirmed) {
        deleteItem(id);
      }
    });
  };

  const deleteItem = async (id) => {
    try {
      await newRequest.delete(`/review/${id}`);
      queryClient.invalidateQueries(['myProducts']);
      toast.success('Review deleted successfully!');
    } catch (error) {
      console.log('Error deleting item:', error);
      toast.error('You Cannot Delete Others Reviews');
    }
  };

  return (
    <div className='App'>
      <h1 style={{ fontSize: '50px' }}>User Feedback and Comments</h1>
      {product ? (
        <div style={{ marginBottom: '3vh' }}>
          <img
            style={{ height: '200px' }}
            className='imageLeft'
            src={product.cover}
            alt={product.title}
          />
          <h3>Title:</h3>
          <div
            className='product-description'
            style={{
              marginRight: '40rem',
              marginLeft: '40rem',
              textAlign: 'center',
              padding: '10px',
            }}
          >
            {product.title}
          </div>
          <h3>Description:</h3>
          <div
            className='product-description'
            style={{
              marginRight: '40rem',
              marginLeft: '40rem',
              textAlign: 'justify',
              padding: '10px',
            }}
          >
            {product.desc}
          </div>
        </div>
      ) : (
        <p>Loading product details...</p>
      )}

      {isLoading ? (
        'loading'
      ) : error ? (
        'error'
      ) : (
        <div className='container'>
          <div className='title'>
            <h1>All Reviews</h1>
          </div>
          <table
            style={{
              marginLeft: '74vh',
              marginTop: '-60px',
              textAlign: 'center',
              marginBottom: '20px',
            }}
          >
            <thead>
              <tr>
                {/* <th style={{ marginRight: '10px' }}>User</th> */}
                <th style={{ marginRight: '10px' }}>Comment</th>
                <th style={{ marginRight: '100px' }}>Rating</th>
                <th style={{ marginRight: '10px' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((review) => (
                <tr key={review._id}>
                  <td>{review.desc}</td>
                  <td>{review.star}</td>
                  <td>
                    <IconButton onClick={() => handleDelete(review._id)}>
                      {' '}
                      <DeleteForeverIcon
                        style={{ color: 'red', marginRight: '1vh' }}
                      />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className='rating'>
          <label htmlFor='rating'>Rating: </label>
          <select name='star' id='rating' onChange={handleChange}>
            <option value='0'>Select rating</option>
            <option value='1'>1 Star</option>
            <option value='2'>2 Stars</option>
            <option value='3'>3 Stars</option>
            <option value='4'>4 Stars</option>
            <option value='5'>5 Stars</option>
          </select>
        </div>
        <div className='women'>{/* <img src='/img/review.png'  /> */}</div>
        <div className='comment'>
          <label htmlFor='comment'>Comment: </label>
          <textarea
            id='comment'
            value={state.desc}
            onChange={handleChange}
            name='desc'
            placeholder='Enter your comment...'
            // onBlur={handleTitleBlur}
            required
          ></textarea>
          {/* {titleTouched && state.title.trim() === '' && (
            <p className='error'>Please enter a Comment.</p>
          )} */}
        </div>
        <button type='submit'>Submit</button>
      </form>

      {/* <div className='feedback-list'>
        {feedbacks.map((feedback, index) => (
          <div key={index} className='feedback'>
            <div className='rating'>Rating: {feedback.rating} Stars</div>
            <div className='comment'>Comment: {feedback.comment}</div>
          </div>
        ))}
      </div> */}
      <hr />
      <ToastContainer toastStyle={{}} />
    </div>
  );
};

export default Review;
