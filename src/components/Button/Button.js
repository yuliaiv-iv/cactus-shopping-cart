import Cart from '../Icons/Cart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Button.css';

const Button = ({ showCartHandler }) => {

  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount
  }, 0);

  console.log(cartCtx)

  return (
    <button
      className='button'
      onClick={showCartHandler}
    >
      <span className='button__icon'>
        <Cart />
      </span>
      <span>Your Cart</span>
      <span className='button__badge'>{numOfCartItems}</span>
    </button>
  );
};

export default Button;