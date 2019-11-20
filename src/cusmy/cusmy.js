import React, {Component} from 'react';
import './cusmy.css';

class Cusmy extends Component{

  render(){
    return(
    <div>
      <div class="customer mx-auto">
             <div class="form-group border border-primary p-5 w-200 ml-80 bg-secondary justify-content-center">
                    <h3 class="text-center">CUSTOMER INFO</h3>
                 
                    <label for="">Phone</label><br/>
                    <input id="name" type="text"  placeholder="Phone No" class="form-control form-control-sm"/>
      
                    <label for="">FullName</label><br/>
                    <input id="name" type="text"  placeholder="Full Name" class="form-control form-control-sm"/>
      
                   <label for="">BirthDay</label><br/>
                   <input id="name" type="text"  placeholder="Birth Day" class="form-control form-control-sm"/>
                   <br/>
                   <button type="submit" class="btn btn-danger">SUBMIT</button>

                 
              </div>
        </div> 
        
    </div>



    
    )
  }



}

export default Cusmy;