import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import React from 'react';
import Home from './pages/home/Home';
import Category from './pages/Category/Category';
import Product from './pages/product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import MyProducts from './pages/supplier/myProducts/MyProducts';
import Orders from './pages/supplier/orders/Orders';
import Add from './pages/supplier/add/Add';
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
          path: '/category/:id',
          element: <Category />,
        },
        {
          path: '/product/:id',
          element: <Product />,
        },
        {
          path: '/login',
          element: <Login />,
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
          path: '/supplier/update',
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
