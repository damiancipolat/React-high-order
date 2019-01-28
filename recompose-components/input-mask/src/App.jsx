import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Recompose
import {compose, setPropTypes, defaultProps,withHandlers,withState} from 'recompose';

import InputMask from './components/inputMask';

const validatorTest=()=>{
  return true;
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
            <InputMask
              maskFormat={"99-9999"}
              maskChar="-"
              maskError="Error writing text"
              validator={validatorTest}
            />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
