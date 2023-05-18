import React, { useState, useEffect, useReducer } from 'react';
import './UpdateMyProduct.scss';
import { addReducer, INITIAL_STATE } from '../../../reducers/addReducer';
import { toast } from 'react-toastify';
import upload from '../../../utils/upload';
import { useNavigate, useParams } from 'react-router-dom';
import newRequest from '../../../utils/newRequest';
import 'react-confirm-alert/src/react-confirm-alert.css';

const UpdateMyProduct = () => {
  const { productId } = useParams();

  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descTouched, setDescTouched] = useState(false);
  const [shortDescTouched, setShortDescTouched] = useState(false);
  const [priceTouched, setPriceTouched] = useState(false);
  const [qtyTouched, setQtyTouched] = useState(false);
  const [dispatch] = useReducer(addReducer, INITIAL_STATE);
  const navigate = useNavigate();

  const handleTitleBlur = () => {
    setTitleTouched(true);
  };
  const handleDescBlur = () => {
    setDescTouched(true);
  };
  const handleShortDescBlur = () => {
    setShortDescTouched(true);
  };
  const handlePriceBlur = () => {
    setPriceTouched(true);
  };
  const handleQtyBlur = () => {
    setQtyTouched(true);
  };

  const validateForm = () => {
    if (state.title.trim() === '') {
      toast.error('Please Enter a Title.');
      return false;
    }
    if (state.cat.trim() === '') {
      toast.error('Please select a Category.');
      return false;
    }
    if (state.desc.trim() === '') {
      toast.error('Please Enter The Description.');
      return false;
    }
    if (state.shortDesc.trim() === '') {
      toast.error('Please Enter The Short Description.');
      return false;
    }
    if (state.price.trim() === '') {
      toast.error('Please Enter The Price.');
      return false;
    }
    if (state.availableQuntity.trim() === '') {
      toast.error('Please Enter The Quantity.');
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'features') {
      dispatch({ type: 'CHANGE_INPUT', payload: { name, value } });
    } else {
      setState((prevState) => ({ ...prevState, [name]: value }));
    }
  };

   const handleFeature = (e) => {
    e.preventDefault();
    const feature = e.target.elements.feature.value;
    setState({
      ...state,
      features: [...state.features, feature],
      newFeature: '', // Reset the newFeature state
    });
    dispatch({
      type: 'ADD_FEATURE',
      payload: feature,
    });
    e.target.reset();
  };
  
  const handleUpload = async () => {
    setUploading(true);
    try {
      const cover = await upload(singleFile);

      const images = await Promise.all(
        [...files].map(async (file) => {
          const url = await upload(file);
          return url;
        })
      );
      setUploading(false);
      dispatch({ type: 'ADD_IMAGES', payload: { cover, images } });
    } catch (err) {
      console.log(err);
    }
  };

  console.log('update productId', productId);
  const [state, setState] = useState({
    title: '',
    cat: '',
    desc: '',
    shortTitle: '',
    shortDesc: '',
    cover: '',
    deliveryTime: '',
    availableQuntity: '',
    features: [],
    price: '',
  });

  useEffect(() => {
    // Fetch product data from the server using productId
    const fetchProduct = async () => {
      try {
        const response = await newRequest.get(`/adds/single/${productId}`);
        const product = response.data;
        console.log('product data', product);
        setState({
          title: product.title,
          cat: product.cat,
          desc: product.desc,   
          shortTitle: product.shortTitle,
          shortDesc: product.shortDesc,
          cover: product.cover,
          deliveryTime: String(product.deliveryTime),
          availableQuntity: String(product.availableQuntity),
          features: product.features,
          price: String(product.price),
        });
      } catch (error) {
        console.log(error);
      }
    };

    fetchProduct();
  }, [productId]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      
      return;
    }
    await newRequest.put(`/adds/${productId}`, state);
    navigate('/supplier/myproducts');
    toast.success('Product Update Successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
  
      // Send updated product data to the server for updating
      
  };
  console.log(state);
  return (
    <div className='add'>
      <div className='container'>
        <h1>update Product</h1>
        <div className='sections'>
          <div className='info'>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              value={state.title}
              name='title'
              placeholder="e.g. I will do something I'm really good at"
              onBlur={handleTitleBlur}
              onChange={handleChange}
            />{' '}
            {titleTouched && state.title.trim() === '' && (
              <p className='error'>Please enter a title.</p>
            )}
            <label htmlFor=''>Category</label>
            <select
              name='cat'
              id='cat'
              value={state.cat}
              onChange={handleChange}
            >
              <option value=''>Select Category</option>
              <option value='aromatherapy'>Aromatherapy</option>
              <option value='Bath&Shower'>Bath & Shower</option>
              <option value='Body&MassageOils'>Body & Massage Oils</option>
              <option value='FaceMasks&HandSanitizers'>
                Face Masks & Hand Sanitizers
              </option>
              <option value='HairCare'>Hair Care</option>
              <option value='LipCare'>Lip Care</option>
              <option value='Lotion'>Lotion</option>
              <option value='MedicineCabinet'>Medicine Cabinet</option>
              <option value="Men'sGrooming">Men's Grooming</option>
              <option value='OralCare'>Oral Care</option>
            </select>
            <div className='images'>
              <div className='imagesInputs'>
                <div className='viewImg'>
                  Cover Photo :{' '}
                  <img
                    src={state.cover}
                    style={{
                      marginLeft:"42%",
                      width: '300px',
                      height: '300px',
                      borderRadius: '60px',
                    }}
                    alt='Cover Photo'
                  />
                </div>
                {/* <label htmlFor=''>Cover Image</label>
                <input
                  type='file'
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor=''>Upload Images</label>
                <input
                  type='file'
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                /> */}
              </div>
              {/* <button onClick={handleUpload}>
                {uploading ? 'uploading' : 'Upload'}
              </button> */}
            </div>
            <label htmlFor=''>Description</label>
            <textarea
              name='desc'
              id='desc'
              placeholder='Brief descriptions to introduce your service to customers'
              cols='0'
              rows='16'
              onBlur={handleDescBlur}
              value={state.desc}
              onChange={handleChange}
            ></textarea>{' '}
            {descTouched && state.desc.trim() === '' && (
              <p className='error'>Please Enter The Description.</p>
            )}
            <button onClick={handleUpdate}>Update Product</button>
          </div>
          <div className='details'>
            <label htmlFor=''>Service Title</label>
            <input
              type='text'
              id='shortTitle'
              value={state.shortTitle}
              name='shortTitle'
              placeholder='e.g. One-page web design'
              onChange={handleChange}
            />
            <label htmlFor=''>Short Description</label>
            <textarea
              name='shortDesc'
              onChange={handleChange}
              id='shortDesc'
              value={state.shortDesc}
              placeholder='Short description of your service'
              cols='30'
              onBlur={handleShortDescBlur}
              rows='10'
            ></textarea>{' '}
            {shortDescTouched && state.shortDesc.trim() === '' && (
              <p className='error'>Please Enter The Short Description.</p>
            )}
            <label htmlFor=''>Delivery Time (e.g. 3 days)</label>
            <input
              type='number'
              id='deliveryTime'
              value={state.deliveryTime}
              name='deliveryTime'
              onChange={handleChange}
            />
            <label htmlFor=''>Available Quntity </label>
            <input
              type='number'
              id='availableQuntity'
              onBlur={handleQtyBlur}
              value={state.availableQuntity}
              name='availableQuntity'
              onChange={handleChange}
            />{' '}
            {qtyTouched && state.availableQuntity.trim() === '' && (
              <p className='error'>Please Enter Available Quantity.</p>
            )}
            <label htmlFor=''>Add Specific Features</label>
              <form action='' className='add' onSubmit={handleFeature}>
                <input
                  type='text'
                  placeholder='e.g. Color: Red, Blue'
                  value={state.newFeature}
                  onChange={(e) =>
                    setState({ ...state, newFeature: e.target.value })
                  }
                />
                <button type='submit'>Add</button>
              </form>
              <div className='added-features'>
                {state.features.map((feature, index) => (
                  <div className='item' key={index}>
                    <button
                      onClick={() =>
                        setState({
                          ...state,
                          features: state.features.filter(
                            (_, i) => i !== index
                          ),
                        })
                      }
                    >
                      {feature} <span style={{ color: 'red' }}>X</span>
                    </button>
                  </div>
                ))}
              </div>

            <label htmlFor=''>Price</label>
            <input
              type='number'
              onChange={handleChange}
              value={state.price}
              id='price'
              name='price'
              onBlur={handlePriceBlur}
            />
            {priceTouched && state.price.trim() === '' && (
              <p className='error'>Please Enter Price Per Unit.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyProduct;
