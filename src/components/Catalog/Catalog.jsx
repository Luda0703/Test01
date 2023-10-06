import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
// import { useEffect} from 'react';
import { addCar } from '../../Redux/carsFetch';
import { getCars } from '../../Redux/selectors';

function Catalog () {
    const dispatch = useDispatch();
  const cars = useSelector(getCars); 

//   useEffect(() => {
//     dispatch(fetchCars());
//   }, []);
  

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    const make = form.elements.make.value;
    const rentalPrice = form.elements.rentalPrice.value;
    const mileage = form.elements.mileage.value;
    const km = form.elements.km.value;
    dispatch(addCar({ make, rentalPrice, mileage, km }));
    form.reset();
  };

//   const addCarCheeck = ({ name, phone }) => {
//     if (
//       contacts.find(
//         item =>
//           item.name.toLowerCase() === name.toLowerCase() || item.phone === phone
//       )
//     ) {
//       return Notiflix.Notify.info(`${name} or ${phone} is already in contacts`);
//     }

//     dispatch(addCar({ name, phone }));
//   };

    return (
        <div className="container">
          <form  
          className="container_search" 
          onSubmit={handleSubmit}
          >
            <div className="cont_label_one">
            
              <label className="lb_input">
                Car brand
                <input
                  type='text'
                  value={cars.make}
                  name='make'
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
                value={cars.rentalPrice} 
                name='rentalPrice'
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
                  value={cars.mileage}
                  name='mileage'
                  className="input_three" />
                  <input 
                  value={cars.km}
                  name='km'
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
          </div>
      );
}

export default Catalog;