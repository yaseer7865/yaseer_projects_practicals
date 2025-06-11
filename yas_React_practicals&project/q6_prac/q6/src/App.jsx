import { useState } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NotFound from './components/NotFound'; 

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  const Routes= createBrowserRouter([
    {
     path:'/', 
     element:<Layout/>,
     errorElement:<NotFound/>,
     children:[
      {index:true,element:<Home/> },
      { path: 'about', element: <About /> },
      {path:'contact',element:<Contact/>}
     ]
    }
   ])

  return (
    <>
        <RouterProvider router={Routes}/>
    </>
  )
}

export default App
