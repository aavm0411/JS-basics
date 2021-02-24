// Counter component that renders the indvidual counter

import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      // React.Fragment is a substitute for <div> so you don't have to wrap it around to render it
      <React.Fragment>
        {/* The following line is used as an if statement by using && boolean comparision to validate, it takes the last item */}
        {/* {this.state.tags.length === 0 && "Please create a new tag!"}
        {this.renderTags()} */}
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
        <br></br>
      </React.Fragment>
      //These className are expressions from bootstrap, check documentation.
    );
  }

  //   Assigns the type of badge depending on the value of the counter
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  //   Assigns the format of the counter depending on the value
  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "Zero" : count;
    // the ":" operator means "otherwise"
    // the "===" means absolute identical.
  }
}

export default Counter;
