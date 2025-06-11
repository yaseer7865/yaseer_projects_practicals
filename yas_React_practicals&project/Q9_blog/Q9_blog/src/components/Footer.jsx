import React from 'react'

const Footer = () => {
  return (
  <>
   <footer className="bg-dark text-white text-center py-3 mt-4 fixed-bottom">
      <div className="container">
        <p className="mb-0">© 2025 My Blog. All Rights Reserved.</p>
        <p className="mb-0">
          <a href="https://facebook.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
          |
          <a href="https://twitter.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            Twitter
          </a>
          |
          <a href="https://instagram.com" className="text-white mx-2" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
        </p>
      </div>
    </footer>
  
  
  </>
  
  )
}

export default Footer
