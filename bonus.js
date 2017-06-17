/*

#### bonus `makeGet`
export a function `makeGet` that takes one argument and return a function that
takes no arguments but return the previously given argument

#### bonus `hideMe`
export a function `hideMe` that takes one object argument
and return a function that takes a string arguments and return the corresponding
values from the previously given object

#### bonus `safe`
export a function `safe` that takes no arguments
and return an object that contain two functions, `set`, `replace` and `get`.  
The function `set` take any value argument, store it and return generated key
The function `get` takes one of the generated key returned from `set`
and return the corresponding value
The function `replace` takes two arguments, a value and a generated key
and replace the value previously set for this key.
The generated keys must be empty object references generated by `Object.create(null)`

a function that takes a string arguments and return the corresponding
values from the previously given object

*/



module.exports = ({ describe, test, $, exports }) => [
  describe('BONUS', $('arrow').map(def =>
    test(`function line ${def.loc.start.line} column ${
      def.loc.start.column} is a single expression`)
      .value(def.body.type)
      .notEqual('BlockStatement'))
  .concat([
    test('no variable declaration')
      .value($('VariableDeclarator').length)
      .equal(0, 'Variables declaration count should be 0')
    ,
    test(`Don't Repeat Yourself`)
      .value($('ExpressionStatement Identifier'))
      .map(nodes => nodes
        .filter(n => !/function/i.test(n.parent.type))
        .map(n => n.name)
        .filter(name => Object.keys(exports).includes(name))
        .length)
      .equal(Object.keys(exports).length, 'You have repeated keys')
    ,
  ])),
]
