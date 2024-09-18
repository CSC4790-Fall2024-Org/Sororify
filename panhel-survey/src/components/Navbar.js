import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';
import { useState } from 'react';

export const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

    return (
        <nav className="navbar">
            <NavLink to="/"> <img src={logo} alt="Logo" className="navbar-logo"/></NavLink >
      <div className="dropdown">
        <button onClick={toggleDropdown} className="dropbtn">Member Surveys</button>
        {dropdownOpen && (
          <div className="dropdown-content">
            <NavLink to="/PNMSurvey" className="dropdown-item">PNM Survey</NavLink>
            <NavLink to="/MemberSurvey" className="dropdown-item">AXO</NavLink>
            <NavLink to="/AGDSurvey" className="dropdown-item">AGD</NavLink>
          </div>
        )}
      </div>
      <NavLink to="/InfoPage" className="nav-link">Info Page</NavLink>
        </nav>
    );
}