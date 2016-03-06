import initial_state from './initial_state.js';
import input from './input.js';
import dot_touching from './dot_touching.js';
import dot_collision from './dot_collision.js';
import game_completion from './game_completion.js';
import time from './time.js';
import renderer from './renderer.js';

var state;
let start = function(){
  state = initial_state.get();
  renderer.initial_render('#screen');
  input.bind();
  loop();
};

let loop = function(){
  state = time(state);
  state = input.read(state);
  state = dot_touching(state);
  state = dot_collision(state);
  state = game_completion(state);
  renderer.render(state);
  if(!state.get('gameover')){
    requestAnimationFrame(loop);
  }
};

window.addEventListener('load', start);
