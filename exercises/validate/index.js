// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    // if the node.data is out of bounds return false
    // once this condition is met, there are no more recursive calls
    if ((min && node.data < min) || (max && node.data > max)) {
      return false;
    }
    // if there is a left node, return the result of it's validation
    if (node.left) return validate(node.left, min, node.data);
    // if there is right node, return the result of it's validation
    if (node.right) return validate(node.right, node.data, max);
    // the Binary Search Tree is valid if all recursive calls are true
    return true;
  }

module.exports = validate;
