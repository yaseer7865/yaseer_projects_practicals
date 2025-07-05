import React from 'react';
import { Container } from 'react-bootstrap';

const ErrorPage = () => {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
      <Container className="mt-4 d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: 800 }}>
        <h1 style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
        <h2 style={{ marginBottom: '1rem' }}>User Not Found</h2>
        <p>The user you are looking for does not exist or an error occurred while fetching user data from the backend.</p>
      </Container>
    </div>
  );
};

export default ErrorPage;