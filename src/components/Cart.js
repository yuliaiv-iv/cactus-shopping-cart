import React from 'react';
import { useCart } from '../contexts/useCart';

export default function Cart() {

  const { addItem, groupCardItems, removeItem, totalPrice, cart } = useCart();

  return (
    <div className="cart">
      {cart.length === 0 ? <h3 className="cart-text">You don't have any cactuses in the cart yet</h3> : null}
      {groupCardItems.map((product, index) => (
        <div className="cart-item" key={index}>
          <img src={product.image_url} alt={product.name} width="60" />
          <div className="content">
            <h3>{product.name}</h3>
            <div className="cart-buttons">
              <button onClick={() => removeItem(product.sku)}>-</button>
              <button>{product.qty}</button>
              <button onClick={() => addItem(product.sku)}>+</button>
            </div>
          </div>
        </div>
      ))}
      <div className="total">
        <p>Total Price:</p>
        <p>${totalPrice}</p>
      </div>
    </div>
  );
}