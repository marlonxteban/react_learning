import React, { useEffect } from 'react'
import { Link, NavLink, withRouter } from "react-router-dom";
import auth from '../auth';

const Navbar = (props) => {
  const authHandler = () => {
    if (auth.isAuthenticated()) {
      auth.logout(() => {
        props.history.push("/")
      })
    } else {
      auth.login(() => {
        props.history.push("/about")
      })
    }
  }

  const authText = auth.isAuthenticated() ? "Logout" : "Login"
  const authClassName = auth.isAuthenticated() ? "danger": "success"

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Navbar</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <NavLink className="nav-link active" aria-current="page" to="/">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>
          </ul>
        </div>
        <button className={`btn btn-${authClassName} navbar-btn`} onClick={authHandler}>{authText}</button>
      </div>
    </nav>
  )
}

export default withRouter(Navbar)
