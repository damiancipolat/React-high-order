import React, { Component } from 'react';
import PropTypes from 'prop-types'

//Recompose
import {compose,withState,withHandlers} from 'recompose';
import InputMask from 'react-input-mask';

const InputMaskField = ({maskFormat,maskChar,value,setInput,error}) => {
  return (
    <div>
      <div>
        <InputMask 
          mask={maskFormat}
          maskChar={maskChar}
          value={value || ''}
          onChange={setInput}
          onBlur={setInput}
          alwaysShowMask
        />
      </div>
      {
        ((error) ? <div className="mask-field-error">{error}</div> : '')
      }      
    </div>
  )
}

const InputCompose = compose(
  withState('value','setValue'),
  withState('error','setError',null),
  withHandlers({
    onChangeValues: props => () => {

      //If the validator is defined.
      if (props.validator){

        //Validate the value.
        let result  = props.validator(props.value);

        //Define custom message if the error validator msg is not defined.
        let message = (props.maskError)?props.maskError:'Error in input text';        
    
        props.setError(message);
      }

      // If the callback props is defined send to the parent the full phone data.
      if (props.onChange) {
        props.onChange({
          value:props.value,
          plainValue:props.value
        });
      }

    },
  }),  
  withHandlers({
    setInput: props => event => {
      props.setValue(event.target.value);
      props.onChangeValues(props);
    },
  }),
)(InputMaskField);;


export default InputCompose;