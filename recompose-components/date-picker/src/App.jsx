import './App.css';
import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Recompose
import {compose, setPropTypes, defaultProps,withHandlers,withState} from 'recompose';

import DateBox from './components/datepicker/date-box.jsx';

const validatorTest=()=>{
  return true;
}

class App extends Component {

  constructor(props){
    super(props);
    this.test = this.test.bind(this);
    this.visible = false;
  }

  test(){
    alert("hola");
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div style={{"marginLeft":"320px"}}>
            <DateBox from="2019-04-10" to="2019-05-05" onFilter={(dates) => console.log('***',dates)}/>
          </div>
        </header>
      </div>
    );
  }
}

export default App;