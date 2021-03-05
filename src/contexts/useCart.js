import React, { createContext, useContext, useReducer } from 'react';
import { products } from '../utils/data';

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

const initialState = { cart: []}

function reducer(state, { type, payload }) {
  switch (type) {
    case "ADD":
      return {
        ...state,
        cart: [
          ...state.cart,
          products.find((p) => p.sku === payload),
        ],
      };
    case "REMOVE":
      const indexCart = state.cart.findIndex(p => p.sku === payload);
      const newCart = [...state.cart];
      newCart.splice(indexCart, 1);
      return { ...state, cart: newCart };
    case "EMPTY":
      return { cart: []};
    default:
      return state;
  }
}

export function CartProvider({children}) {

  const [state, dispatch] = useReducer(reducer, initialState);

  const addItem = (sku)  => dispatch({type: "ADD", payload: sku});
  const removeItem = (sku)  => dispatch({type: "REMOVE", payload: sku});
  const emptyCart = ()  => dispatch({type: "EMPTY" });

  const countItemInCart = (sku) => {
    const itemsInCart = state.cart.filter((p) => p.sku === sku) ?? [];
    return itemsInCart.length;
  }
  const groupItems = () => {
    return state.cart.reduce((newCart, product) => {
      const indexInCart = newCart.findIndex((p) => p.sku === product.sku);
      const isInCart = indexInCart !== -1;
      if (isInCart) {
        newCart[indexInCart].qty = newCart[indexInCart].qty +1
        return newCart
      }
      newCart.push({...product, qty: 1});
      return newCart
    }, [])
  }

  const totalPrice = () => {
    return groupItems().reduce((totalPrice, product) => {
      return totalPrice +(product.price * product.qty);
    }, 0)
  }

  return (
    <CartContext.Provider
      value={{
        addItem,
        removeItem,
        countItemInCart,
        emptyCart,
        groupCardItems: groupItems(),
        cart: state.cart,
        totalPrice: totalPrice(),
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

