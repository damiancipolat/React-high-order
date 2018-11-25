import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Recompose
import {compose, setPropTypes, defaultProps,withHandlers,withState} from 'recompose';

/*
  withState   -> define a state with only one attribute, a handler to modify and a default value.
  setPropTypes-> define proptypes to a component.
  defaultProps-> set a default prop value.
  withHandlers-> add methods to a base component.
*/

const enhance = compose(
  withState('counter','setCounter',0),
  setPropTypes({
    onClick: PropTypes.func,
    type: PropTypes.oneOf(['submit', 'button']),
    className: PropTypes.func,
    children: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
  }),
  defaultProps({
    type: 'button',
    className: '',
  }),
  withHandlers({
    onClick: props => e => {
      alert('click');

      let counter = props.counter;
      counter++;      
      props.setCounter(counter);

      props.onClick && props.onClick(e)
    },
    onHover: props => e => {
      alert('hover');      
    },
  }),
)

const Loading = () => {
  return (
    <div><b>LOADING</b></div>
  )
}

const Button = ({counter,type, className, children, onClick, isLoading }) => {
  return (
    <button type={type} className={className} onClick={onClick}>
      {isLoading && <Loading />}
      {!isLoading && children} - Valor {counter}
    </button>
  )
}

//Compose: withHandlers(setPropTypes(defaultProps(Button))).
const ButtonCompose = enhance(Button);

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
            <ButtonCompose onClick={()=>alert('test')} isLoading={false}>test</ButtonCompose>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
