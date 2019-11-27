var Promise = require('es6-promise').Promise;
var path = require('path');

module.exports = {
  context: path.join(__dirname, 'javascript'),
  entry: {
    myEntry: './hoge.js'
  },
...
}