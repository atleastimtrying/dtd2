import React from 'react';
import Time from './time';
import Display from './display';
import input from './input';
const Input = input.Input;

const App = (props) =>
  <div>
    <Time state={props.state} />
    <Display state={props.state} />
    <Input state={props.state} />
  </div>;

module.exports = App;
