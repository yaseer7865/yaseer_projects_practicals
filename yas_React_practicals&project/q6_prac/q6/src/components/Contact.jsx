import React from 'react';

const Contact = () => (
  <div className="text-center">
    <h1>Contact Us</h1>
    <p className="lead">Feel free to reach out to us using the form below.</p>
    <form className="mt-4">
      <div className="mb-3">
        <input type="text" className="form-control" placeholder="Your Name" />
      </div>
      <div className="mb-3">
        <input type="email" className="form-control" placeholder="Your Email" />
      </div>
      <div className="mb-3">
        <textarea className="form-control" rows="4" placeholder="Your Message"></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Send Message</button>
    </form>
  </div>
);

export default Contact;