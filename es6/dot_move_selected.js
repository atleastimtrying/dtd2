export default function(state){
  if(state.get("touching")){
    let x = state.get("touch_location").get("x");
    let y = state.get("touch_location").get("y");
    let dots = state.get("dots").map(function(dot){
      if(dot.selected){
        dot.x = x;
        dot.y = y;
        return dot;
      }else{
        return dot;
      }
    });
    state.set("dots", dots);
  }
  return state;
};

