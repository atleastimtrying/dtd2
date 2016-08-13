import React from 'react';

let style = function(dot){
  return {
    transform: `translate3d(${dot.get('x')}px, ${dot.get('y')}px, ${dot.get('z') || 0}px)`
  };
};

const TouchDot = function(props){
  return <div className="dot touch" style={style(props.location)}></div>;
};

module.exports = TouchDot;
