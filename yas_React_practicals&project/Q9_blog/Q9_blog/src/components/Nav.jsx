import React from 'react'
import { Link } from 'react-router-dom'; 

const Nav = () => {
  return (


    <nav
        className="navbar navbar-expand-md navbar-dark bg-dark fixed-top"
    >
        <div className="container">
            <Link className="navbar-brand" to="/" >
            
            <img src="data:image/jpeg;base64,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"
            className="me-2" style={{ width: '40px', height: '40px' }}
             alt="" />
            
            YASEER_BLOGS</Link>
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
                        <Link className="nav-link " to="/" aria-current="page"
                            >Home
                            <span className="visually-hidden">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/blogs">Blog Lists</Link>
                    </li>
                   
                </ul>
               
            </div>
        </div>
    </nav>
    






   
  )
}

export default Nav
