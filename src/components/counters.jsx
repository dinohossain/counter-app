import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  render() {
    //Distructuring
    const { counters, onReset, onDelete, onIncrement } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-secondary btn-sm m-2">
          Reset
        </button>
        {counters.map(counter => (
          //Key is used internally by React
          <Counter
            key={counter.id}
            onDelete={onDelete}
            onIncrement={onIncrement}
            //Pass the whole object, if in the future more props are added no need to modify
            counter={counter}
          />
        ))}
      </div>
    );
  }
}

export default Counters;
