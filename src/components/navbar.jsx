import React, { Component } from 'react'

//stateless component
const NavBar = props => {
  console.log("NavBar - Rendered");
  return (
    <nav className="navbar navbar-light bg-info">
    <a class="navbar-brand" href="#">
    Navbar{""} 
    <span className="badge badge-danger">
    {props.totalCounters}
    </span>
    </a>
    </nav>


    ); 
  };

 
export default NavBar ;