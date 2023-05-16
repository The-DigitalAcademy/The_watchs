import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { createBrowserRouter, RouterProvider, } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Service from './Pages/Service.jsx'
import Contact from './Pages/Contact.jsx'
import About from './Pages/About.jsx';
import Blog from './Pages/Blog.jsx'

const router = createBrowserRouter([
  
  {
    path: "/",
    element: <Home/>,
  },
  {
    path: "/service",
    element: <Service/>,
  },
  {
    path: "/contact",
    element: <Contact/>,
  },
  {
    path: "/about",
    element: <About/>,
  },
  {
    path: "/blog",
    element: <Blog/>,
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    <App />
  </React.StrictMode>,
)
