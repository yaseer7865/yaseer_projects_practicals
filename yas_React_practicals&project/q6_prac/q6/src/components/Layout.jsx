 import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { Outlet } from 'react-router-dom';




 
 const Layout = () => {
   return (
     <div>
         <Navbar />
      <main className="main-content">
        <Outlet />
      </main>
      <Footer />
     </div>
   )
 }
 
 export default Layout
 