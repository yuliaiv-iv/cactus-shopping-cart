import './Input.css';

const Input = (props) => {
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
        {...props.input}
      />
    </div>
  );
};

export default Input;