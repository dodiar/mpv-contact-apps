import React from "react";
import {Link} from "react-router-dom";

export default function Navbar() {
    return (
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
      <div className='container-fluid'>
        <Link to='/' className='navbar-brand'>Contacs Apps</Link>
        <button type='button' className='navbar-toggler' data-bs-toggle='collapse' 
        data-bs-target='#navbarNav' aria-controls='navbarNav' 
        aria-expanded='false' aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse justify-content-between' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <Link to="/" className='nav-link'>All Contact</Link>
            </li>
            <li className='nav-item'>
              <Link to="/detail" className='nav-link'>Detail</Link>
            </li>
            <li className='nav-item'>
              <Link to="/category" className='nav-link'>Category</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    );
}