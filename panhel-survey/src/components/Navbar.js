import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png';
import { useEffect, useContext } from 'react';
import { AuthContext } from './pages/AuthContext';


export const Navbar = () => {
    const { user, signOut } = useContext(AuthContext);


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
      <ul className="navbar-menu">
      {user ? (
            <>
              <li className="navbar-item" style={{ fontFamily: 'Georgia, serif', color: '#F94EA0' }}>
              Welcome, {user.username} !
              </li>
              <li className="navbar-item">
                
                <div>
                {user.role === 'pnm' && (
                <>
                <NavLink to="/PNMSurvey" className="dropdown-item">PNM Survey</NavLink>
                </>
              )}
                
                {user.role === 'member' && (
                  <>
                    {user.chapter === 'axo' && <NavLink to="/AXOSurvey" className="dropdown-item">AXO</NavLink>}
                    {user.chapter === 'aphi' && <NavLink to="/APHISurvey" className="dropdown-item">APHI</NavLink>}
                    {user.chapter === 'xo' && <NavLink to="/XOSurvey" className="dropdown-item">XO</NavLink>}
                    {user.chapter === 'ddd' && <NavLink to="/DDDSurvey" className="dropdown-item">DDD</NavLink>}
                    {user.chapter === 'dg' && <NavLink to="/DGSurvey" className="dropdown-item">DG</NavLink>}
                    {user.chapter === 'kd' && <NavLink to="/KDSurvey" className="dropdown-item">KD</NavLink>}
                    {user.chapter === 'kkg' && <NavLink to="/KKGSurvey" className="dropdown-item">KKG</NavLink>}
                  </>)}
                  {user.role === 'chair' && (
                  <>
                  {user.chapter === 'axo' && <NavLink to="/AXOInfoPage" className="dropdown-item">AXO Info</NavLink>}
                  {user.chapter === 'aphi' && <NavLink to="/APHIInfoPage" className="dropdown-item">APHI Info</NavLink>}
                  {user.chapter === 'xo' && <NavLink to="/XOInfoPage" className="dropdown-item">XO Info</NavLink>}
                  {user.chapter === 'ddd' && <NavLink to="/DDDInfoPage" className="dropdown-item">DDD Info</NavLink>}
                  {user.chapter === 'dg' && <NavLink to="/DGInfoPage" className="dropdown-item">DG Info</NavLink>}
                  {user.chapter === 'kd' && <NavLink to="/KDInfoPage" className="dropdown-item">KD Info</NavLink>}
                  {user.chapter === 'kkg' && <NavLink to="/KKGInfoPage" className="dropdown-item">KKG Info</NavLink>}
                  {user.chapter === 'kd' && <NavLink to="/Results" className="dropdown-item">KD Results</NavLink>}
                  </>
                )}
              </div>
                
              </li>
    
              
              <li><button onClick={signOut} className="nav-link">Logout</button></li>
            </>
          ) : (
            <>

              <li><NavLink to="/Results" className="nav-link">Results</NavLink></li>
              <li><NavLink to="/SignUp" className="nav-link">Sign Up</NavLink></li>
              <li><NavLink to="/SignIn" className="nav-link">Sign In</NavLink></li>
            </>
          )}
          </ul>
    </nav>
    );
}