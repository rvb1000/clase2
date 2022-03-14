import React from 'react'
import {link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
  <a class="navbar-brand" href="#">
      <img src="./LogoAppelle.svg" alt="" width="60" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">Inicio</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Opcion 1</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Opcion 2</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar