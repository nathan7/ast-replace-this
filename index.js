module.exports = exports = ReplaceThis
exports.ReplaceThis = ReplaceThis

function ReplaceThis(expression, recurse) {
  recurse = !!recurse
  var depth = -1
  return (
  { enter: function(node, parent) {
      if (node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' || node.type === 'Program')
        depth++
      if ((recurse || depth <= 0) && node.type === 'ThisExpression')
        return expression
    }
  , leave: function(node, parent) {
      if (node.type === 'FunctionExpression' || node.type === 'FunctionDeclaration' || node.type === 'Program')
        depth--
    }
  })
}
