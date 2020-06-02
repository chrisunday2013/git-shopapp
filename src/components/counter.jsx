import React, { Component } from 'react'

class Counter extends Component {
  componentDidUpdate(prevProps, prevState) {
      console.log('prevProps', prevProps);
      console.log('prevState', prevState);
      if (prevProps.cont.value !== this.props.cont.value) {

      }
  }

  componentWillUnmount() {
    console.log('cont - Unmount')
  }

  render() {
    console.log('Counter - Rendered');

    return(
     <div> 
      <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
      <button 
        onClick={() => this.props.onIncrement(this.props.cont)}
        className="btn btn-secondary btn-sm">

        ADD
       </button>
       <button 
         onClick={() => this.props.onDelete(this.props.cont.id)} 
         className= "btn btn-danger btn-sm m-2">
         Clear
       </button>
     </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.cont.value === 0 ? "warning" : "primary";
    return classes;
  }


formatCount() {
  const {value} = this.props.cont;
 return value === 0 ? "Zero" : value;
 }

}
export default Counter;

