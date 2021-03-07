import React from 'react';
import { useCart } from "../contexts/useCart"
import Cart from './Cart';

export default function Product({ product }) {

  const { addItem, countItemInCart, removeItem } = useCart();

  const handleAddItem = () => {
    addItem(product.sku)
  }

  const handleRemoveItem = () => {
    removeItem(product.sku)
  }

  return (
    <div className="product">
      <img src={product.image_url} alt={product.name} />
      <h3>{product.name}</h3>
      <div className="product-buttons">
        <button
          className={`remove ${countItemInCart(product.sku) === 0 ? 'remove-disabled' : ''}`}
          onClick={handleRemoveItem}
          disabled={countItemInCart(product.sku) === 0}
        >
          Remove
        </button>
        <button
          className="add"
          onClick={handleAddItem}
        >
          Added to Cart ({countItemInCart(product.sku)})
        </button>
      </div>
    </div>
  );
}