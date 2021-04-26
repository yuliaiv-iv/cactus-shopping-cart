import './CartItem.css';

const CartItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;

  return (
    <li className='cart-item'>
      <div>
        <h2>{props.name}</h2>
        <div className='cart-item__summary'>
          <span className='cart-item__price'>{price}</span>
          <span className='cart-item__amount'>x {props.amount}</span>
        </div>
      </div>
      <div className='cart-item__actions'>
        <button onClick={props.cartItemRemoveHandler}>−</button>
        <button onClick={props.cartItemAddHandler}>+</button>
      </div>
    </li>
  );
};

export default CartItem;