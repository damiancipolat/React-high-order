import React      from 'react';
import { render } from 'react-dom';

const Button = ({ type = "primary", children, onClick }) => (
  <button className={`btn btn-${type}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;