import './Checkout.css';
import { useRef, useState } from 'react';

const Checkout = ({ onCancel, submitOrderHandler }) => {

  const isEmpty = value => value.trim() === '';
  const isFiveDigits = value => value.trim().length === 5;

  const [isInputValid, setIsInputValid] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  })

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const confirmHandler = (event) => {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredStreet = streetInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredCity = cityInputRef.current.value;

    const enteredNameValid = !isEmpty(enteredName);
    const enteredStreetValid = !isEmpty(enteredStreet);
    const enteredCityValid = !isEmpty(enteredCity);
    const enteredPostalCodeValid = isFiveDigits(enteredPostalCode);

    setIsInputValid({
      name: enteredNameValid,
      street: enteredStreetValid,
      postalCode: enteredPostalCodeValid,
      city: enteredCityValid,
    })

    const isFormValid = 
      enteredNameValid && 
      enteredStreetValid && 
      enteredCityValid && 
      enteredPostalCodeValid;

      if (!isFormValid) {
        return
      }

      submitOrderHandler({
        name: enteredName,
        street: enteredStreet,
        postalCode: enteredPostalCode,
        city: enteredCity
      })
  };

  return (
    <form className='form__checkout' onSubmit={confirmHandler}>
      <div className='form__control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' ref={nameInputRef} />
        {!isInputValid.name && <p className='form__error'>Please enter a valid name</p>}
      </div>
      <div className='form__control'>
        <label htmlFor='street'>Street</label>
        <input type='text' id='street' ref={streetInputRef} />
        {!isInputValid.street && <p className='form__error'>Please enter a valid street name</p>}
      </div>
      <div className='form__control'>
        <label htmlFor='postal'>Postal Code</label>
        <input type='text' id='postal' ref={postalCodeInputRef} />
        {!isInputValid.postalCode && <p className='form__error'>Please enter a valid Postal Code</p>}
      </div>
      <div className='form__control'>
        <label htmlFor='city'>City</label>
        <input type='text' id='city' ref={cityInputRef} />
        {!isInputValid.city && <p className='form__error'>Please enter a valid city</p>}
      </div>
      <div className='form__actions'>
        <button type='button' onClick={onCancel}>
          Cancel
        </button>
        <button className='form__submit'>
          Confirm
          </button>
      </div>
    </form>
  );
};

export default Checkout;