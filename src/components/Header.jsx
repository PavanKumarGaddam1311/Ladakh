import React from "react";

const Header = () => {
  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">BripSphere</h1>
        <nav>
          <ul>
            <li>
              <a href="discover"> Discover </a>
            </li>
            <li>
              <a href="services">Services</a>
            </li>
            <li>
              <a href="about">About Us</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
