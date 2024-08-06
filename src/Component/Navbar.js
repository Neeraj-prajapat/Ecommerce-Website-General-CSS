import React, {useState} from "react";
import {Link} from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

export default function Navbar() {

  const [isActive, setIsActive] = useState(false);

  const handleToggle = () => {
    setIsActive(!isActive);
  };




  return (
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <span className="navbar-brand">
            <img src='./images/logo.png' alt="logo img" />
          </span>
          <button 
            className={`navbar-toggler ${isActive ? 'active' : ''}`} 
            type="button" 
            data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" 
            aria-controls="navbarSupportedContent" 
            aria-expanded={isActive ? "true" : "false"} 
            aria-label="Toggle navigation"
            onClick={handleToggle}
           >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${isActive ? 'show' : ''}`} id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">About</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link bg-primary ms-1 me-2 rounded-3 px-3" to="/products">Login in</Link>
                </li>
                <li className="nav-item me-5">
                  <Link className="nav-link position-relative" to="/cart">
                  <FiShoppingCart  className='cart-trolley' style={{ fontSize: '24px' }}/>
                  <span className="position-absolute  left-0 translate-middle  badge rounded-pill bg-primary" >
                  2+
                  </span>
                  </Link>
                </li>
              </ul>
          </div>
        </div>
      </nav>
  )
}
