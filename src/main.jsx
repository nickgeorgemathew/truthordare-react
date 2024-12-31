import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import App from './App.jsx'
import './index.css'
import Mainbody from './Mainbody.jsx';
import Custom from './Custom.jsx';


  const router = createBrowserRouter([
 {
 path: "/",
 element: <Mainbody />,
 },
 
{
 path: "/Custom",
 element: <Custom/>,
 },
 ],
);
ReactDOM.createRoot(document.getElementById("root")).render(
 <RouterProvider router={router} />
);


