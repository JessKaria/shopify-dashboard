import React, { useEffect, useState } from 'react'
import axios from 'axios'


const Nav = () => {


  return <>
<nav className="navbar is-black">
  <div className="container">
    <div className="navbar-brand">
      <a className="navbar-item" href="#">
        <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" alt="Logo" />
      </a>
      <span className="navbar-burger burger" data-target="navbarMenu">
        <span />
        <span />
        <span />
      </span>
    </div>
    <div id="navbarMenu" className="navbar-menu">
      <div className="navbar-end">
        <a className="navbar-item is-active">
          Home
        </a>
        <a className="navbar-item">
          Examples
        </a>
        <a className="navbar-item">
          Features
        </a>
        <a className="navbar-item">
          Team
        </a>
        <a className="navbar-item">
          Archives
        </a>
        <a className="navbar-item">
          Help
        </a>
      </div>
    </div>
  </div>
</nav>


</>


}

export default Nav