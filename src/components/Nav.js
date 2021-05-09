import React from 'react'

const Nav = () => {
  return <>
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <a className="navbar-item" href="https://baucebrothers.com/">
          <img src="https://cdn.shopify.com/s/files/1/0306/1016/1723/files/Untitled_design_ec5fbb2b-e6e7-4e51-a83c-c931e846c813.png?v=1614787967" />
        </a>
        <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </a>
      </div>
      <div id="navbarBasicExample" className="navbar-menu">
        <div className="navbar-start">
          <div className="navbar-item">
            <p className="subtitle">Welcome, Bauce Brothers</p>
          </div>
        </div>
        <div className="navbar-end">
          <div className="navbar-item">
            <div className="buttons">
              <a className="button is-medium ">
                <strong >sauce. </strong>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </>
}

export default Nav