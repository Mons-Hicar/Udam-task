import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {createBrowserRouter, RouterProvider,} from "react-router-dom";
import About from "./Component/About";
import Register from "./Register/Register";
import Login from "./Register/Login";
import Study from "./Component/Study";
import Test from "./Component/Test";
import Univ from "./Component/Univ";
import Schol from "./Component/Schol";
import Course from "./Component/Course";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "/About",
    element: <About/>,
  },
  {
    path: "/Register",
    element: <Register/>,
  },
  {
    path: "/Login",
    element: <Login/>,
  },

  {
    path: "/Study",
    element: <Study/>,
  },
  {
    path: "/Test",
    element: <Test/>,
  },
  {
    path: "/Univ",
    element: <Univ/>,
  },

  {
    path: "/Schol",
    element: <Schol/>,
  },
  {
    path: "/Course",
    element: <Course/>,
  },


  

]);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  //   <RouterProvider router={router} />
  // </React.StrictMode>
  <RouterProvider router={router} />
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
