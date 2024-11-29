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
                <NavLink to="/PNMSurvey" className="nav-link">PNM Survey</NavLink>
                </>
              )}
                
                {user.role === 'member' && (
                  <>
                    {user.chapter === 'axo' && <NavLink to="/AXOSurvey" className="nav-link">AXO</NavLink>}
                    {user.chapter === 'aphi' && <NavLink to="/APHISurvey" className="nav-link">APHI</NavLink>}
                    {user.chapter === 'xo' && <NavLink to="/XOSurvey" className="nav-link">XO</NavLink>}
                    {user.chapter === 'ddd' && <NavLink to="/DDDSurvey" className="nav-link">DDD</NavLink>}
                    {user.chapter === 'dg' && <NavLink to="/DGSurvey" className="nav-link">DG</NavLink>}
                    {user.chapter === 'kd' && <NavLink to="/KDSurvey" className="nav-link">KD</NavLink>}
                    {user.chapter === 'kkg' && <NavLink to="/KKGSurvey" className="nav-link">KKG</NavLink>}
                  </>)}
                  {user.role === 'chair' && (
                  <>
                  {user.chapter === 'axo' && <NavLink to="/AXOInfoPage" className="nav-link">AXO Info</NavLink>}
                  {user.chapter === 'aphi' && <NavLink to="/APHIInfoPage" className="nav-link">APHI Info</NavLink>}
                  {user.chapter === 'xo' && <NavLink to="/XOInfoPage" className="nav-link">XO Info</NavLink>}
                  {user.chapter === 'ddd' && <NavLink to="/DDDInfoPage" className="nav-link">DDD Info</NavLink>}
                  {user.chapter === 'dg' && <NavLink to="/DGInfoPage" className="nav-link">DG Info</NavLink>}
                  {user.chapter === 'kd' && <NavLink to="/KDInfoPage" className="nav-link">KD Info</NavLink>}
                  {user.chapter === 'kkg' && <NavLink to="/KKGInfoPage" className="nav-link">KKG Info</NavLink>}
                  {user.chapter === 'kd' && <NavLink to="/Results" className="nav-link">KD Results</NavLink>}
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
              <li><NavLink to="/Dashboard" className="nav-link">Dashboard</NavLink></li>
            </>
          )}
          </ul>
    </nav>
    );
}