# ast-replace-this

  Replaces the this variable with the given expression.
  Consumes/produces Mozilla ASTs.

## API

### ReplaceThis(expression, recurse = false)

  Returns a visitor that replaces all `ThisExpression`s with the given expression in the top-level scope in the given AST.
  If recurse is truthy, it will recurse to cover every scope in the AST.
  You probably want to use it with [estraverse](https://github.com/Constellation/estraverse).
