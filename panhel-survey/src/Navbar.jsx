import { useState } from 'react'
import  styles from './Navbar.module.css';

function Navbar() {
    
    return (
        <ul>
            <li><a href="/pnmsurvey">PNM Survey</a></li>
            <li><a href="/memsurvey">Member Survey</a></li>
        </ul>
    );
  }
  export default Navbar;
  ;