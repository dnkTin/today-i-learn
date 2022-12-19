Javascript is a dynamic programming language which means that properties can easily be added or removed
from  an object after its instantiation.

REF:
https://richardartoul.github.io/jekyll/update/2015/04/26/hidden-classes.html


javascript engine: created by web browsers
--> standardized by ECMA script (ES)
V8 engine:


javascript do a lot of work - 2 main job is reading and executing.
call stack:
  we need a place to write and store data, a place to keep track line by line of what's executing
  (LIFO)
Memory heap: a place to store and write data.


stack overflow => when you call a function inside it
==> maximum call stack size exceeded.

garbage collection: javascript is gabage collected language -> it means when a function is called -> 
javascript will remove it from memory heap, 
To avoid garbage collection, avoid initiate a global variable
-> init variable inside a function
memory leaks
example: foo = {foo1: 'foo1', foo2: 'foo2'}, foo = 'foo to string'


single threaded: javascript is a single threaded language, meaning only one thing can be executed at a time. It only has one call stack and therefore it is a synchronous language.
--> issues: what is the issue of single threaded language?
when browsing in browsers, each browsers has it own javascript Runtime with a set of Web Api's methods.
so only one thing can be done at a time. 
Imaging an alert of the page blocking user from accessing any parth of the page until the OK button is clicked. 
If anything in javascript took a significant amount of time, blocked the browser, then we would have a pretty bad user experience. This is where concurrency and the event loop come in

event loop:
when run javascript code in browser, browser know which asynchronous so it pass to the web api to handle it, after that push in callback queue.
Event loop will look constantly to check when the call stack is empty, so it push the result back to the call stack.

(Ref): https://www.youtube.com/watch?v=8aGhZQkoFbQ

Node JS is a Javascript runtime environment build on Chrome's V8 engine that use C++ to provide
the event loop and callback queue needed to run asynchronous operations.

Job queue come with promise, javascript engine will check job queue before the callback queue.









