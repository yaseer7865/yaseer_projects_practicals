import React from 'react';

const Hero = () => {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: "url('https://th.bing.com/th?q=Background+Image+for+the+Portfolio+in+It+Industry&w=120&h=120&c=1&rs=1&qlt=90&cb=1&pid=InlineBlock&mkt=en-IN&cc=IN&setlang=en&adlt=moderate&t=1&mw=247')",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: '100%',
        height: '100vh',
        margin: 0,
        padding: 0,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        color: 'white',
        overflow: 'hidden', // Ensures no overflow issues
      }}
    >
      {/* Gradient Overlay */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0, 0, 0, 0.6)', // Dark overlay
          zIndex: 1,
        }}
      ></div>

      {/* Content */}
      <div
        style={{
          zIndex: 2,
          textAlign: 'center',
          maxWidth: '800px',
          padding: '0 20px',
        }}
      >
        <h1
          style={{
            fontSize: '3rem',
            fontWeight: 'bold',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.7)',
          }}
        >
          Welcome to My Portfolio
        </h1>
        <p
          className="lead"
          style={{
            fontSize: '1.5rem',
            margin: '20px 0',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)',
          }}
        >
          I am a Web Developer passionate about building amazing websites. My Name Is{' '}
          <strong>Mohammed Yaseer Akhtar Shaikh</strong>.
        </p>
        <a
          href="#projects"
          className="btn btn-primary btn-lg mt-4"
          style={{
            padding: '10px 30px',
            fontSize: '1.2rem',
            borderRadius: '30px',
            boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.3)',
          }}
        >
          View My Work
        </a>
      </div>
    </div>
  );
};

export default Hero;