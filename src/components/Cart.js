import React from 'react';
import { useCart } from '../contexts/useCart';

export default function Cart() {

  const { addItem, groupCardItems, removeItem, totalPrice } = useCart();

  return (
    <div className="cart">
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
      <div className="total">${totalPrice}</div>
    </div>
  );
}