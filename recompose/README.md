# Recompose example

- This example use Recomponse https://github.com/acdlite/recompose

## Methods
You can see the full doc in this link https://github.com/acdlite/recompose/blob/master/docs/API.md

- **withState**: This method creates a HOC.
  - it adds a state property
  - it creates a handler to set the value of this state property
  - it allow us to set a initial value

- **withHandlers**:
  - Takes an object map of handler creators.Each one of the properties of this object passed to withHandlers should be a Higher-Order Function that accepts a set of props and returns a function handler. In this way we can generate a handler that will have access to the props of the component

- In this example, I use:
  - withState   -> define a state with only one attribute, a handler to modify and a default value.
  - setPropTypes-> define proptypes to a component.
  - defaultProps-> set a default prop value.
  - withHandlers-> add methods to a base component.
  
  - I create a compose object at this way: withHandlers(setPropTypes(defaultProps(withState(Button))).

## Run
To run this project

  ```js
   $ npm install
   $ npm Start
  ```   
