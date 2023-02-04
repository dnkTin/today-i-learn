### Closures and Prototypal Inheritance are two things that make JavaScript special and different from other programming languages.


What is Closure?
a closure gives you access to its outer functions scope from the inner scope. 
```javascript
  const start = () => {
    const name = 'Tin'
    const displayName = () => {
      alert(name)
    }
    displayName()
  }
  start()
  // -> there is a closure scrope come into play between the inner displayName function and the start function

  // displayName can access the the outer 'name' variable
```

Prototypal Inheritance - Khong Hieu

Prototype vs __proto__
Understanding the difference between __proto__ and prototype can be quite a confusing concept for JavaScript developers. Every function in JavaScript automatically gets a prototype property when it is created that gives it the call, apply, and bind methods. It doesn't really do anything with regular functions, but in constructor functions the prototype property allows us to add our own methods to the objects we create. The __proto__ property is what creates the link between prototype objects, the child inherits properties from the parent through the prototype chain. Each time a new object is created in JavaScript, it uses the __proto__ getter function to use a built in constructor function based on what is being created. This could be an Array, Boolean, Date, Number, Object, String, Function, or RegExp. Each one has their own separate properties and methods that they inherit from the constructor.


