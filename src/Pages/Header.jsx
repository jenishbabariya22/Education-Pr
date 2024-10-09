// Header.js
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark mb-4" style={{ backgroundColor: '#343a40' }}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Education Management System</Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Admin Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/teacher">Teacher Dashboard</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/student">Student Dashboard</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
