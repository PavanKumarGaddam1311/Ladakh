import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">BripSphere</h1>
        <nav>
          <ul>
            <li>
              <Link to="/discover">Discover</Link> {/* Use Link component for navigation */}
            </li>
            <li>
              <Link to="/services">Services</Link> {/* Use Link component */}
            </li>
            <li>
              <Link to="/about">About Us</Link> {/* Use Link component */}
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
