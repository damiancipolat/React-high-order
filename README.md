# High Order
### First order functions:
When a function don't receive another function as parameter, whe said that is a 1st order function.

### High order functions:
A higher order function is a function that takes a function as an argument, or returns a function.
Higher order function is in contrast to first order functions, which don’t take a function as an argument or return a function as output.

Go to functions.js and take a look of this concepts:

https://github.com/damiancipolat/React-high-order/blob/master/functions/functions.js

### Higher order components:
In React, we have the equivalent of Higher-Order Functions but for components, the so-called Higher-Order Components, is a component tha take a component and returns a new component.

I use as reference this tutorial of logrocket.com

https://blog.logrocket.com/using-recompose-to-write-clean-higher-order-components-3019a6daf44c

Go to /components/ and take a look of the react app.
- Open App.jsx and see the comments in the code.

To understand the code into App.js there are steps 1..4, follow them in order and look each file included in each step.
- 1 Create single components, using pure component
- 2 Create a wrapped component.
- 3 Create a wrapped component but using a high order component.
- 4 Create a custom (h.o.c's) and compose them.

### Recompose:
To make easier create high order components, exist the module **recompose** https://github.com/acdlite/recompose

Recompose examples:
- Simple example: https://github.com/damiancipolat/React-high-order/tree/master/recompose
- Using redux: https://github.com/damiancipolat/React-high-order/tree/master/recompose-redux
