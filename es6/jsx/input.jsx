import React from 'react';
import Immutable from 'immutable';
import expose_methods from '../expose_methods';

let internal_state = {
  touching: false,
  touch_location: {
    x: 0,
    y: 0
  } 
};

let start = function(event){
  
  internal_state = {
    touching: true,
    touch_location: {
      x: event.clientX,
      y: event.clientY
    }
  };
};

let move = function(event){
  internal_state = {
    touching: internal_state.touching,
    touch_location: {
      x: event.clientX,
      y: event.clientY
    }
  };
};

let stop = function(event){
  internal_state = {
    touching: false,
    touch_location: {
      x: event.clientX,
      y: event.clientY
    }
  };
};

let read = function(external_state){
  return external_state.merge(internal_state);
};

const Input = (props)=> <div className="input" onMouseDown={start} onMouseUp={stop} onMouseMove={move}></div>;
module.exports = { Input, read };
