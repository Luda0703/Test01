import './styles.css';
import CarsList from '../CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCars } from '../../Redux/carsFetch';
import {
    // getFavorite,
    getCars,
  } from '../../Redux/selectors';


import {
  getIsLoading,
  getError,
//   getFilter,
} from '../../Redux/selectors';
// import { Loader } from 'components/Loader/Loader';
// import { setStatusFilter } from '../../Redux/filtersSlice';

function Catalog({id}) {
const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
//   const filter = useSelector(getFilter);

  const cars = useSelector(getCars);
//   const favoriteCars = useSelector(getFavorite)
//   console.log(favoriteCars)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <div className="container">
      <form className="container_search">
        <div className="cont_label_one">
          <label htmlFor="make" className="lb_input">
            Car brand{' '}
          </label>
          <select
            id="make"
            name="make"
            className="input_one"
            // value={filter}
            // onChange={e => dispatch(setStatusFilter(e.currentTarget.value))}
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
        <button type="submite" className="butn">
          Search
        </button>
      </form>
      <CarsList 
      cars={cars} 
    //   favoriteCars={favoriteCars}
      id={id}
      />
      {isLoading && <div>Loading...</div>}
      {error && <div>{error}</div>}
    </div>
  );
}

export default Catalog;
