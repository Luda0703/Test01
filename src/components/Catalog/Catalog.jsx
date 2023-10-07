import './styles.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect} from 'react';
// import { addCar } from '../../Redux/carsFetch';
// import { getVisibleCars } from '../../Redux/selectors';
// import { Loader } from 'components/Loader/Loader';
// import useCars from '../hooks/useCars';
// import CarsList from '../CarsList/CarsList'
import CarsList from '../CarsList/CarsList';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../Redux/carsFetch';
import { useEffect } from 'react';
import { getIsLoading, getError} from '../../Redux/selectors';
import { getFilter } from '../../Redux/selectors';
import { setStatusFilter } from '../../Redux/filtersSlice';

function Catalog () {
    const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    useEffect(() => {
      dispatch(fetchCars());
    }, [dispatch]);
    

    // const handleSubmit = e => {
    //     e.preventDefault();
    //     const form = e.target;
    //     const make = form.elements.make.value;
    //     const rentalPrice = form.elements.number.value;
    //     const mileage = form.elements.mileage.value;
    //     const km = form.elements.km.value;
    //     dispatch(addCar({ make, rentalPrice, mileage, km}));
    //     form.reset();
    //   };
    
    //   const addContactFind = ({ name, phone }) => {
    //     if (
    //       contacts.find(
    //         item =>
    //           item.name.toLowerCase() === name.toLowerCase() || item.phone === phone
    //       )
    //     ) {
    //     //   return Notiflix.Notify.info(`${name} or ${phone} is already in contacts`);
    //     }
    
    //     dispatch(addCar({ name, phone }));
    //   };

    return (
        <div className="container">
          <form  
          className="container_search" 
        //   onSubmit={handleSubmit}
       
          >
            <div className="cont_label_one">
            
              <label className="lb_input">
                Car brand
                <input
                  type='text'
                  value={filter}
                //   value={cars.make}
                //   name='make'
                onChange={e => dispatch(setStatusFilter(e.currentTarget.value))}
                  placeholder="Enter the text"
                  className="input_one"
                />
              </label>
            </div>
            <div className="cont_label_two">
              <label className="lb_input">
                Price/ 1 hour
                <input 
                type='text' 
                value={filter}
                onChange={e => dispatch(setStatusFilter(e.currentTarget.value))}
                // value={cars.rentalPrice} 
                // name='rentalPrice'
                placeholder="To $" 
                className="input_two" />
              </label>
            </div>
            <div className="cont_label_three ">
              <label className="lb_input">
                Сar mileage / km
                <div className="cont_input">
                  <input 
                  type='test' 
                  placeholder="From" 
                  value={filter}
                  onChange={e => dispatch(setStatusFilter(e.currentTarget.value))}
                //   value={cars.mileage}
                //   name='mileage'
                  className="input_three" />
                  <input 
                //   value={cars.km}
                value={filter}
                onChange={e => dispatch(setStatusFilter(e.currentTarget.value))}
                //   name='km'
                  type='test' 
                  placeholder="To" 
                  className="imput-four" />
                </div>
              </label>
            </div>
            <button type="submit" className="btn">
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