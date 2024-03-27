import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from './App.jsx'
import {Calc} from './Calc.jsx';
import { Contact } from './Contact.jsx';
import './index.css'
import { Tec } from './Tec.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/tec",
    element:  <Tec />,
  },
  {
    path: "/calc",
    element:  <Calc />,
  },
  {
    path: "/contact",
    element:  <Contact />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
