import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/app';
let old_dots = [];
let format_time = function(time){
  return Math.floor(time/60);
};

let render_gameover = function(time){
  document.querySelector('.input').style.display = "none";
  document.querySelector('.display').innerHTML = `<h1>Game over : ${time}</h1>`;
};

let render_touch_dot = function(touch_location){
  document.querySelector('.display').innerHTML += dot_to_html(touch_location, 'touch');
};

let clear_touch_dot = function(){
  let dot = document.querySelector('.display .dot.touch');
  if(dot){
    dot.remove();
  }
};

let render_dots = function(dots, time){
  document.querySelector('.time').innerHTML = `Time: ${format_time(time)}`;
  document.querySelector('.display').innerHTML = dots_to_html(dots);
};

export default {

  render: function(selector, state){
    ReactDOM.render(<App state={state} />, document.querySelector(selector))

    // if(state.get('gameover')){
    //   render_gameover(state.get('time'));
    // }else{

    // }
  }
};
