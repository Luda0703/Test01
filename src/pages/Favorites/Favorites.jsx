import { useSelector } from 'react-redux';
import { getCars } from '../../Redux/selectors';
import CarsList from 'components/CarsList/CarsList';
import './styles.css';

function Favorites() {
  const cars = useSelector(getCars);

  const favorite = useSelector(state => state.favorite);

  const cardsId = (cards, favorite) =>
    cards.filter(c => favorite.some(f => c.id === f.id));

  return (
    <div className='container'>
      <div className='container_card'>
        {favorite.length > 0 ? (
          cardsId(cars, favorite).map(c => <CarsList key={c.id} {...c} />)
        ) : (
          <div className='text_cont'>
            <h2 className='text'>
            {' '}
            No cards{' '}
          </h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default Favorites;
