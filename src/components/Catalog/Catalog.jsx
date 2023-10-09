import './styles.css';
import CarsList from '../CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../Redux/carsFetch';
import { useEffect } from 'react';
import { getIsLoading, getError } from '../../Redux/selectors';
// import { getFilter } from '../../Redux/selectors';
import { setStatusFilter } from '../../Redux/filtersSlice';
import { getVisibleCars } from '../../Redux/selectors';

function Catalog() {
    const cars = useSelector(getVisibleCars);
 const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
//   const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  const handleSubmite = (e) => e.preventDefault();

  return (
    <div className="container">
      <form
        className="container_search"
        onSubmit={handleSubmite}
      >
        <div className="cont_label_one">
          <label for='make' className="lb_input">
            Car brand </label>
            <select
            id='make'
              name="make"
              className="input_one"
              onChange={e => dispatch(setStatusFilter(e.currentTarget.value))}
            //   value={filter}
            >
                {cars.map(({make}) => (
                    <option>{make}</option>
                ))}
            </select>
          
        </div>
        <div className="cont_label_two">
          <label for="rentalPrice" className="lb_input">Price/ 1 hour</label>
            <select
              id="rentalPrice"
              name="rentalPrice"
            //   placeholder="To $"
              className="input_two"
            //   value={filter}
            >
                {cars.map(({rentalPrice}) => (
                    <option>{rentalPrice}</option>
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
                // value={filter}
              />
              <input
                name="km"
                type="text"
                placeholder="To"
                className="imput-four"
                // value={filter}
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
