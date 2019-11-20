import React, { Component } from 'react'
import Usa from './usa';
import Vattop from '../vatby/vattop';
import Vatside from '../vatby/vatside';


class Usapage extends Component{

  render() {
    return (
      <div className="container-fluid"> 
                     <div className="row">
                          <div className="col-md-12 removepadding" >
                              <Vattop/>
                           </div>
                

                     
                          <div className="col-md-2">
                              <Vatside/>
                          </div>
                          <div className="col-md-10">
                               <Usa/>
                          </div>
                     </div>
      </div>  


    )
  }
}

export default Usapage;