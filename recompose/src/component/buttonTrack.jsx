import React, { Component } from 'react';
import { render } from 'react-dom';
import Button 	  from "./button.jsx";

/*
	This component uses the button component and include
	a internal counter to record the number of times that was clicked.
*/
class ButtonWithTrack extends Component {

  constructor(props) {
    super(props);

    this.state = {
      times: 0
    };


    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(event){

    let { times } 	  = this.state;
    const { onClick } = this.props;

    this.setState({ times: ++times });
    onClick && onClick();

  }

  render() {

    const { children } = this.props;
    const { times }    = this.state;

    return (
      <span onClick={this.handleClick}>
        <Button type={times > 5 ? "danger" : "primary"}>
          {children} <small>{times} times clicked</small>
        </Button>
      </span>
    );

  }

}

export default ButtonWithTrack;