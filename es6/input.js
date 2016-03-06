import Immutable from 'immutable';
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
  document.querySelector('.input').addEventListener('mousemove', move);
  document.querySelector('.input').addEventListener('mouseup', stop);  
};

let move = function(event){
  internal_state = {
    touching: true,
    touch_location: {
      x: event.clientX,
      y: event.clientY
    }
  };
};

let stop = function(event){
  document.querySelector('.input').removeEventListener('mousemove', move);
  document.querySelector('.input').removeEventListener('mouseup', stop);  
  internal_state = {
    touching: false,
    touch_location: {
      x: event.clientX,
      y: event.clientY
    }
  };
};

let bind = function(){
  document.querySelector('.input').addEventListener('mousedown', start);
};

let read = function(external_state){
  var state = external_state.merge(internal_state);
  return state;
};

export default {
  bind,
  read
};

