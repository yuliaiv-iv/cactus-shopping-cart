import { Fragment } from 'react';
import ImageWrapper from '../../images/main.jpg'
import Button from '../Button/Button';
import './Header.css';

const Header = ({ showCartHandler }) => {
  return (
    <Fragment>
      <header className='header'>
        <h1>Cactus World</h1>
        <Button
          showCartHandler={showCartHandler}
        />
      </header>
      <div className='header__wrapper'>
        <img
          className='header__image'
          src={ImageWrapper}
          alt='cactuses in the room'
        />
      </div>
    </Fragment>
  );
};

export default Header;