import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
     super();
       this.state = {
           chars_left: 0
       }
  }
 handleChange(event) {
     var input = event.target.value;
     this.setState({
         chars_left: input.length - 0
     });
 }
  render() {
    return (
      <div className="container">
        <textarea onChange={this.handleChange.bind(this)} rows="3"></textarea>
        <div className="counter">{this.state.chars_left}</div>
      </div>
    );
  }
}

export default App;
