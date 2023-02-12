import React from 'react'
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux'
function NavBar() {
  const state = useSelector((state)=>state.AddToCart);
  return (
    <nav className="navbar navbar-expand-lg bg-light">
  <div className="container">
    <Link className="navbar-brand" to="/"><b>i-Mart</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">Link</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/">Action</Link></li>
            <li><Link className="dropdown-item" to="/">Another action</Link></li>
            <li><hr className="dropdown-divider"/></li>
            <li><Link className="dropdown-item" to="/">Something else here</Link></li>
          </ul>
        </li>
        <li className="nav-item">
          <Link className="nav-link disabled">Disabled</Link>
        </li>
      </ul>
      <Link to="/cart">
        <i className="fa-solid fa-cart-shopping position-relative" style={{fontSize:'1.5em'}}>
          <span style={{fontSize:'0.05em'}} class="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
          <span style={{fontSize:'8em',color:'white'}}>{state.length}</span>
          </span>
        </i>
        </Link>
    </div>
  </div>
</nav>
  )
}

export default NavBar