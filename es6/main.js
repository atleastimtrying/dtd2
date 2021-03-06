import initial_state from './initial_state';
import input from './jsx/input';
import dot_touching from './dot_touching';
import dot_collision from './dot_collision';
import dot_move_selected from './dot_move_selected';
import game_completion from './game_completion';
import {time_get, time_start} from './time.js';
import renderer from './renderer';
import expose_methods from './expose_methods';

var state;

let start = function(){
  state = initial_state.get();
  time_start();
  loop(state);
};

let update = function(state){
  state = time_get(state);
  state = input.read(state);
  state = dot_touching(state);
  state = dot_move_selected(state);
  state = dot_collision(state);
  state = game_completion(state);
  renderer.render('#screen', state);
  return state;
};

let loop = function(state){
  let new_state = update(state);
  requestAnimationFrame(function(){ 
    loop(new_state) 
  });
};

window.addEventListener('load', start);
