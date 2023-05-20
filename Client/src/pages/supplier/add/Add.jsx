import React, { useReducer, useState } from 'react';
import './Add.scss';
import { addReducer, INITIAL_STATE } from '../../../reducers/addReducer';
import upload from '../../../utils/upload';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'react-toastify';
import newRequest from '../../../utils/newRequest';

const Add = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);
  const [titleTouched, setTitleTouched] = useState(false);
  const [descTouched, setDescTouched] = useState(false);
  const [shortDescTouched, setShortDescTouched] = useState(false);
  const [priceTouched, setPriceTouched] = useState(false);
  const [qtyTouched, setQtyTouched] = useState(false);
  const [state, dispatch] = useReducer(addReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    });
  };
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

  const handleFeature = (e) => {
    e.preventDefault();
    dispatch({
      type: 'ADD_FEATURE',
      payload: e.target[0].value,
    });
    e.target[0].value = '';
  };

  const handleUpload = async () => {
    setUploading(true);
    toast.success(' Uploading Images', {
      position: toast.POSITION.TOP_RIGHT,
    });
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

  const navigate = useNavigate();

  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (add) => {
      return newRequest.post('/adds', add);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myProducts']);
    },
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    mutation.mutate(state);
    navigate('/supplier/myproducts');
    toast.success(' New Product Added Successfully', {
      position: toast.POSITION.TOP_RIGHT,
    });
  };
  console.log(state);
  return (
    <div className='add'>
      <div className='container'>
        <h1>Add New Product</h1>
        <div className='sections'>
          <div className='info'>
            <label htmlFor=''>Title</label>
            <input
              type='text'
              name='title'
              placeholder="e.g. I will do something I'm really good at"
              value={state.title}
              onChange={handleChange}
              onBlur={handleTitleBlur}
              required
            />
            {titleTouched && state.title.trim() === '' && (
              <p className='error'>Please enter a title.</p>
            )}
            <label htmlFor=''>Category</label>
            <select name='cat' id='cat' onChange={handleChange}>
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
                <label htmlFor=''>Cover Image</label>
                <input
                  type='file'
                  onChange={(e) => setSingleFile(e.target.files[0])}
                />
                <label htmlFor=''>Upload Images</label>
                <input
                  type='file'
                  multiple
                  onChange={(e) => setFiles(e.target.files)}
                />
              </div>
              <button onClick={handleUpload}>
                {uploading ? 'uploading' : 'Upload'}
              </button>
            </div>
            <label htmlFor=''>Description</label>
            <textarea
              name='desc'
              id=''
              placeholder='Brief descriptions to introduce your service to customers'
              cols='0'
              rows='16'
              onChange={handleChange}
              value={state.desc}
              onBlur={handleDescBlur}
              required
            ></textarea>
            {descTouched && state.desc.trim() === '' && (
              <p className='error'>Please Enter The Description.</p>
            )}

            <button
              className='create'
              onClick={handleSubmit}
              disabled={mutation.isLoading}
            >
              {mutation.isLoading ? 'Creating...' : 'Create'}
            </button>
          </div>
          <div className='details'>
            <label htmlFor=''>Service Title</label>
            <input
              type='text'
              name='shortTitle'
              placeholder='e.g. Enter Your Service Title'
              onChange={handleChange}
            />
            <label htmlFor=''>Short Description</label>
            <textarea
              name='shortDesc'
              onChange={handleChange}
              id=''
              placeholder='Short description of your service'
              cols='30'
              rows='10'
              value={state.shortDesc}
              onBlur={handleShortDescBlur}
              required
            ></textarea>
            {shortDescTouched && state.shortDesc.trim() === '' && (
              <p className='error'>Please Enter The Short Description.</p>
            )}
            <label htmlFor=''>Delivery Time (e.g. 3 days)</label>
            <input type='number' name='deliveryTime' onChange={handleChange} />
            <label htmlFor=''>Available Quntity </label>
            <input
              type='number'
              name='availableQuntity'
              onChange={handleChange}
              value={state.availableQuntity}
              onBlur={handleQtyBlur}
              required
            />
            {qtyTouched && state.availableQuntity.trim() === '' && (
              <p className='error'>Please Enter Available Quantity.</p>
            )}
            <label htmlFor=''>Add Features</label>
            <form action='' className='add' onSubmit={handleFeature}>
              <input type='text' placeholder='e.g. page design' />
              <button type='submit'>add</button>
            </form>
            <div className='addedFeatures'>
              {state?.features?.map((f) => (
                <div className='item' key={f}>
                  <button
                    onClick={() =>
                      dispatch({ type: 'REMOVE_FEATURE', payload: f })
                    }
                  >
                    {f}
                    <span>X</span>
                  </button>
                </div>
              ))}
            </div>
            <label htmlFor=''>Price(LKR)</label>
            <input
              type='number'
              onChange={handleChange}
              name='price'
              value={state.price}
              onBlur={handlePriceBlur}
              required
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

export default Add;
