import React, {Component} from 'react';
import './usa.css';



class Usa extends Component{

  render(){
    return(
        <div>
                  <div class="user mx-auto">
                         <div class="form-group border border-primary p-1 w-200  ml-80 bg-secondary justify-content-center">
                              <h3 class="text-center">USER INFO</h3>

                                      <div class="form-row">
                                             <div class="form-group col-md-6">
                                                    
                                                    <input id="staffType" type="text" placeholder="StaffType" list="StaffType"  class="form-control form-control-sm"/>
                                                    <datalist id="StaffType">
                                                         <option value="Manager"/>
                                                         <option value="SalesRep"/>
                                                         <option value="Supervisor"/>
                                                    </datalist>
                                             </div>
                                             <div class="form-group col-md-6">
                                                    
                                                    <input id="Gender" type="text" placeholder="Gender" list="Gender" class="form-control form-control-sm"/>
                                                    <datalist id="Gender">
                                                          <option value="Male"/>
                                                          <option value="Female"/>
                                                          <option value="Others"/>
                                                    </datalist>
                                              </div>
                                      </div>
                                      
                                               <div>
                                                
                                                      <input id="pos" type="text" placeholder="Position" list="Position" class="form-control form-control-sm"/>
                                                      <datalist id="Position">
                                                           <option value="Supervisor"/>
                                                           <option value="Manager"/>
                                                           <option value="Director"/>
                                                      </datalist>   
                                                </div>
                                                <br/>
                                        <div class="form-row">
                                                <div class="form-group col-md-6">
                                                
                                                       <input id="name" type="text"  placeholder="Phone"  class="form-control form-control-sm"/>
                                                </div>
                                                <div class="form-group col-md-6">
                                                       
                                                       <input id="name" type="email"  placeholder="exampleInputEmail1"  class="form-control form-control-sm"/>
                                                </div>
                                        </div>
                                        <div class="form-row">
                                                  <div class="form-group col-md-6">
                                                
                                                       <input id="name" type="text"  placeholder="Firstname" class="form-control form-control-sm"/>
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                
                                                       <input id="name" type="text"  placeholder="Lastname" class="form-control form-control-sm"/>
                                                  </div>
                                        </div>

                                         <div class="form-row">   
                                                  <div class="form-group col-md-6">
                                                
                                                        <input id="name" type="text"  placeholder="SalaryGrade" class="form-control form-control-sm"/>
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                
                                                         <input id="name" type="text"  placeholder="Guarantor Fullname" class="form-control form-control-sm"/>
                                                  </div>
                                        </div>

                                        <div class="form-row">  
                                                  <div class="form-group col-md-6">
                                                        
                                                          <input id="name" type="text"  placeholder="Guarantor Phone" class="form-control form-control-sm"/>
                                                  </div>
                                                  <div class="form-group col-md-6">
                                                        
                                                          <input id="name" type="text"  placeholder="Guarantor Address" class="form-control form-control-sm"/>
                                                  </div>
                                         </div>
                                        
                                                           <input id="name" type="text"  placeholder="Staff Address" class="form-control form-control-sm"/>
                                                           <br/>
                                                           <button type="submit" class="btn btn-danger">SUBMIT</button>
    
            
                    </div>
         
         </div> 

   </div>
    
    )
  };



}

export default Usa;