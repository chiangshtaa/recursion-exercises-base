
const visitAllNodes = function(node, callback) {
  // Hint: read about DOM nodes and node methods here: https://developer.mozilla.org/en-US/docs/Web/API/Node
  // Your code here
  if (node.childNodes.length === 0) {
    return callback(node);
  }
  //callback(node);
  node.childNodes.forEach((node) => visitAllNodes(node, callback));
  return callback(node);
};
 
const flattenTreeToArray = function(node) {
  // Hint: Use visitAllNodes()
  // Your code here
  const arr = [];
  visitAllNodes(node, (node) => arr.push(node));
  return arr;
};

module.exports = {
  visitAllNodes: visitAllNodes,
  flattenTreeToArray: flattenTreeToArray
};