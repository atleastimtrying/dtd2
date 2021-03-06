var collision = require('./collision');

var dot_is_touched = function(dot, finger){
  return collision(
    {
      x: dot.get('x'),
      y: dot.get('y'),
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
  if(state.get('touching')){
    let touch_location = state.get('touch_location');
    if(!state.get('selected')){
      state.set('dots', state.get('dots').map(function(dot){
        dot.selected = dot_is_touched(dot, touch_location);
        return dot;
      }));
    }
  }else{
    state.set('dots', state.get('dots').map(function(dot){
      dot.selected = false;
      return dot;
    }));
  }

  return state;
};

