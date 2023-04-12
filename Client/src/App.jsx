import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/home/Home";
import Products from "./pages/products/products";
import Product from "./pages/product/Product";

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path: "/products/:id",
    element:<Products />
  },
  {
    path: "/product/:id",
    element:<Product />
  },
])

function App() {

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
