import React, { useState } from 'react';

const Q4 = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{loggedIn ? 'Welcome!' : 'Please Log In'}</h2>
      <button onClick={() => setLoggedIn(!loggedIn)}>
        {loggedIn ? 'Logout' : 'Login'}
      </button>
    </div>
  );
};

export default Q4;