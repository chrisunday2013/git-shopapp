import React, { Component } from 'react'
import Expy from './expy';
import Vattop from '../vatby/vattop';
import Vatside from '../vatby/vatside';


class Expypage extends Component{

  render() {
    return (
      <div className="container-fluid"> 
                     <div className="row">
                          <div className="col-md-12" >
                              <Vattop/>
                           </div>
                      </div>

                     <div className="row">
                          <div className="col-md-2">
                              <Vatside/>
                          </div>
                          <div className="col-md-10">
                               <Expy/>
                          </div>
                     </div>
      </div>  


    )
  }
}

export default Expypage;