import React from 'react';
import { Link } from "react-router-dom";
import './MyProducts.scss';

import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';

function MyProducts() {
  return (
    <div className='myProducts'>
      <div className='container'>
        <div className='title'>
          <h1>My Products</h1>
          {/* <Link to="/supplier/myproducts"> */}
           <button>Add New Product</button>
           {/* </Link> */}
        </div>
        <table>
          <tr>
            <th>Image</th>
            <th>Title</th>
            <th>Price(LKR)</th>
            <th>Sales</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>
              <img className='img'
                src='https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3w0NjQ2NDl8aW1hZ2UvanBlZ3xhREZoTDJnMllTOHhOVFl4TURVd01UWXlOemt6TkM4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfGJkYmQxYTIyZDBmYTIyYTk4ZDJmN2FhYTMwYzlmYWMzNGFjY2NmMTg5OWNhN2YzNDIzMjFjNTcxOWQ2YzA4MjM'
                alt='item img'
              />
            </td>
            <td>Herbal Essences Bio:Renew Hydrate Coconut Milk</td>
            <td>100.00</td>
            <td>20</td>
            <td>
              <img className='deleteIcon' src='../../../../public/imgIcons/delete-bin-5-line.png' alt='' />
              {/* <DeleteOutlinedIcon /> */}
            </td>
          </tr>

          <tr>
            <td>
              <img className='img'
                src='https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3w0NjQ2NDl8aW1hZ2UvanBlZ3xhREZoTDJnMllTOHhOVFl4TURVd01UWXlOemt6TkM4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfGJkYmQxYTIyZDBmYTIyYTk4ZDJmN2FhYTMwYzlmYWMzNGFjY2NmMTg5OWNhN2YzNDIzMjFjNTcxOWQ2YzA4MjM'
                alt='item img'
              />
            </td>
            <td>Herbal Essences Bio:Renew Hydrate Coconut Milk</td>
            <td>100.00</td>
            <td>20</td>
            <td>
              <img className='deleteIcon' src='../../../../public/imgIcons/delete-bin-5-line.png' alt='' />
              {/* <DeleteOutlinedIcon /> */}
            </td>
          </tr>

          <tr>
            <td>
              <img className='img'
                src='https://www.luluhypermarket.com/cdn-cgi/image/f=auto/medias/1200Wx1200H-null?context=bWFzdGVyfGltYWdlc3w0NjQ2NDl8aW1hZ2UvanBlZ3xhREZoTDJnMllTOHhOVFl4TURVd01UWXlOemt6TkM4eE1qQXdWM2d4TWpBd1NGOXVkV3hzfGJkYmQxYTIyZDBmYTIyYTk4ZDJmN2FhYTMwYzlmYWMzNGFjY2NmMTg5OWNhN2YzNDIzMjFjNTcxOWQ2YzA4MjM'
                alt='item img'
              />
            </td>
            <td>Herbal Essences Bio:Renew Hydrate Coconut Milk</td>
            <td>100.00</td>
            <td>20</td>
            <td>
              <img className='deleteIcon' src='../../../../public/imgIcons/delete-bin-5-line.png' alt='' />
              {/* <DeleteOutlinedIcon /> */}
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}

export default MyProducts;
