var methods = {};

module.exports = {

  add: function(name, method){
    methods[name] = method;
  },

  call: function(name){
    methods[name]();
  }
};
