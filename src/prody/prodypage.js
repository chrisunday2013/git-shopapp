import React, { Component } from 'react'
import Prody from './prody';
import Vattop from '../vatby/vattop';
import Vatside from '../vatby/vatside';


class Prodypage extends Component{

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
                               <Prody/>
                          </div>
                     </div>
      </div>  


    )
  }
}

export default Prodypage;