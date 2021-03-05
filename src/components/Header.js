import React, { useState, useRef } from 'react';
import cartLogo from "../icons/cart.svg";
import useOnClickOutside from "use-onclickoutside";
import { useCart } from '../contexts/useCart';
import Cart from './Cart';

export default function Header() {

  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef();
  const { cart } = useCart()

  const handleCartOpen = () => {
    setIsOpen(!isOpen);
  };

  useOnClickOutside(modalRef, () => {
    if(isOpen === true) {
      setIsOpen(false);
    }
  })

  return (
    <header>
      <div className="container">
        <div className="cart-button">
          <button onClick={handleCartOpen}>
            <img src={cartLogo} alt="cart" width="30" />({cart.length})
          </button>
          <div ref={modalRef} className={`cart-modal ${isOpen ? "cart-modal-open" : ''}`}>
              <Cart />
          </div>
        </div>
      </div>
    </header>
  );
}