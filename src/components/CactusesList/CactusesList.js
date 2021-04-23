import { data } from '../../utils/data';
import CactusWrapper from '../CactusWrapper/CactusWrapper';
import CactusCard from '../CactusCard/CactusCard';
import './CactusesList.css';

const CactusesList = () => {
  const cactusList = data.map((c) => (
    <CactusCard
      key={c.sku}
      name={c.name}
      image_url={c.image_url}
      description={c.description}
      price={c.price}
    />
  ));

  return (
    <section className='cactuses'>
      <CactusWrapper>
        <ul className='cactuses__list'>{cactusList}</ul>
      </CactusWrapper>
    </section>
  );
};

export default CactusesList;