import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { createStore, applyMiddleware } from 'redux';
import {connect,Provider} from 'react-redux';

//Recompose
import {compose, setPropTypes, defaultProps,withHandlers,withState,withReducer,withPropsOnChange} from 'recompose';

//Create reducer.
const reducerCount = (state,action)=>{

  console.log('>',state);

  switch (action.type) {
    case "INCREMENT":
      return {counter:state.counter + 1};
    case "DECREMENT":
      return {counter:state.counter - 1};
    default:
      return state;
  }
}

//Create actions.
const getAction = (typeVal) =>{

  return { type: typeVal }

}

let store = {
  counter: 0
}

//Compose component = compose(withReducer(withHandlers))
const enhance = compose(
  //Define state name, dispatch, reducer functions, and initial state.
  withReducer("store","dispatch",reducerCount,store),
  //Add handlers functions to the component.
  withHandlers({
    incrementCounter: ({ dispatch }) => e => dispatch(getAction("INCREMENT")),
    decrementCounter: ({ dispatch }) => e => dispatch(getAction("DECREMENT"))
  })  
);

//Stateless component.
const counterComponent = ({ store, incrementCounter, decrementCounter }) => {
  return (
    <div>
      <h1>{store.counter}</h1>
      <button onClick={incrementCounter}>Increment +</button>&nbsp;
      <button onClick={decrementCounter}>Decrement -</button>
    </div>
  );
}

//Composed component.
const CounterCompose = enhance(counterComponent);

class App extends Component {

  constructor(props)
  {
    super(props);

    this.test = this.test.bind(this);
  }

  test(){
    alert("hola");
  }

  render() {
    return (      
        <div className="App">
          <header className="App-header">
            <h3>
              High order components - practice - redux + recompose
            </h3>
            <div>
              <span>Hoc counter &rarr; </span>
              <CounterCompose></CounterCompose>
            </div>
          </header>
        </div>
      )
  }
}

export default App;