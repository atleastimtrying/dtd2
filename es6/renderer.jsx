import Immutable from 'immutable';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './jsx/app';

export default {
  render: function(selector, state){
    ReactDOM.render(<App state={state} />, document.querySelector(selector))
  }
};
