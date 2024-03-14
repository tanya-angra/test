import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div className="container">
        <div className="navbar-brand"><Link className="navbar-item" to="/"><i className="fak fa-mf-logo fa-4x"></i></Link><Link className="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></Link></div>
        <div className="navbar-menu is-shadowless" id="navMenu">
          <div className="navbar-start">
            {/* <img src='./s-name-logo'></img> */}
            Tanya
          </div>
          <div className="navbar-end"><Link className="navbar-item has-text-weight-normal" to="/mentorship">Mentorship</Link>
            <div className="navbar-item"><Link className="button is-primary is-outlined is-rounded has-text-weight-normal" to="/contact">Say Hello </Link></div>
          </div>
        </div>
      </div>
    </nav>
  )
}
