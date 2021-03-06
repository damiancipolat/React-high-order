import React, { Component } from 'react';
import { render } from 'react-dom';
import Button 	  from "../button.jsx";

/*
  We will create a high order component:
  - Receive a component of type button or link
  - Include the click counter
  - Return this component wrapped.
*/

const buildWrappedTrack = (WrappedComponent)=>{

  return class extends Component {

    constructor(props) {
      super(props);

      this.state = {
        times: 0
      };


      this.handleClick = this.handleClick.bind(this);
    }


    handleClick(event){

      let { times }     = this.state;
      const { onClick } = this.props;

      this.setState({ times: ++times });
      onClick && onClick();

    }

    render() {

      const { children } = this.props;
      const { times }    = this.state;

      return (
        <span onClick={this.handleClick}>
          <WrappedComponent type={times > 5 ? "danger" : "primary"}>
            {children} <small>{times} times clicked</small>
          </WrappedComponent>
        </span>
      );

    }

  }

}

export default buildWrappedTrack;