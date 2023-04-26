import React from 'react';
import './Orders.scss';

function Orders() {
  const currentUser = JSON.parse(localStorage.getItem('currentUser'));

  return (
    <div className='orders'>
      <div className='container'>
        <div className='title'>
          <h1>Orders</h1>
          {/* <Link to="/supplier/myproducts"> */}
          <button>Add New Product</button>
          {/* </Link> */}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price(LKR)</th>
            <th>{currentUser?.isSeller ? 'Buyer' : 'Seller'}</th>
            <th>Contact</th>
          </tr>

          <tr>
            <td>
              <img
                className='img'
                src='https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3w0NjQ2NDl8aW1hZ2UvanBlZ3xhREZoTDJnMllTOHhOVFl4TURVd01UWXlOemt6TkM4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfGJkYmQxYTIyZDBmYTIyYTk4ZDJmN2FhYTMwYzlmYWMzNGFjY2NmMTg5OWNhN2YzNDIzMjFjNTcxOWQ2YzA4MjM'
                alt='item img'
              />
            </td>
            <td>Herbal Essences Bio:Renew Hydrate Coconut Milk</td>
            <td>100.00</td>
            <td>20</td>
            <td>
              <img
                className='contactIcon'
                src='../../../../public/imgIcons/contact.png'
                alt=''
              />
              {/* <DeleteOutlinedIcon /> */}
            </td>
          </tr>

          <tr>
            <td>
              <img
                className='img'
                src='https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3w0NjQ2NDl8aW1hZ2UvanBlZ3xhREZoTDJnMllTOHhOVFl4TURVd01UWXlOemt6TkM4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfGJkYmQxYTIyZDBmYTIyYTk4ZDJmN2FhYTMwYzlmYWMzNGFjY2NmMTg5OWNhN2YzNDIzMjFjNTcxOWQ2YzA4MjM'
                alt='item img'
              />
            </td>
            <td>Herbal Essences Bio:Renew Hydrate Coconut Milk</td>
            <td>100.00</td>
            <td>20</td>
            <td>
              <img
                className='contactIcon'
                src='../../../../public/imgIcons/contact.png'
                alt=''
              />
              {/* <DeleteOutlinedIcon /> */}
            </td>
          </tr>

          <tr>
            <td>
              <img
                className='img'
                src='https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3w0NjQ2NDl8aW1hZ2UvanBlZ3xhREZoTDJnMllTOHhOVFl4TURVd01UWXlOemt6TkM4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfGJkYmQxYTIyZDBmYTIyYTk4ZDJmN2FhYTMwYzlmYWMzNGFjY2NmMTg5OWNhN2YzNDIzMjFjNTcxOWQ2YzA4MjM'
                alt='item img'
              />
            </td>
            <td>Herbal Essences Bio:Renew Hydrate Coconut Milk</td>
            <td>100.00</td>
            <td>20</td>
            <td>
              <img
                className='contactIcon'
                src='../../../../public/imgIcons/contact.png'
                alt=''
              />
              {/* <DeleteOutlinedIcon /> */}
            </td>
          </tr>

          <tr>
            <td>
              <img
                className='img'
                src='https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3w0NjQ2NDl8aW1hZ2UvanBlZ3xhREZoTDJnMllTOHhOVFl4TURVd01UWXlOemt6TkM4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfGJkYmQxYTIyZDBmYTIyYTk4ZDJmN2FhYTMwYzlmYWMzNGFjY2NmMTg5OWNhN2YzNDIzMjFjNTcxOWQ2YzA4MjM'
                alt='item img'
              />
            </td>
            <td>Herbal Essences Bio:Renew Hydrate Coconut Milk</td>
            <td>100.00</td>
            <td>20</td>
            <td>
              <img
                className='contactIcon'
                src='../../../../public/imgIcons/contact.png'
                alt=''
              />
              {/* <DeleteOutlinedIcon /> */}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default Orders;
