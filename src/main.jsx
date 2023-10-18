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
        path: "/register",
        element: <Register></Register>
      },
      {
        path: "/login",
        element: <Login></Login>
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
