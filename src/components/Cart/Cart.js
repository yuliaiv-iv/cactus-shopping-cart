import React, { useContext, useState } from 'react';
import { CartContext } from '../../context/CartContext';
import Modal from '../../Modal/Modal';
import CartItem from '../CartItem/CartItem';
import Checkout from '../Checkout/Checkout';
import * as data from '../../utils/data';
import './Cart.css';

const Cart = ({ hideCartHandler }) => {

  const cartCtx = useContext(CartContext);
  const [isCheckout, setIsCheckout] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = id => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = item => {
    cartCtx.addItem({ ...item, amount: 1 })
  };

  const orderHandeler = () => {
    setIsCheckout(true);
  }

  const submitOrderHandler = (userData) => {
    setIsSubmitting(true);
    data.postData(userData, cartCtx)
      .then(() => {
        setIsSubmitting(false);
        setIsSubmitted(true);
        cartCtx.clearCart();
      })
      .catch((err) => {
        console.log(err);
      })
  }

  const cartItems = (
    <ul className='cart-items'>
      {cartCtx.items.map((item) => (
        <CartItem
          key={item.id}
          name={item.name}
          amount={item.amount}
          price={item.price}
          cartItemRemoveHandler={cartItemRemoveHandler.bind(null, item.id)}
          cartItemAddHandler={cartItemAddHandler.bind(null, item)}
        />
      ))}
    </ul>
  );

  const cartModal = (
    <React.Fragment>
      {cartItems}
      <div className='cart__total'>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      {isCheckout && <Checkout
        onCancel={hideCartHandler}
        submitOrderHandler={submitOrderHandler}
      />}
      {!isCheckout &&
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
              onClick={orderHandeler}
            >
              Order
          </button>
          }
        </div>}
    </React.Fragment>
  );

  const isSubmittingModal = <p>Sending order data...</p>;
  const submittedOrder = <React.Fragment>
    <div className='cart__submitted'>
      <p>The order was submitted!</p>
      <button
        className='cart__button cart__button_alt'
        onClick={hideCartHandler}
      >
        Close
    </button>
    </div>
  </React.Fragment>

  return (
    <Modal hideCartHandler={hideCartHandler}>
      {!isSubmitting && !isSubmitted && cartModal}
      {isSubmitting && isSubmittingModal}
      {!isSubmitting && isSubmitted && submittedOrder}
    </Modal>
  );
};

export default Cart;