import React, { useState } from 'react';

const Q5 = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h2>{isAdmin ? 'Admin Dashboard' : 'User Dashboard'}</h2>
      <p>{isAdmin ? 'Full access granted.' : 'Limited access granted.'}</p>
      <button onClick={() => setIsAdmin(!isAdmin)}>
        Switch to {isAdmin ? 'User' : 'Admin'}
      </button>
    </div>
  );
};

export default Q5;