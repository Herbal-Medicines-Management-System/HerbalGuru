import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Home from './pages/home/Home';
import Category from './pages/Category/Category';
import Product from './pages/product/Product';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import MyProducts from './pages/supplier/myProducts/MyProducts';
import Orders from './pages/supplier/orders/Orders';

import './app.scss';

const Layout = () => {
  return (
    <div className='app'>
      <Navbar />
      <Outlet />
      <Footer />
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
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
