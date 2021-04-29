import './CartItem.css';

const CartItem = ({ price, name, amount, cartItemRemoveHandler, cartItemAddHandler }) => {
  const cartPrice = `$${price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{name}</h2>
        <div className='cart-item__summary'>
          <span className='cart-item__price'>{cartPrice}</span>
          <span className='cart-item__amount'>x {amount}</span>
        </div>
      </div>
      <div className='cart-item__actions'>
        <button onClick={cartItemRemoveHandler}>−</button>
        <button onClick={cartItemAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;