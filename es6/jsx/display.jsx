import React from 'react';
import Dots from './dots';

const Display = (props)=>
  <div className="display">
    <Dots state={props.state} />
  </div>;

module.exports = Display;
