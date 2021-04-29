import { useContext } from 'react';
import './CactusCard.css';
import Form from '../Form/Form';
import { CartContext } from '../../context/CartContext';

const CactusCard = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  const cartCtx = useContext(CartContext);

  const addToCartHandler = amount => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    });
  }
  return (
    <li className='card'>
      <div className='card__wrapper'>
        <img className='card__image' src={props.image_url} alt={props.name} />
        <div>
          <h3 className='card__title'>{props.name}</h3>
          {/* <div className='card__description'>{props.description}</div> */}
          <div className='card__price'>{price}</div>
        </div>
      </div>
      <div>
        <Form onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default CactusCard;