import React, { Component } from 'react';

class CounterRegular extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }

  increment() {
    let count = this.state.count;
    count = count + 1;
    this.setState({ count: count });
  }

  decrement() {
    let count = this.state.count;
    count = count - 1;
    this.setState({ count: count });
  }
  render() {
    return (
      <>
        <h1>Counter {this.state.count}</h1>
        <p>
          <button
            className="btn btn-primary"
            onClick={this.increment.bind(this)}
          >
            Increment
          </button>{' '}
          <button
            className="btn btn-danger"
            onClick={this.decrement.bind(this)}
          >
            Decrement
          </button>
        </p>
      </>
    );
  }
}

export default CounterRegular;
