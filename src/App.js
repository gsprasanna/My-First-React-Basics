import React, {Component} from 'react';
//import logo from './logo.svg';
import './App.css';

//const { Component } = React; object destructuring
// ctrl - space => method which will show present inside it (eg:component).
//react calls & execute in the order of lifecycle method. 
// for any class/component, constructor will be called first
//constructor should have super method  
class App extends Component{ 
 constructor(){
   super();

   debugger;
   console.log("hello prasanna!");
 }

 state = {
   inputValue : "Prasanna"
 }
// arrow function and normal function : take the class instance instead of input element instance;
 onInputChange = (event) => {
  const inputValue = event.target.value;
  this.setState({
    inputValue,
  })
 }

 render(){ // render method have dom element in jsx , <> Fragment used to wrap the component
   debugger;
   const {inputValue } = this.state;
  return(    
    <> 
      <div>Hello Prasanna!</div>
      <input value={inputValue} placeholder="add text here" 
      onChange = {this.onInputChange}
      />
    </>
  )
 }
 componentDidMount(){
  debugger;
  console.log("component did mount");
 }
}

export default App;
