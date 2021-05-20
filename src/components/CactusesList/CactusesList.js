// import { data } from '../../utils/data';
import { useEffect, useState } from 'react';
import CactusWrapper from '../CactusWrapper/CactusWrapper';
import CactusCard from '../CactusCard/CactusCard';
import './CactusesList.css';

const CactusesList = () => {

  const [loadedData, setLoadedData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch('https://shopping-cart-be698-default-rtdb.firebaseio.com/cactuses.json')
    .then((res) => {
      if (res.ok) {
          return res.json()
      }
      return Promise.reject(`${res.status}`);
    })
    .then((data) => {
      const fetchedData = [];
      for (const key in data) {
        fetchedData.push({
          id: key,
          name: data[key].name,
          image_url: data[key].image_url,
          price: data[key].price,
        })
      }
      setLoadedData(fetchedData);
    })
    .finally(() => {
      setIsLoading(false);
    })
  }, [])

  if (isLoading) {
    return (
      <section>
        <p className='cactuses__loading'>Loading...</p>
      </section>
    )
  }

  const cactusList = loadedData.map((c) => (
    <CactusCard
      key={c.id}
      id={c.id}
      name={c.name}
      image_url={c.image_url}
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