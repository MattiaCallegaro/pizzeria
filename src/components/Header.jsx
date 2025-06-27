import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg " style={{ backgroundColor: '#F1E1C7' }}>
      <div className="container-fluid d-flex flex-column align-items-center">
        <div className="d-flex justify-content-center align-items-center w-100">
          <NavLink className="navbar-brand mx-3 " to="/"> <img src="\pizza-logo.png"
            alt="logo"
            className="d-block mx-auto"
            style={{ width: '15%', height: 'auto' }} /></NavLink>
          <button className="navbar-toggler ms-auto" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/"><h5>Home</h5></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/Menu"><h5>Menu</h5></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header;
