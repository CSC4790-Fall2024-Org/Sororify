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
            <NavLink to="/AXOSurvey" className="dropdown-item">AXO</NavLink>
            <NavLink to="/AGDSurvey" className="dropdown-item">AGD</NavLink>
            <NavLink to="/APHISurvey" className="dropdown-item">APHI</NavLink>
            <NavLink to="/XOSurvey" className="dropdown-item">XO</NavLink>
            <NavLink to="/DDDSurvey" className="dropdown-item">DDD</NavLink>
            <NavLink to="/DGSurvey" className="dropdown-item">DG</NavLink>
            <NavLink to="/KDSurvey" className="dropdown-item">KD</NavLink>
            <NavLink to="/KKGSurvey" className="dropdown-item">KKG</NavLink>
            

          </div>
        )}
      </div>
      <NavLink to="/InfoPage" className="nav-link">Info Page</NavLink>
      <NavLink to="/Results" className="nav-link">Results</NavLink>
        </nav>
    );
}