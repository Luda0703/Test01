import './styles.css';
// import { useSelector, useDispatch } from 'react-redux';
// import { useEffect} from 'react';
// import { addCar } from '../../Redux/carsFetch';
// import { getCars } from '../../Redux/selectors';
// import { Loader } from 'components/Loader/Loader';
// import useCars from '../hooks/useCars';
// import CarsList from '../CarsList/CarsList'

function Catalog () {
    // const { cars, error, isLoading, setSearchParams } = useCars();

    return (
        <div className="container">
          <form  
          className="container_search" 
        //   setSearchParams={setSearchParams}
          >
            <div className="cont_label_one">
            
              <label className="lb_input">
                Car brand
                <input
                  type='text'
                //   value={cars.make}
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
                // value={cars.rentalPrice} 
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
                //   value={cars.mileage}
                  name='mileage'
                  className="input_three" />
                  <input 
                //   value={cars.km}
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
            {/* <CarsList cars={cars}/> */}
            {/* {isLoading && <Loader />}
            {error && <div>{error}</div>} */}
          </div>
      );
}

export default Catalog;