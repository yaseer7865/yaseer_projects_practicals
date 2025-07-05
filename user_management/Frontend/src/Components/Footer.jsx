import React from "react";
import "./style.css";

const Footer = () => {
  return (
    <footer className="container-fluid p-3 fixed-bottom text-center bg-dark text-white">
      <div className="row justify-content-center align-items-center g-2">
        <div className="col">
          2025 &copy; User Management System &mdash; All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
