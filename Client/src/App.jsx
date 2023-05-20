import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import React from 'react';
import Home from './pages/home/Home';
import Category from './pages/Category/Category';
import Review from './components/Review/Review';
import Product from './pages/product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/login/Login';
import UserProfile from './pages/user/UserProfile';
import Register from './pages/register/Register';
import MyProducts from './pages/supplier/myProducts/MyProducts';
import Orders from './pages/supplier/orders/Orders';
import Add from './pages/supplier/add/Add';
import Confirmation from './pages/Confirmation/Confirmation';
import Form from './pages/Form/Form';
import UpdateProduct from './pages/supplier/updateMyProduct/UpdateMyProduct';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import './app.scss';

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className='app'>
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
          <ToastContainer />
        </QueryClientProvider>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Layout />,
      children: [
        {
          path: '/',
          element: <Home />,
        },
        {
          path: '/delivery',
          element: <Form />,
        },
        {
          path: '/category/:id',
          element: <Category />,
        },
        {
          path: '/category/:id',
          element: <Category />,
        },
        {
          path: '/review/:productId',
          element: <Review />,
        },
        {
          path: '/login',
          element: <Login />,
        },
        {
          path: '/profile',
          element: <UserProfile />,
        },
        {
          path: '/register',
          element: <Register />,
        },
        {
          path: '/supplier/myproducts',
          element: <MyProducts />,
        },
        {
          path: '/supplier/orders',
          element: <Orders />,
        },
        {
          path: '/supplier/add',
          element: <Add />,
        },
        {
          path: '/success',
          element: <Confirmation />,
        },
        {
          path: '/supplier/updateproduct/:productId',
          element: <UpdateProduct />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
