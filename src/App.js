import React, { Component } from 'react';
import NavBar from './components/navbar'
import Conters from "./components/conters";
import "./App.css";

class App extends Component {
  state = { 
    conters: [
      {id: 1, value: 4},
      {id: 2, value: 0},
      {id: 3, value: 0},
      {id: 4, value: 0}
    ]
  };

  constructor() {
    super();
    console.log('App - Constructor');
  
  }

  componentDidMount() {
    //Ajax Call
    console.log('App - Mounted');

  }

  handleIncrement = cont => {
      const conters = [...this.state.conters];
      const index = conters.indexOf(cont);
      conters[index] = {...cont};
      conters[index].value++;
      this.setState({conters});
  };

  handleReset = () => {
    const conters = this.state.conters.map(c => {
      c.value = 0;
      return c;
    });
    this.setState({conters});
  };

  handleDelete = (contId) => {
    const conters = this.state.conters.filter(c =>c.id !== contId);
    this.setState({conters});
  };

  render() {
    console.log("App - Rendered");
    return (
      <React.Fragment>
      <NavBar totalCounters={this.state.conters.filter(c=> c.value >0).length}/>
      <main className="container">
      <Conters conters = {this.state.conters} onReset={this.handleReset} onIncrement={this.handleIncrement}
      onDelete={this.handleDelete}/>
      </main>
      </React.Fragment>
    
    );
  }
}



export default App;