import Immutable from 'immutable';
let old_dots = [];
let format_time = function(time){
  return Math.floor(time/60);
};

let dot_to_html = function(dot, className = ""){
  if(dot.get){
    return(`<div class="dot ${className}" style="transform:translate3d(${dot.get('x')}px, ${dot.get('y')}px, ${dot.get('z') || 0}px);">${dot.get('id') || ""}</div>`);
  }else{
    if(dot.selected){
      className = "selected";
    }
    return(`<div class="dot ${className}" style="transform:translate3d(${dot.x}px, ${dot.y}px, ${dot.z || 0}px);">${dot.id || ""}</div>`);
  }
};

let have_dots_changed = function(dots){
  return old_dots === dots;
};

let dots_to_html = function(dots){
  return dots.map(dot_to_html).join('\n');
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
  initial_render: function(selector){
    document.querySelector(selector).innerHTML = "<div class=\"time\"></div><div class=\"display\"></div><div class=\"input\"></div>"
  },

  render: function(state){
    if(state.get('gameover')){
      render_gameover(state.get('time'));
    }else{
      render_dots(state.get('dots'), state.get('time'));
      clear_touch_dot();
      if(state.get('touching')){
        render_touch_dot(state.get('touch_location'));
      }
    }
  }
};
