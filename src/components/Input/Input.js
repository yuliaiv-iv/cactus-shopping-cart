import React from 'react';
import './Input.css';

const Input = React.forwardRef((props, ref) => {

  return (
    <div className='form__input'>
      <label
        className='form__label'
        htmlFor={props.input.id}
      >
        {props.label}
      </label>
      <input
        className='form__item'
        ref={ref}
        {...props.input}
      />
    </div>
  );
});

export default Input;