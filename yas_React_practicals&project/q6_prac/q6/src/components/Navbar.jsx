 import React from 'react'
 import {Link} from 'react-router-dom'
 const Navbar = () => {
   return (
    <div>
    <nav
        className="navbar navbar-expand-sm navbar-dark bg-dark fixed-top">
        <div className="container">
            <a className="navbar-brand" href="#">Yaseer Web</a>
            <button
                className="navbar-toggler d-lg-none"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapsibleNavId"
                aria-controls="collapsibleNavId"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavId">
                <ul className="navbar-nav me-auto mt-2 mt-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link active" to="" aria-current="Home">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="About">About Us</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="Contact">Contact Us</Link>
                    </li>
                </ul>
                
            </div>
        </div>
    </nav>

</div>





   )
 }
 
 export default Navbar
 