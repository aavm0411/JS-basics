// import logo from './logo.svg';
import NavBar from './components/navbar';
import './App.css';
import React, { Component } from 'react';
import Counters from './components/counters.jsx';


class App extends Component {
  //Create the counters or pull from the server
  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  //Function to interact with the state values.
  handleIncrement = (counter) => {
    // the "..." operator duplicates the object
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counter };
    counters[index].value++;
    this.setState({ counters });
  };

  handleReset = () => {
    //this creates a constant that based on the counters object and assign all the values to 0
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    // set the new constant as the value of counters, since the variable name is the same no need to
    //double assignments such as "counters:counters"
    this.setState({counters});
  };

  handleDelete = (counterId) => {
    // Returns all the counters except the one that matches the id
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    // no need for double assignments here
    this.setState({counters});
  };

  render() {
    return (
      <React.Fragment>
        {/* Pass to NavBar the state of the counters which value is higher than 0 */}
      <NavBar totalCounters = {this.state.counters.filter (c => c.value >0).length} />
      <main className = "container">
        <Counters 
        // Define the handling of rising incoming request from child components
          counters={this.state.counters}
          onReset={this.handleReset} 
          onIncrement={this.handleIncrement} 
          onDelete={this.handleDelete} />
      </main>
      </React.Fragment>
    );
  }
}

// Export app to be used on index.js
export default App;
