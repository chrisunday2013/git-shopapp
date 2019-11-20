import React from 'react';
import '../style.css';


function nav() {
  return( 
  <div className="container-fluid naav">
    <nav className="col-md-9">
      <nav className="navbar navbar-expand-lg navbar-light">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse navy" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                  <li className="nav-item">
                      <a className="nav-link" href="#home">Home</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#work">Work</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#services">Service</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#about">About</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#blog">Blog</a>
                  </li>
                  <li className="nav-item">
                      <a className="nav-link" href="#contact">Contact</a>
                  </li>
              </ul>
          </div>
      </nav>
    </nav>
</div>
  
  )
}
export default nav;