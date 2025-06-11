 import React from 'react'
 import { Outlet } from 'react-router-dom';
    import Nav from './Nav'
    import Footer from './Footer'

 
 const Layout = () => {
   return (
     <div>
       <Nav/>
       <main className="main-content">
         <Outlet />
       </main>
       <Footer />

     </div>
   )
 }
 
 export default Layout
 







 



 