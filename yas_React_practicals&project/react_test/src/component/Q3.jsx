import React, { useState } from 'react';

const Q3 = () => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div style={{ background: darkMode ? '#333' : '#fff', color: darkMode ? '#fff' : '#000', padding: '20px', textAlign: 'center' }}>
      <h2>{darkMode ? 'Dark Mode' : 'Light Mode'}</h2>
      <button onClick={() => setDarkMode(!darkMode)}>
        Switch to {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default Q3;