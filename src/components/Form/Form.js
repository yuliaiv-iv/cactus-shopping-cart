import Input from '../Input/Input';
import './Form.css';

const Form = (props) => {
  return (
    <form className='form'>
      <Input
        label='Amount'
        input={{
          id: 'amount',
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          defaultValue: '1',
        }}
      />
      <button className='form__button'>+ Add</button>
    </form>
  );
};

export default Form;