import React, { Component } from 'react';
import './App.css';
import CounterRegular from './CounterRegular';
import CounterHooks from './CounterHooks';

export default class App extends Component {
  render() {
    return (
      <div>
        <CounterRegular />
        <hr />
        <CounterHooks />
      </div>
    );
  }
}
