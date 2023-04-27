import React, { useState } from 'react';
 import { Link } from 'react-router-dom';
import './MyProducts.scss';
import { useNavigate } from 'react-router-dom';
import getCurrentUser from '../../../utils/getCurrentUser';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';


function MyProducts() {
  const currentUser = getCurrentUser();

  const queryClient = useQueryClient();

  const { isLoading, error, data } = useQuery({
    queryKey: ['myProducts'],
    queryFn: () =>
      newRequest.get(`/adds?userId=${currentUser._id}`).then((res) => {
        return res.data;
      }),
  });

  const mutation = useMutation({
    mutationFn: (id) => {
      return newRequest.delete(`/adds/${id}`);
    },
    onSuccess: () => {
      queryClient.invalidateQueries(['myProducts']);
    },
  });

  const handleDelete = (id) => {
    mutation.mutate(id);
    
  };

  const navigate = useNavigate();

  const handlUpdate = (id) => {
    navigate("/")
  }
  return (
    <div className='myProducts'>
      {isLoading ? (
        'loading'
      ) : error ? (
        'error'
      ) : (
        <div className='container'>
          <div className='title'>
            <h1>My Products</h1>
            <Link to="/supplier/add">
            <button>Add New Product</button>
            </Link>
          </div>
          <table>
            <tr>
              <th>Image</th>
              <th>Title</th>
              <th>Price(LKR)</th>
              <th>Sales</th>
              <th>Action</th>
            </tr>

            {data.map((add) => (
              <tr key={add._id}>
                <td>
                  <img className='img' src={add.cover} alt='item img' />
                </td>
                <td>{add.title}</td>
                <td>{add.price}</td>
                <td>{add.sales}</td>
                <td>
                  <img
                    className='deleteIcon'
                    src='../../../../public/imgIcons/delete-bin-5-line.png'
                    alt=''
                    onClick={() => handleDelete(add._id)}
                  />
                  <img
                    className='deleteIcon'
                    src='../../../../public/imgIcons/update.png'
                    alt=''
                    onClick={() => handlUpdate(add._id)}
                  />
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
    </div>
  );
}

export default MyProducts;
