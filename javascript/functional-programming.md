
functional programming has the same goals in mind as object oriented programming, to keep code understandable, easy to extend, easy to maintain, memory efficient, DRY
It use reuseable functions to create and act on data


functional programming vs OOP
Functional programming is based on separation of concern similar to object oriented programming.
In Functinoal programming: have idea, once something is created it should not be changed, being immutable
-> Unlike OOP with shared state, functional programming work on idea of **pure function**
why FP because we want to be more declarative to better understand our code
OOP: shared state



**Pure function** has no side effect to anything outside of it and given the same input will always output the same value. They do not change any data passed into them, but create a new data to return
without altering the original.
The goal of functional programming is to minimize size effects by isolating them away from data.

idempotence --> meaning giving the same input value will return the same output value

Key idea:
  Complete 1 task per function
  Do not mutate state
  Do no share state
  Be predictable
  Be composable, one in put and one output
  Be pure if possible
  Return something

  **pipe** and **compose**
in javscript, it is best idea to make function small and reuseable.

Function composition is the idea that you lay out your functions like a factory assemble line.
pipe() and compose() don't actually exist in Javascript yet.

compose function: read the function from right to left
pipe function: read the function from left to right

```javascript
  // create your own COMPOSE function
  const compose = (fn1, fn2) => data => fn1(fn2(data));
  // create your own PIPE function
  const pipe = (fn1, fn2) => data => fn2(fn1(data));

  const multiplyBy3 = num => num * 3
  const makePositive = num => Math.abs(num)

  // use composse
  const composeFn = compose(multiplyBy3,l makePositive)(40);
```

COMPOSITION VS INHERITANCE KHONG HIEU
Composition is what we just did with FP, creating small reusable functions to make code modular. Inheritance is what we did with OOP, creating a class and extending it to subclasses that inherit the properties. In OOP we create few operations on common data that is stateful with side effects. In FP we create many operations on fixed data with pure functions that don't mutate state. There is a big debate over which one is better and most people believe that composition is better.