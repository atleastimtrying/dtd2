import React from 'react';
import Dot from './dot';
import TouchDot from './touch_dot';

const render_touch_dot = function(state){
  if(state.get("touching")){
    return <TouchDot location={state.get("touch_location")} />;
  }else{
    return <div className="hidden" />
  }
};


const Dots = (props)=>
  <div className="display">
    { props.state.get('dots').map((dot, index) => <Dot dot={dot} key={index} />) }
    { render_touch_dot(props.state) }
  </div>;

module.exports = Dots;
