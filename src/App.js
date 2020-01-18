import React, { Component } from "react";
import Navbar from "./components/navbar";
import Counters from "./components/counters";
import "./App.css";

class App extends Component {
  state = {
    counters: [
      { id: 1, value: 5 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 }
    ]
  };

  //Create new array of counters showing all but the one that was deleted
  handleDelete = counterId => {
    const counters = this.state.counters.filter(c => c.id !== counterId);
    //Overwrite counters property with counters constant
    this.setState({ counters: counters });
  };

  //Naming convention for event handling
  handleIncrement = counter => {
    //Cloning array
    const counters = [...this.state.counters];
    //Find ID of the counter we want to increment
    const index = counters.indexOf(counter);
    //In order to avoid to modify the state object
    counters[index] = { ...counter };
    counters[index].value++;

    this.setState({ counters });
  };

  //Create new array of counters
  handleReset = () => {
    const counters = this.state.counters.map(c => {
      c.value = 0;
      return c;
    });
    //Same as saying counters: counters
    this.setState({ counters });
  };
  render() {
    return (
      //Use when returning multiple root elements from the render method
      //Show counters > 0
      <React.Fragment>
        <Navbar
          totalCounters={this.state.counters.filter(c => c.value > 0).length}
        />
        <main className="container">
          <Counters
            //Controlled component as has no state, only receives data and methods to modify it via props
            counters={this.state.counters}
            onReset={this.handleReset}
            onIncrement={this.handleIncrement}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
