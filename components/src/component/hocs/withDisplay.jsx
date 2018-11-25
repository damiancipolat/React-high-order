import React, { Component } from 'react';
import { render } from 'react-dom';

const withDisplayTrack = WrappedComponent => props => {
  const { children, onClick, handleClick, times, ..._props } = props;
  return (
    <span onClick={handleClick}>
      <WrappedComponent
        type={times > 5 ? "danger" : "primary"}
        {..._props}
      >
        {children} <small>({times} times clicked)</small>
      </WrappedComponent>
    </span>
  )
}

export default withDisplayTrack;