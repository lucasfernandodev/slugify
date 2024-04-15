import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/global.css'
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import { Homepage } from './pages/Homepage';
import { Contact } from './pages/Contact';
import { About } from './pages/About';
import { Error404 } from './pages/Error404';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />
  },
  {
    path: "/contato",
    element: <Contact />
  },
  {
    path: "/sobre",
    element: <About />
  },
  {
    path: "*",
    element: <Error404 />
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
