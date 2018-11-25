import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Recompose
import {compose, setPropTypes, defaultProps,withHandlers,withState} from 'recompose';


/*
  withState: This method creates a HOC.
  - it adds a state property
  - it creates a handler to set the value of this state property
  - it allow us to set a initial value
*/
const withStateTimes   = withState('times', 'setTimes', 0);

/*
  withHandlers: The method withHandlers takes an object map of handler creators. Each one of the properties of this object passed to withHandlers should be a Higher-Order Function that accepts a set of props and returns a function handler. In this way we can generate a handler that will have access to the props of the component



*/

const withHandlerClick = withHandlers({
  handleClick: props => e => {
    let { times, onClick, setTimes } = props;
    e.preventDefault()
    setTimes( ++times );
    onClick && onClick();
  }
})

const enhance = compose(
  setPropTypes({
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['submit', 'button']),
    className: PropTypes.func,
    children: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
  }),
  defaultProps({
    type: 'button',
  }),
)

const Loading = () => {
  return (
    <div><b>LOADING</b></div>
  )
}

const Button = ({ type, className, children, onClick, isLoading }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {isLoading && <Loading />}
      {!isLoading && children}
    </button>
  )
}


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
            High order components - practice
          </h3>
          <div>
            <span>Hoc button &rarr; </span>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
