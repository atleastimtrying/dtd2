let times = 0;
export default function(state){
  times ++;
  var new_state = state.set('time', times);
  return new_state;
};

