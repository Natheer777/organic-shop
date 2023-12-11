import React from 'react'

import { FaUserAlt } from "react-icons/fa";

import logo from '../../assets/image/organic-store-logo5.svg'

import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<div>

<nav className="navbar navbar-expand-lg navbar-light">
  <Link className="navbar-brand" to="/">
    <img className='logo' src={logo} alt="" />
  </Link>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse ms-3" id="navbarNavAltMarkup">
    <div className="navbar-nav ms-3">
      <Link to='/Everything' className="nav-item nav-link Link active Everything">Everything</Link>
      <a className="nav-item nav-link" href="/#">Groceries</a>
      <a className="nav-item nav-link" href="/#">Juice</a>
    </div>
      <div className='navbar-nav difrrens ms-3'>
      <a className="nav-item nav-link" href="/#">About </a>
      <a className="nav-item nav-link" href="/#"> Contact</a>
      <a className="total nav-item nav-link fw-bold" href="/#">0.00 &#8364;</a>
      <a className="nav-item nav-link ms-4" href="/#"><FaUserAlt/></a>
      
      </div>
  </div>
</nav>
   
</div>
    )
}

export default Header