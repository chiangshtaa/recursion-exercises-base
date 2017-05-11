const { flattenTreeToArray } = require('./dom-util');
const _ = require('underscore');

const getElementById = function(root, id) {
  // Your code here
  const elements = flattenTreeToArray(root);
  let result;
  elements.forEach((el) => {
    if (el.id === id) {
      result = el;
    }
  });
  return result;
};

const getElementsByClassName = function(root, className) {
  // Your code here
  const elements = flattenTreeToArray(root);
  let result = [];
  elements.forEach((el) => {
    if ((el.className !== undefined) && (el.className.indexOf(className) !== -1)) {
      result.push(el);
    }
  });
  return result;
};

const getElementsByTagName = function(root, tagName) {
  // Your code here
  const elements = flattenTreeToArray(root);
  let result = [];
  elements.forEach((el) => {
    if (el.tagName === tagName) {
      result.push(el);
    }
  });
  return result;
};

module.exports = {
  getElementById: getElementById,
  getElementsByClassName: getElementsByClassName,
  getElementsByTagName: getElementsByTagName
};
