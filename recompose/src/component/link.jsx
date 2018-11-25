import React      from 'react';
import { render } from 'react-dom';

const Link = ({ type = "primary", children, href, onClick }) => (
  <a className={`badge badge-${type}`} href={href} onClick={onClick}>
    {children}
  </a>
);

export default Link;