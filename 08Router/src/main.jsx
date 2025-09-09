import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../../07reactRouter/src/Layout.jsx'
import About from '../../07reactRouter/src/Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
     {
      path: "",
      element: <Home />
     },
     {
       path: "about",
       element: <About />
     }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router= {router} />
  </StrictMode>,
)
