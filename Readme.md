# ast-replace-this

  Replaces the this variable with the given expression.
  Consumes/produces Mozilla ASTs.

## API

### replaceThis(Node, replacement, recurse = false) -> Node

  Returns a new AST with all `ThisExpression`s replaced with the given expression.
  If recurse is truthy, it will recurse to cover every scope in the AST.

