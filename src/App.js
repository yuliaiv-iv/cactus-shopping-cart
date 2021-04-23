import { Fragment, useState } from 'react';
import './App.css';
import Main from './components/Main/Main';
import Header from './components/Header/Header';
import Cart from './components/Cart/Cart';
import CartProvider from './context/CartContext';

console.log(CartProvider)

function App() {

  const [cartShown, setCartShown] = useState(false);

  const showCartHandler = () => {
    setCartShown(true);
  }

  const hideCartHandler = () => {
    setCartShown(false);
  }

  return (
    <CartProvider>
      {cartShown &&
        <Cart
          hideCartHandler={hideCartHandler}
        />}
      <Header
        showCartHandler={showCartHandler}
      />
      <Main />
    </CartProvider>
  );
}

export default App;
