import React from 'react';

let className = (dot)=> dot.get("selected") ? "selected" : "";


let style = function(dot){
  return {
    transform: `translate3d(${dot.get('x')}px, ${dot.get('y')}px, ${dot.get('z') || 0}px)`
  };
};

let content = (dot) => dot.get('id') || "";

const Dot = (props) =>
  <div className={`dot ${className(props.dot)}`} style={style(props.dot)}>{content(props.dot)}</div>

module.exports = Dot;
