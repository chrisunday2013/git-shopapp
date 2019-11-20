import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './vatby.css';

class Vatside extends Component{

  render(){
    return(
    <div>
      <div class="wrapper">

<nav id="sidebar">
    <div class="sidebar-header">
    
        <ul>
          <li><Link to="daspage">DASHBOARD</Link></li>
        </ul>
    </div>
    <br/>

    <ul class="list-unstyled components">
        <li class="active">
            <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false"
             class="dropdown-toggle text-warning"><i class="fas fa-shopping-bag pr-4 text-primary"></i>Products</a>
            <ul class="collapse list-unstyled" id="productSubmenu">
                <li>
                    <Link to="prodypage">Add Products</Link>
                </li>
                <li>
                    <a href="#">Add Stocks</a>
                </li>
            </ul>
        </li>
        <br/>

        <li>
          <a href="#userSubmenu" data-toggle="collapse" aria-expanded="false" 
          class="dropdown-toggle text-warning"><i class="fas fa-hand-pointer pr-4 text-primary"></i>Users</a>
          <ul class="collapse list-unstyled" id="userSubmenu">
              <li>
                  <Link to="usapage">Add Staff</Link>
              </li>
              <li>
                  <a href="#">View Staff List</a>
              </li>
          </ul>
      </li>. 
      <br/>
      
      <li>
        <a href="#customerSubmenu" data-toggle="collapse" aria-expanded="false"
         class="dropdown-toggle text-warning"><i class="fas fa-people-carry pr-4 text-primary"></i>Customers</a>
        <ul class="collapse list-unstyled" id="customerSubmenu">
            <li>
                <Link to="cusmypage">Add Customers</Link>
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
      <Link to="login" class="text-warning"><i class="fas fa-sign-out-alt pr-4 text-primary "></i>Logout</Link>
    </li>

  </ul>
      

</nav>

</div>
 
    </div>



    
    )
  }



}

export default Vatside;