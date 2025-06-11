// Create a simple card component and apply custom CSS styles to 
// make it visually appealing. 

import React from 'react'
import './Q7.css' 
const Q7 = () => {
  return (
    <div className="card">
    <img
      src="https://th.bing.com/th/id/OIP.anreswUVI-IzeCT24-vFUAHaHa?w=195&h=195&c=7&r=0&o=5&pid=1.7"
      alt="Card Example"
      className="card-img-top"
      style={{ width: '100%', height: 'auto' }}
    />
    <div className="card-body">
      <h3 className="card-title">Yaseer shaikh</h3>
      <p className="card-text">
        This is a simple card component with custom styles.
      </p>
    
    </div>
  </div>
  )
}

export default Q7




