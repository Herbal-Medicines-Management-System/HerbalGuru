import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './MyProducts.scss';
import { useNavigate } from 'react-router-dom';
import getCurrentUser from '../../../utils/getCurrentUser';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import newRequest from '../../../utils/newRequest';
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';

import 'react-toastify/dist/ReactToastify.css';

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

  const navigate = useNavigate();

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Confirm To Delete',
      text: 'Are You Sure You Want To Delete This Product?',
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
      await newRequest.delete(`/adds/${id}`);
      queryClient.invalidateQueries(['myProducts']);
      toast.success('Item deleted successfully!');
    } catch (error) {
      console.log('Error deleting item:', error);
      toast.error('Error deleting item');
    }
  };

  const handleUpdate = (id) => {
    console.log('my productID', id);
    navigate(`/supplier/updateproduct/${id}`);
  };

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
            <Link to='/supplier/add'>
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
                  <IconButton onClick={() => handleDelete(add._id)}>
                    {' '}
                    <DeleteForeverIcon
                      style={{ color: 'red', marginRight: '1vh' }}
                    />
                  </IconButton>
                  <IconButton onClick={() => handleUpdate(add._id)}>
                    {' '}
                    <EditIcon
                      style={{ color: 'yellow', marginLeft: '1vh' }}
                    />
                  </IconButton>
                </td>
              </tr>
            ))}
          </table>
        </div>
      )}
      <ToastContainer toastStyle={{}} />
    </div>
  );
}

export default MyProducts;
