import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-dark text-dark text-center py-3 mt-4" style={{ width: '100%', position: 'fixed', bottom: '0' }}>
      <div className="container">
        <p className="mb-0">© 2025 My Website. All Rights Reserved.</p>
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
  )
}

export default Footer
