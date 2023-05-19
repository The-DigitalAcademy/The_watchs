import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Pages/Home.jsx';
import AppleMusic from './Pages/AppleMusic.jsx';
import AppleTv from './Pages/AppleTv.jsx';
import AppleArcade from './Pages/AppleArcade.jsx';
import AppleiCloud from './Pages/AppleiCloud.jsx';


const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/appleicloud",
    element: <AppleiCloud/>,
  },
  {
    path: "/appletv",
    element: <AppleTv/>,
  },
  {
    path: "/music",
    element: <AppleMusic/>,
  },
  {
    path: "/applearcade",
    element: <AppleArcade/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
