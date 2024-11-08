import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';
import { useState, useEffect, useContext } from 'react';
import { AuthContext } from './pages/AuthContext';


export const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const { user, signOut } = useContext(AuthContext);

    const toggleDropdown = () => {
      setDropdownOpen(!dropdownOpen);
    };

    useEffect(() => {
      const handleStorageChange = () => {
        if (!localStorage.getItem('token')) {
          signOut();
        }
      };
  
      window.addEventListener('storage', handleStorageChange);
  
      return () => {
        window.removeEventListener('storage', handleStorageChange);
      };
    }, [signOut]);

    console.log('User in Navbar:', user);
    return (
      <nav className="navbar">
      <NavLink to="/"> <img src={logo} alt="Logo" className="navbar-logo" /></NavLink>
      {user ? (
            <>
              <li style={{ fontFamily: 'Georgia, serif', color: '#F94EA0' }}>Welcome, {user.email}</li>
              <li>
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
              </li>
              <li><NavLink to="/InfoPage" className="nav-link">Info Page</NavLink></li>
              <li><NavLink to="/Results" className="nav-link">Results</NavLink></li>
              <li><button onClick={signOut} className="nav-link">Logout</button></li>
            </>
          ) : (
            <>
              <li><NavLink to="/SignUp" className="nav-link">Sign Up</NavLink></li>
              <li><NavLink to="/SignIn" className="nav-link">Sign In</NavLink></li>
            </>
          )}
    </nav>
    );
}