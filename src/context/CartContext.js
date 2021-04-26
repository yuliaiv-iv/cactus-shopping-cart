import React, { useReducer } from 'react';

export const CartContext = React.createContext({
  items: [],
  total: 0,
  addItem: (item) => { },
  removeItem: (id) => { },
});

const initialState = {
  items: [],
  total: 0
};

const cartReducer = (state, action) => {
  if(action.type === 'ADD') {
    const updatedTotal = state.total + action.item.price * action.item.total;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    const updatedItems = state.items.concat(action.item);
    return {
      items: updatedItems,
      total: updatedTotal
    }
  }
  return initialState
}

const CartProvider = ({children}) => {

  const [cartState, dispatchCart] = useReducer(cartReducer, initialState);

  const removeItemHandler = (id) => {
    dispatchCart({type: 'REMOVE', item: id})
  };

  const addItemHandler = (item) => {
    dispatchCart({type: 'ADD', item: item})
  };

  return <CartContext.Provider value={{
    items: cartState.items,
    total: cartState.total,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  }}>
    {children}
  </CartContext.Provider>
}

export default CartProvider;