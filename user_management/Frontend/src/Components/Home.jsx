import React from 'react';
import { Container } from 'react-bootstrap';

const Home = () => {
  return (
    <div style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#f8f9fa' }}>
      <Container className="mt-4 d-flex flex-column align-items-center justify-content-center" style={{ maxWidth: 800 }}>
        <div className="text-center">
          <h2>Welcome to the User Management System</h2>
          <p>Manage your users efficiently and securely.</p>
        </div>
        <div className="mt-5 p-4 bg-light rounded shadow-sm">
          <h4>About Our User Management System</h4>
          <p>
            Our User Management System is designed to streamline your workflow and make managing users simple and effective. Easily add, update, and track your users in one place. Enjoy features like real-time updates, intuitive dashboards, and secure data management. Whether you are a small business or a large enterprise, our system adapts to your needs and helps you stay organized and productive.
          </p>
          <ul className="text-start d-inline-block">
            <li>Easy user addition and editing</li>
            <li>Comprehensive user tracking</li>
            <li>Modern, user-friendly interface</li>
            <li>Secure and reliable data storage</li>
            <li>Responsive support and regular updates</li>
          </ul>
        </div>
      </Container>
    </div>
  );
};

export default Home;
