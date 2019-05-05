import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Recompose
import {compose, setPropTypes, defaultProps,withHandlers,withState} from 'recompose';

import Datepicker from './components/datepicker';

const validatorTest=()=>{
  return true;
}

class App extends Component {

  constructor(props){
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
          <div>
            <Datepicker/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
