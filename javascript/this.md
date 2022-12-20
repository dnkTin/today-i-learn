## this
  **this is the object that the function is property of**
  example
  ```javascript
    window
    this
    window === this // true
    function a() {
      console.log(this)
    }
    a() // window
    // this is the obeject that function a is property of window
  ```

  ```javascript
    const obj = {
      property: 'Im a property of objj',
      method: function () {
        console.log(this.property)
      },
      method2: () => {
        console.log(this.property)
      }
    }
    obj.method() // Im a property of objj
    obj.method2() // undefined
  ```

  ```javascript
    function whichName() {
      console.log(this.name)
    }
    var name = 'window'
    whichName() // window
    var obj1 = {
      name: 'obj1',
      whichName,
    }
    obj1.whichName() // Obj1
  ```

Here is *this* **4 ways**:
  **new keyword binding** - the new keyword changes the meaning of this to be the object that is being created
  **implicit binding** "this" refers to the object that is calling it. It is implied, without doing anything its just how the language workks
  **explicit binding** using the "bind" keyword to change the meaning of this
  **arrow functions as methods** "this" is lexically scoped, **refers to it's current surroundings and no further**. However, if "this" is inside of a method's function, it falls out of scope  -> belongs to the window object. 

  ```javascript
    // 1 new keyword binding
    function Person(name, age) {
      this.name = name;
      this.age = age;
      console.log(this);
    }
    const Person1 = new Person('person1', 55)
    // this -> Person { name: 'person1', age: 55}

    // 2 implicit binding
    const person = {
      name: 'person',
      age: 20,
      hi() {
        console.log('hi ' + this)
      }
    }
    person.hi()
    // this = Person { name: 'person', age: 20}


    // 3 explicit binding
    let name = 'Brittneey'
    person.hi.call(window)

  ```


**dynamic scope vs lexical scope** KHONG HIEU

1
```javascript
  const obj = {
    name: 'Billy',
    sing() {
      console.log(this) // Obj { name: "Billy", sing()}
      const anotherFunc = function () {
        console.log(this)
      }
      anotherFunc // window {...} --> ly do la vi anotherFunc khong thuoc Obj va lay this la window
    }
  }
```

```javascript
  const obj = {
    name: 'Billy',
    sing() {
      console.log(this) // Obj {name: "Billy", sing()}
      const anotherFunc = () => {
        console.log(this)
      }
      anotherFunc() // Obj {name: "Billy", sing()} --> ly do la gi this cua arrow function se bind toi it's current surrounding
    }
  }

```



call(), apply(), bind() --> EASY

bind() and currying
currying: breaking down a function with multiple arguments into one or more function that each accept a single argument.

null vs undefined
null: is absence of value
undefined is not declared yet

Primitive are pass by value (number, string, boolean)
Non Primitive are passed by refernce (object)


Clone Object:
  JSON PARSE
  Object.assign
  Write your own function
  Spread Operator
  Clone in lodash



higher order function  is a function that either takes a function as an argument or returns another function. There are 3 kinds of functions in JavaScript.