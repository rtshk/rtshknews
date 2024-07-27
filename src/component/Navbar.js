import { Link } from 'react-router-dom'
import React from 'react'

export default function Navbar(props) {
  return (
    <><nav className={`navbar navbar-expand-lg sticky-top navbar-white bg-white shadow p-3 mb-5  rounded`}>
    <div className="container-fluid">
        <Link className="navbar-brand mx-3" to="/">rthsk News</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item mx-2"><Link className = "nav-link" to = "/">General</Link> </li>
        <li className="nav-item mx-2"><Link className = "nav-link" to = "/entertainment">Entertainment</Link></li>
        <li className="nav-item mx-2"><Link className = "nav-link" to = "/business">Business</Link></li>
        <li className="nav-item mx-2"><Link className = "nav-link" to = "/science">Science</Link></li>
        <li className="nav-item mx-2"><Link className = "nav-link" to = "/sports">Sports</Link></li>
        <li className="nav-item mx-2"><Link className = "nav-link" to = "/technology">Technology</Link></li>
        </ul>
        <div className="form-check form-switch">
    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.handleMode}/>
    <label className="form-check-label" htmlFor="flexSwitchCheckDefault" ><b>Dark </b></label>
  </div>
    </div>
</nav></>
  )
}
