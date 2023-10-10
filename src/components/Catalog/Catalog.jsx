import './styles.css';
import CarsList from '../CarsList/CarsList';
import { fetchCars } from '../../Redux/carsFetch';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from '../../Redux/selectors';
// import { Loader } from 'components/Loader/Loader';
import { setStatusFilter } from '../../Redux/filtersSlice';
import { getVisibleCars } from '../../Redux/selectors';

function Catalog() {
  const cars = useSelector(getVisibleCars);
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmite = e => e.preventDefault();

  return (
    <div className="container">
      <form className="container_search" onSubmit={handleSubmite}>
        <div className="cont_label_one">
          <label htmlFor="make" className="lb_input">
            Car brand{' '}
          </label>
          <select
            id="make"
            name="make"
            className="input_one"
            onChange={e => dispatch(setStatusFilter(e.currentTarget.value))}
          >
            {cars.map(({ make, id }) => (
              <option key={id}>{make}</option>
            ))}
          </select>
        </div>
        <div className="cont_label_two">
          <label htmlFor="rentalPrice" className="lb_input">
            Price/ 1 hour
          </label>
          <select id="rentalPrice" name="rentalPrice" className="input_two">
            {cars.map(({ rentalPrice, id }) => (
              <option key={id}>{rentalPrice}</option>
            ))}
          </select>
        </div>
        <div className="cont_label_three ">
          <label className="lb_input">
            Сar mileage / km
            <div className="cont_input">
              <input
                type="text"
                placeholder="From"
                name="mileage"
                className="input_three"
              />
              <input
                name="km"
                type="text"
                placeholder="To"
                className="imput-four"
              />
            </div>
          </label>
        </div>
        <button
          type="submite"
          className="butn"
          //   onClick={dispatch(setStatusFilter)}
        >
          Search
        </button>
      </form>
      <CarsList />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
}

export default Catalog;
