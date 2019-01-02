# Recompose example

- This example use Recomponse https://github.com/acdlite/recompose

## Methods
You can see the full doc in this link https://github.com/acdlite/recompose/blob/master/docs/API.md

- **withReducer**: This method creates a HOC.
  - Add a state name.
  - Add a dispatch function.
  - Include reducers.
  - Set initial state value.

- **withHandlers**:
  - Takes an object map of handler creators.Each one of the properties of this object passed to withHandlers should be a Higher-Order Function that accepts a set of props and returns a function handler. In this way we can generate a handler that will have access to the props of the component

- In this example, I use:
  - withReducer   -> Include redux in recompose.
  - withHandlers  -> Add functions to handle evenst.
  
  - I create a compose object at this way: withHandlers(withReducer(BaseComponent)).

## Run
To run this project

  ```js
   $ npm install
   $ npm Start
  ```   
