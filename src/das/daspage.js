import React, { Component } from 'react'
import Das from './das';
import Vattop from '../vatby/vattop';
import Vatside from '../vatby/vatside';


class Daspage extends Component{

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
                               <Das/>
                          </div>
                     </div>
      </div>  


    )
  }
}

export default Daspage;