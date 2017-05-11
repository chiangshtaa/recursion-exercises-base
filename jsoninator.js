const _ = require('underscore'); // the real one! :)

// This is what you would do if you liked things to be easy:
// const stringify = JSON.stringify;
// But you don't. So you're going to write it from scratch...



const stringify = function(obj) {
  // your code goes here
  if (typeof(obj) === 'string') {
    return '"' + obj + '"';
  } else if (typeof(obj) === 'number') {
    return obj.toString();
  } else if (typeof(obj) === 'boolean') {
    return obj.toString();
  } else if (obj === null) {
    return 'null';
  } else if (Array.isArray(obj)) {
    const results = obj.map((element) => {
      return stringify(element);
    });
    return '[' + results.join(',') + ']';
  } else {
    let result = '{';
    for (let key in obj) {
      result += stringify(key) + ':' + stringify(obj[key]);
    }
    result += '}';
    return result;
  }
};

module.exports = {
  stringify: stringify
};