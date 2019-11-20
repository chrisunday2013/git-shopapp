import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './vatby.css';

class Vatby extends Component{

  render(){
    return(
    <div>
        <div class="head border border-info pt-1 bg-info">
        <div class="logo pt-3">
            <h1>LOGO</h1>
        </div>
        <div class="menu">
                <ul>
                    <li><a href="#"><i class="fas fa-bell fa-2x pt-1 text-light"></i></a></li>
                    <li><a href="#"><i class="fas fa-shopping-cart fa-2x pt-1 text-warning"></i></a></li>
                    <li><a href="#"><i class="fas fa-circle fa-3x pt-0.1 pr-0.5 "></i></a></li>
                    
                </ul>
        </div>
    </div>

    
  <div class="wrapper">

    <nav id="sidebar">
        <div class="sidebar-header">
          <h5>Dashboard</h5>
        </div>
        <br/>

        <ul class="list-unstyled components">
            <li class="active">
                <Link to="prodySubmenu" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle text-warning"><i class="fas fa-shopping-bag pr-4 text-primary"></i>Products</Link>
                <ul class="collapse list-unstyled" id="prody">
                    <li>
                        <a href="#">Add Products</a>
                    </li>
                    <li>
                        <a href="#">Add Stocks</a>
                    </li>
                </ul>
            </li>
            <br/>

            <li>
              <Link to="usa" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle text-warning"><i class="fas fa-hand-pointer pr-4 text-primary"></i>Users</Link>
              <ul class="collapse list-unstyled" id="userSubmenu">
                  <li>
                      <a href="#">Add Staff</a>
                  </li>
                  <li>
                      <a href="#">View Staff List</a>
                  </li>
              </ul>
          </li>
          <br/>
          
          <li>
            <Link to="cusmy" data-toggle="collapse" aria-expanded="false" class="dropdown-toggle text-warning"><i class="fas fa-people-carry pr-4 text-primary"></i>Customers</Link>
            <ul class="collapse list-unstyled" id="customerSubmenu">
                <li>
                    <a href="#">Add Customers</a>
                </li>
                <li>
                    <a href="#">View Customer List</a>
                </li>
            </ul>
        </li>
        <br/>
        <br/>
        <br/>
        <br/>
        <li>
          <a href="#" class="text-warning"><i class="fas fa-sign-out-alt pr-4 text-primary "></i>Logout</a>
        </li>

      </ul>
          
    
    </nav>

</div>
           
      
        
    </div>



    
    )
  }



}

export default Vatby;