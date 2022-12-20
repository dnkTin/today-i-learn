
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
