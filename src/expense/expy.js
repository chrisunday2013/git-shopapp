import React, {Component} from 'react';
import './expy.css';

class Expense extends Component{

  render(){
    return(<div>

      <div className="expense mx-auto">
      <div className="form-group border border-primary p-5 w-200 ml-80 bg-secondary justify-content-center">
              <h3 className="text-center">EXPENSE INFO</h3>
                         
                          
              
              <label for="">Expense</label><br/>
                  <input id="name" type="text"  placeholder="Expense Name" class="form-control form-control-sm"/>
              
              <label for="">Amount</label><br/>
                  <input id="name" type="text"  placeholder="Amount" class="form-control form-control-sm"/>
              
              <label for="">BirthDay</label><br/>
                  <input id="name" type="text"  placeholder="BirthDay" class="form-control form-control-sm"/>
                  <br/>
                  <button type="submit" class="btn btn-danger">SUBMIT</button>

                         
      </div>
  </div> 
  </div>  


    
    )
  }



}

export default Expense;