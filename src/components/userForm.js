import React, { Component } from 'react'
import FormUserDetails from './formUserDetails' 
import FormPersonalDetails from './formPersonalDetails'
import Confirm from "./confirm"
import Success from "./success";



class UserForm extends Component {

  state = {
    step :1,
    firstName: "",
    lastName: "",
    email:"",
    occupation:"",
    city:"",
    bio: ""
  }

  // proceed to the next step
  nextStep = () => {
    const {step} = this.state;
    this.setState(() =>{                    
                                              
                                                
      return {
        step : step + 1 
      }
    })
  }

  previousStep = () => {
      const {step} = this.state;
      this.setState(() =>{
        return {
          step : step - 1 
        }
      })
  }

  //handle fields change
handleChange = input => e => {
  this.setState({[input]: e.target.value});
}

  render() {

    const {step} = this.state;
    const {firstName, lastName, email, occupation, city, bio} = this.state;
    const values = { firstName, lastName, email, occupation, city, bio}

    switch(step) {
      case 1:
         return (
           <FormUserDetails nextStep = {this.nextStep} handleChange ={this.handleChange} values= {values}/>
      )

      case 2: 
         return (
           <FormPersonalDetails nextStep = {this.nextStep} prevStep = {this.prevtStep} handleChange ={this.handleChange}
            values= {values}
       />

         )

      case 3:
         return (
          <Confirm nextStep = {this.nextStep} prevStep = {this.prevtStep} values= {values}/>

          )
         
      case 4:
      
         return <Success/>
    }
  }
}

export default UserForm;
