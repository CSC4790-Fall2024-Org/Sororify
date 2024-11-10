import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';
import { useState } from 'react';

export const Navbar = () => {
  const [memberDropdownOpen, setMemberDropdownOpen] = useState(false);
  const [infoDropdownOpen, setInfoDropdownOpen] = useState(false);

  const toggleMemberDropdown = () => {
    setMemberDropdownOpen(!memberDropdownOpen);
  };

  const toggleInfoDropdown = () => {
    setInfoDropdownOpen(!infoDropdownOpen);
  };

    return (
      <div className = "navbar-container">
      <nav className="navbar">
      <div className="navbar-logo-container">
        <NavLink to="/"> 
          <img src={logo} alt="Logo" className="navbar-logo" />
        </NavLink>
      </div>
      <div className="navbar-links">
        <div className="dropdown">
          <button onClick={toggleMemberDropdown} className="dropbtn">MEMBER SURVEY</button>
          {memberDropdownOpen && (
            <div className="dropdown-content">
              <NavLink to="/PNMSurvey" className="dropdown-item">PNM Survey</NavLink>
              <NavLink to="/AXOSurvey" className="dropdown-item">AXO</NavLink>
              <NavLink to="/APHISurvey" className="dropdown-item">APHI</NavLink>
              <NavLink to="/XOSurvey" className="dropdown-item">XO</NavLink>
              <NavLink to="/DDDSurvey" className="dropdown-item">DDD</NavLink>
              <NavLink to="/DGSurvey" className="dropdown-item">DG</NavLink>
              <NavLink to="/KDSurvey" className="dropdown-item">KD</NavLink>
              <NavLink to="/KKGSurvey" className="dropdown-item">KKG</NavLink>
            </div>
          )}
        </div>


        <div className="dropdown">
          <button onClick={toggleInfoDropdown} className="dropbtn">INFO SURVEY</button>
          {infoDropdownOpen && (
            <div className="dropdown-content">
                <NavLink to="/AXOInfoPage" className="dropdown-item">AXO Info</NavLink>
                <NavLink to="/APHIInfoPage" className="dropdown-item">APHI Info</NavLink>
                <NavLink to="/XOInfoPage" className="dropdown-item">XO Info</NavLink>
                <NavLink to ="/DDDInfoPage" className="dropdown-item">DDD Info</NavLink>
                <NavLink to="/DGInfoPage" className="dropdown-item">DG Info</NavLink>
                <NavLink to="/KDInfoPage" className="dropdown-item">KD Info</NavLink>
                <NavLink to="/KKGInfoPage" className="dropdown-item">KKG Info</NavLink>


              
              </div>
          )}
        </div>

        <NavLink to="/Results" className="nav-link">RESULTS</NavLink>
        <NavLink to="/SignUp" className="nav-link">SIGN UP</NavLink>
        <NavLink to="/SignIn" className="nav-link">SIGN IN</NavLink>
      </div>
    </nav>
    </div>

    );
}