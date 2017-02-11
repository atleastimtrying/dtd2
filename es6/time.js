let start_time;
export const time_get = function(state){
  return state.set('time', Date.now() - start_time);
};

export const time_start = function(){
  start_time = Date.now();
};
