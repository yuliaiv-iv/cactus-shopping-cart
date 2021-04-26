import { useRef, useState } from 'react';
import Input from '../Input/Input';
import './Form.css';

const Form = ({addToCartHandler}) => {

  const inputRef = useRef();
  const [isValid, setIsValid] = useState(true);

  const submitHandler = event => {
    event.preventDefault();
    const enteredAmount = inputRef.current.value;
    const enteredToNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredToNumber < 1 ||
      enteredToNumber > 5
    ) {
      setIsValid(false);
      return;
    }
    addToCartHandler(enteredAmount);
  };

  return (
    <form className='form' onSubmit={submitHandler}>
      <Input
        ref={inputRef}
        label='total'
        input={{
          id: 'total',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className='form__button'>+ Add</button>
      {!isValid && <p>Please enter a valid amount 1-5</p>}
    </form>
  );
};

export default Form;