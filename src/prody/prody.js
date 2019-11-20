import React, {Component} from 'react';
import './prody.css';

class Prody extends Component{

  render(){
    return(
       
      <div class="product mx-auto">
              <div class="form-group border border-primary p-2 w-200 ml-80 bg-secondary justify-content-center">
                        <h3 class="text-center">PRODUCT INFORMATIONS</h3>
              
                          <div class="form-row">
                                   <div class="form-group col-md-6">
                                    
                                        <input id="O" type="text" placeholder="OS" list="OS" class="form-control form-control-sm"/>
                                         <datalist id="OS">
                                               <option value="123"/>
                                               <option value="456"/>
                                               <option value="789"/>
                                         </datalist>
                                    </div>
                                    <div class="form-group col-md-6">
                                        
                                         <input id="color" type="text" placeholder="Color" list="Color" class="form-control form-control-sm"/>
                                         <datalist id="Color">
                                                <option value="White"/>
                                                <option value="Black"/>
                                                <option value="Red"/>
                                         </datalist>
                                     </div>
                            </div>

                                        
                                          <input id="Bra" type="text" placeholder="Brand" list="Brand" class="form-control form-control-sm"/>
                                          <datalist id="Brand">
                                                <option value="Samsung"/>
                                                <option value="Nokia"/>
                                                <option value="Tecno"/>
                                          </datalist>
                                          <br/>

                             <div class="form-row">
                                      <div class="form-group col-md-6">
                                           
                                           <input id="name" type="text"  placeholder="ProductName" class="form-control form-control-sm"/>
                                      </div>
                                      <div class="form-group col-md-6">
                                    
                                           <input id="name" type="text"  placeholder="Ram Specs" class="form-control form-control-sm"/>
                                      </div>
                               </div>


                               <div class="form-row">
                                       <div class="form-group col-md-6">
                                        
                                            <input id="name" type="text"  placeholder="RDM Specs" class="form-control form-control-sm"/>
                                       </div>
                   
                                       <div class="form-group col-md-6">
                                          
                                            <input id="name" type="text"  placeholder="Year Of Make" class="form-control form-control-sm"/>
                                       </div>
                              </div>

                              <div class="form-row">
                                       <div class="form-group col-md-6">
                                          
                                       <input id="name" type="text"  placeholder="Network Info" class="form-control form-control-sm"/>
                                       </div>

                                       <div class="form-group col-md-6">
                                       
                                       <input id="name" type="text"  placeholder="Model" class="form-control form-control-sm"/>
                                       </div>
                              </div>

                              <div class="form-row">
                                        <div class="form-group col-md-6">
                                      
                                        <input id="name" type="text"  placeholder="Serial No" class="form-control form-control-sm"/>
                                        </div>
                                        <div class="form-group col-md-6">
                                        
                                        <input id="name" type="text"  placeholder="IMEI No" class="form-control form-control-sm"/>
                                        </div>
                              </div>
                            
                                <input id="name" type="text"  placeholder="Camera Specs" class="form-control form-control-sm"/>
                                <br/>
                                <button type="submit" class="btn btn-danger">SUBMIT</button>
                                



          </div>
      </div>
    
    )
  }



}

export default Prody;