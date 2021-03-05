import React from 'react';
import { useCart } from "../contexts/useCart"

export default function Product({ product }) {

  const { addItem, countItemInCart, removeItem, findInCart } = useCart();

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
        {countItemInCart(product.sku) > 0 ? (
          <button 
            className="remove"
            onClick={handleRemoveItem}
            // disabled
            >
              Remove
          </button>
        ) : (
          <div />
        )}
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