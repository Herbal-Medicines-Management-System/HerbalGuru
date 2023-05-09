import React, { useReducer, useState } from 'react';
import './UpdateMyProduct.scss';
import { addReducer, INITIAL_STATE } from '../../../reducers/addReducer';
import upload from '../../../utils/upload';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';

const UpdateMyProduct = () => {
  const [singleFile, setSingleFile] = useState(undefined);
  const [files, setFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const [state, dispatch] = useReducer(addReducer, INITIAL_STATE);

  const handleChange = (e) => {
    dispatch({
      type: 'CHANGE_INPUT',
      payload: { name: e.target.name, value: e.target.value },
    });
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
    mutation.mutate(state);
   // navigate("/")
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
              name='title'
              placeholder="e.g. I will do something I'm really good at"
              onChange={handleChange}
            />
            <label htmlFor=''>Category</label>
            <select name='cat' id='cat' onChange={handleChange}>
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
            ></textarea>
            <button onClick={handleSubmit}>Create</button>
          </div>
          <div className='details'>
            <label htmlFor=''>Service Title</label>
            <input
              type='text'
              name='shortTitle'
              placeholder='e.g. One-page web design'
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
            ></textarea>
            <label htmlFor=''>Delivery Time (e.g. 3 days)</label>
            <input type='number' name='deliveryTime' onChange={handleChange} />
            <label htmlFor=''>Available Quntity </label>
            <input
              type='number'
              name='availableQuntity'
              onChange={handleChange}
            />
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
            <label htmlFor=''>Price</label>
            <input type='number' onChange={handleChange} name='price' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateMyProduct;