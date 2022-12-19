lexical environment: the scope or environment the engine is currently reading code in.
A new lexical envrionment is created when curly brackets {} are used.

scope
function scope --> javascript --> meaning it only creates a new local environment if it sees the keyword function on the global scope.
To give use access to block scope, use let and const.=> let and const is BLOCK SCOPE
block scope 00 --> most programming languages are block scope.

global variable
IIFE: Immediately invoked function expression
  ```javascript
    // Grouping Operator () creates a lexical scope
    (function(){
      // statements
    })()
    // Immediately invokes the function with 2nd set of ()
  ```


