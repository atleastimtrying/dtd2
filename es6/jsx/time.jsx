import React from 'react';

const Time = (props)=> <div className="time">{props.state.get("time")}</div>;

module.exports = Time;
