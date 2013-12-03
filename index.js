'use strict';
module.exports = replaceThis

var map = require('esmap')

function replaceThis(node, replacement, recurse) {
  return replace(node)

  function replace(node) {
    if (!node) return

    if (node.type === 'ThisExpression')
      return replacement

    if (!recurse && (node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression'))
      return node

    return map(node, replace)
  }
}
