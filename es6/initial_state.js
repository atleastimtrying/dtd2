import Immutable from 'immutable';
let state = {
  time: 0,
  completed: false,
  touching: false,
  gameover: false,
  touch_location: {
    x: 0,
    y: 0
  },
  current_dot: 0,
  dots: [
    Immutable.Map({
      selected: false,
      completed: false,
      id: 0,
      pairing: 0,
      x: 100,
      y: 100,
      z: 0
    }),
    Immutable.Map({
      selected: false,
      completed: false,
      id: 1,
      pairing: 0,
      x: 200,
      y: 100,
      z: 1
    })
  ]
};

export default {
  get: function(){
    return(Immutable.Map(state));
  }
};
