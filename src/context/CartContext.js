import React, { useReducer } from 'react';

export const CartContext = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => { },
  removeItem: (id) => { },
});

const initialState = {
  items: [],
  totalAmount: 0
};

const cartReducer = (state, action) => {
  if (action.type === 'ADD') {
    const updatedAmount = state.totalAmount + action.item.price * action.item.amount;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
    return {
      items: updatedItems,
      totalAmount: updatedAmount
    };
  }

  if (action.type === 'REMOVE') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existingItem = state.items[existingCartItemIndex];
    const updatedAmount = state.totalAmount - existingItem.price;
    let updatedItems;
    
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter(item => item.id !== action.id);
    } else {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalAmount: updatedAmount
    };
  }

  return initialState
}

const CartProvider = ({ children }) => {

  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  const removeItemHandler = (id) => {
    dispatchCart({ type: 'REMOVE', id: id })
  };

  const addItemHandler = (item) => {
    dispatchCart({ type: 'ADD', item: item })
  };

  return <CartContext.Provider value={{
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }}>
    {children}
  </CartContext.Provider>
}

export default CartProvider;