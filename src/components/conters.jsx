import React, { Component } from 'react';
import Counter from "./counter";


class Conters extends Component {
  
  render() { 
    console.log('Counters - Rendered');
    
    return (
    <div>
      <button 
      onClick={this.props.onReset}
      className = "btn btn-primary btn-sm m-2">Reset</button>
     {this.props.conters.map(cont => (
       <Counter 
         key={cont.id}
         onDelete={this.props.onDelete}
         onIncrement={this.props.onIncrement}
         cont= {cont} 
 
       />
       ))}
    </div>  
    );
  }
}
 
export default Conters ;



