import Modal from '../../Modal/Modal';
import './Cart.css';

const Cart = ({ hideCartHandler }) => {
  const cartItems = (
    <ul className='cart-items'>
      {[{ id: 'c1', name: 'bbbbb', amount: 2, price: 12.99 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal hideCartHandler={hideCartHandler}>
      {cartItems}
      <div className='cart__total'>
        <span>Total Amount</span>
        <span>35.62</span>
      </div>
      <div className='cart__actions'>
        <button
          className='cart__button cart__button_alt'
          onClick={hideCartHandler}
        >
          Close
        </button>
        <button
          className='cart__button'
        >
          Order
        </button>
      </div>
    </Modal>
  );
};

export default Cart;