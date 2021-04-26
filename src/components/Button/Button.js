import Cart from '../Icons/Cart';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import './Button.css';

const Button = ({ showCartHandler }) => {

  const cartCtx = useContext(CartContext);

  const numOfCartItems = cartCtx.items.reduce((curr, item) => {
    // console.log(curr)
    console.log(curr + item)
    return curr + item.total
  }, 0);

  console.log(cartCtx.items)

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