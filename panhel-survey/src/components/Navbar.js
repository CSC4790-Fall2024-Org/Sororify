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
              <li className="navbar-item" style={{ fontFamily: 'Poppins, sans-serif', fontSize: '16px', fontWeight: 'bold', color: '#000080' }}>
              Welcome, {user.username} !
              </li>
              <li className="nav-item">
                
                <div>
                {user.role === 'pnm' && (
                <>
                <NavLink to="/PNMSurvey" className="dropdown-item" style={{ textDecoration: 'none' }}>PNM Survey</NavLink>
                </>
              )}
                
                {user.role === 'member' && (
                  <>
                    {user.chapter === 'axo' && <NavLink to="/AXOSurvey" className="dropdown-item" style={{ textDecoration: 'none' }}>AXO Survey</NavLink>}
                    {user.chapter === 'aphi' && <NavLink to="/APHISurvey" className="dropdown-item" style={{ textDecoration: 'none' }}>APHI Survey</NavLink>}
                    {user.chapter === 'xo' && <NavLink to="/XOSurvey" className="dropdown-item" style={{ textDecoration: 'none' }}>XO Survey</NavLink>}
                    {user.chapter === 'ddd' && <NavLink to="/DDDSurvey" className="dropdown-item" style={{ textDecoration: 'none' }}>DDD Survey</NavLink>}
                    {user.chapter === 'dg' && <NavLink to="/DGSurvey" className="dropdown-item" style={{ textDecoration: 'none' }}>DG Survey</NavLink>}
                    {user.chapter === 'kd' && <NavLink to="/KDSurvey" className="dropdown-item" style={{ textDecoration: 'none' }}>KD Survey</NavLink>}
                    {user.chapter === 'kkg' && <NavLink to="/KKGSurvey" className="dropdown-item">KKG Survey</NavLink>}
                  </>
                )}

                {user.role === 'chair' && (
                  <>
                    {user.chapter === 'axo' && <NavLink to="/AXOInfoPage" className="dropdown-item" style={{ textDecoration: 'none' }}>AXO Info</NavLink>}
                    {user.chapter === 'aphi' && <NavLink to="/APHIInfoPage" className="dropdown-item" style={{ textDecoration: 'none' }}>APHI Info</NavLink>}
                    {user.chapter === 'xo' && <NavLink to="/XOInfoPage" className="dropdown-item" style={{ textDecoration: 'none' }}>XO Info</NavLink>}
                    {user.chapter === 'ddd' && <NavLink to ="/DDDInfoPage" className="dropdown-item" style={{ textDecoration: 'none' }}>DDD Info</NavLink>}
                    {user.chapter === 'dg' && <NavLink to="/DGInfoPage" className="dropdown-item" style={{ textDecoration: 'none' }}>DG Info</NavLink>}
                    {user.chapter === 'kd' && <NavLink to="/KDInfoPage" className="dropdown-item" style={{ textDecoration: 'none' }}>KD Info</NavLink>}
                    {user.chapter === 'kkg' && <NavLink to="/KKGInfoPage" className="dropdown-item" style={{ textDecoration: 'none' }}>KKG Info</NavLink>}
                  
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