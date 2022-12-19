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

