#Recompose example

- This example use Recomponse https://github.com/acdlite/recompose

## METHODS

- **withState**: This method creates a HOC.
  - it adds a state property
  - it creates a handler to set the value of this state property
  - it allow us to set a initial value

- **withHandlers**:
  - Takes an object map of handler creators.Each one of the properties of this object passed to withHandlers should be a Higher-Order Function that accepts a set of props and returns a function handler. In this way we can generate a handler that will have access to the props of the component
