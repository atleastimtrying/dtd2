var collision = require('./collision');

var dot_is_touched = function(dot, finger){
  return collision(
    {
      x: dot.x,
      y: dot.y,
      r: 25
    },
    {
      x: finger.get('x'),
      y: finger.get('y'),
      r: 25
    }
  );
};

export default function(state){
  if(state.get('touching') && !state.get('selected')){
    let touch_location = state.get('touch_location');
    state.set('dots', state.get('dots').map(function(dot){
      dot.selected = dot_is_touched(dot, touch_location);
      return dot;
    }));
  }else{
    state.set('dots', state.get('dots').map(function(dot){
      dot.selected = false;
      return dot;
    }));
  }
  return state;
};

