import React from 'react';

const format_ms = (ms)=> Math.round(ms/1000);

const Time = (props)=> <div className="time">{format_ms(props.state.get("time"))}</div>;

module.exports = Time;
