var pagination = require('./extensions/pagination.js');

module.exports = function(ctx) {
  var theme = {
    pagination: pagination,

    uppercase: function(str) {
      return str.toUpperCase();
    }
  };
  return theme;
};
