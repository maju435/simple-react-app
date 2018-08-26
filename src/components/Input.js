import React from 'react';
import '../styles/Input.scss'

const Input = props => (
  <input className="input" onChange={props.onChange} value={props.value}/>
);

export default Input;