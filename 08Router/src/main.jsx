import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About.jsx'
import Home from './Components/Home/Home.jsx'
import Layout from './Layout.jsx'
import Contact from './Components/Contacts/Contact.jsx'
import User from  './Components/User/User.jsx'

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
     },
     {
       path: "contact",
       element: <Contact />
     }, 
     {
       path: "user/:userid",
       element: <User />
     },
    ]
  }
])
// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path='/' element={<Layout/>}>
//       <Route path='' elements={<Home/>}/>
//       <Route path='about' elements={<About/>}/>
//       <Route path='contact' elements={<Contact/>}/>

//     </Route>
//   )
// )

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <RouterProvider router= {router} />
  </StrictMode>,
)
