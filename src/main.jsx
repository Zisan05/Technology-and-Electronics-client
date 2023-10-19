import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Componenets/Root/Root';
import Home from './Componenets/Home/Home';
import Register from './Componenets/Register/Register';
import AuthProvider from './Componenets/Provider/AuthProvider';
import Login from './Componenets/Login/Login';
import AddProduct from './Componenets/AddProduct/AddProduct';
import BrandsCard from './Componenets/BrandsCard/BrandsCard';
import BrandDetails from './Componenets/BrandDetails/BrandDetails';
import ItemDetails from './Componenets/ItemDetails/ItemDetails';
import AddCard from './Componenets/AddCard/addCard';

// import BrandDetails from './Componenets/BrandDetails/BrandDetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element:<Home></Home>,
        loader: () => fetch('brand.json')
      },
      {
        path: "/addproduct",
        element:<AddProduct></AddProduct>,
      },
      {
        path: "/branddetails/:brandname",
        element:<BrandDetails></BrandDetails>,
        loader: () => fetch('http://localhost:5000/tech')
      },
      {
        path: "/itemdetails/:_id",
        element: <ItemDetails></ItemDetails>,
        loader: ({params}) => fetch(`http://localhost:5000/tech/${params._id}`)

      },
      {
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/addcard",
        element:<AddCard></AddCard>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </React.StrictMode>,
)
