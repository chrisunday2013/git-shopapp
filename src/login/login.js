import React, {Component} from 'react';
import './login.css';

class Login extends Component{

  render(){
    return(

      <form class="login mx-auto">
      <div class="form-group border border-primary p-5 w-200 ml-80 bg-success justify-content-center">
              <h3 class="text-center">LOGIN HERE</h3>
                         
                          
              
              <label for="">Email</label><br/>
                  <input id="name" type="email"  placeholder="Email@example" class="form-control form-control-sm"/>
              
              <label for="">Password</label><br/>
                  <input id="name" type="password"  placeholder="Password" class="form-control form-control-sm"/>
                  <br/>
                 
              
                  <br/>
                  <button type="submit" class="btn btn-danger">SUBMIT</button>

                         
      </div>
  </form>   

    
    )
  }



}

export default Login;