import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    inquiryType: '',
    message: '',
  });
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message && formData.phone && formData.subject && formData.inquiryType) {
      console.log('Form Data:', formData);
      setSuccessMessage('Message sent successfully!');
      setErrorMessage('');
      setFormData({ name: '', email: '', phone: '', subject: '', inquiryType: '', message: '' });
    } else {
      setErrorMessage('Please fill out all fields.');
      setSuccessMessage('');
    }
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-10"> {/* Expanded column width */}
          <div className="card shadow-lg">
            <div className="card-header bg-primary text-white text-center">
              <h2>Contact Me</h2>
            </div>
            <div className="card-body">
              {successMessage && <div className="alert alert-success">{successMessage}</div>}
              {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
              <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label htmlFor="phone" className="form-label">Phone Number</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      required
                    />
                  </div>
                  <div className="col-md-6 mb-3">
                    <label htmlFor="subject" className="form-label">Subject</label>
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Enter the subject"
                      required
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="inquiryType" className="form-label">Inquiry Type</label>
                  <select
                    className="form-select"
                    id="inquiryType"
                    name="inquiryType"
                    value={formData.inquiryType}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select Inquiry Type</option>
                    <option value="general">General Inquiry</option>
                    <option value="feedback">Feedback</option>
                    <option value="support">Support</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea
                    className="form-control"
                    id="message"
                    name="message"
                    rows="4"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Write your message here"
                    required
                  ></textarea>
                </div>
                <div className="text-center">
                  <button type="submit" className="btn btn-primary btn-lg w-100">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;