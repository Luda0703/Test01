import { useSelector } from 'react-redux';
import { getCars } from '../../Redux/selectors';
import CarsList from 'components/CarsList/CarsList';

function Favorites() {
  const cars = useSelector(getCars);

  const favorite = useSelector(state => state.favorite);

  const cardsId = (cards, favorite) =>
    cards.filter(c => favorite.some(f => c.id === f.id));

  return (
    <div className="container">
      <div className="container_cards">
        {favorite.length > 0 ? (
          cardsId(cars, favorite).map(c => <CarsList key={c.id} {...c} />)
        ) : (
          <h2
            style={{
              display: 'flex',
              justifyContent: 'center',
              fontWeight: '700',
              fontSize: '36px',
            }}
          >
            {' '}
            No cards{' '}
          </h2>
        )}
      </div>
    </div>
  );
}

export default Favorites;
