import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import Modal from '../../Modal/Modal';
import CartItem from '../CartItem/CartItem';
import './Cart.css';

const Cart = ({ hideCartHandler }) => {

  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.total.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {};

  const cartItemAddHandler = item => {};

  const cartItems = (
    <ul className='cart-items'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          total={item.total}
          price={item.price}
          cartItemRemoveHandler={cartItemRemoveHandler}
          cartItemAddHandler={cartItemAddHandler}
        />
      ))}
    </ul>
  );

  return (
    <Modal hideCartHandler={hideCartHandler}>
      {cartItems}
      <div className='cart__total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className='cart__actions'>
        <button
          className='cart__button cart__button_alt'
          onClick={hideCartHandler}
        >
          Close
        </button>
        {hasItems &&
          <button
            className='cart__button'
          >
            Order
          </button>
        }
      </div>
    </Modal>
  );
};

export default Cart;