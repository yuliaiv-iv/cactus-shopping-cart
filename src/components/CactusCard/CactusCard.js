import './CactusCard.css';
import Form from '../Form/Form';

const CactusCard = (props) => {
  const price = `$${props.price.toFixed(2)}`;


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
        <Form />
      </div>
    </li>
  );
};

export default CactusCard;