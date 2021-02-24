// Parent component from counter

import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Destructoring the props object and pick only the components we want
    const { onReset, counters, onDelete, onIncrement } = this.props;

    return (
      <div>
        {/* Button for reseting, calls the handler on app.js
          className is a parameter from bootstrap */}
        <button onClick={onReset} className="btn btn-primary btn-sm m-2">
          Reset
        </button>
        <br></br>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            counter={counter}
            // this counter passes all the information about the object such as id and value
          />
        ))}
      </div>
    );
  }
}

export default Counters;
