// import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getVisibleCars } from '../../Redux/selectors';
import { useState } from 'react';
import Modal from '../Modal/Modal'
// import PropTypes from 'prop-types';
// import {Ul} from './MovieList.styled'
import './styles.css';

const CarsList = () => {
    const [showModal, setShowModal] = useState(false);
    // const dispatch = useDispatch();
    const cars = useSelector(getVisibleCars);

    const toggleModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

  return (
    <section>
    <ul className='container_carts'>
    {cars.map(({ img, make, type, year, rentalPrice, id, address, description,
     engineSize, fuelConsumption}) => (
      <li key={id} className='cart'>
        <div className='image'>
        <img className='image_car' src={img} alt='car'/>
        </div>
        <p className='type_car'>
          {make}{type}{year}{rentalPrice}
        </p>
        <p className='address_car'>
        {address}{description}{engineSize}{fuelConsumption}
        </p>
        <button className='btn' type="button" onClick={() => toggleModal()}>
        Learn more
        </button>
      </li>
    ))}
  </ul>
  {showModal && (
        <Modal onClose={closeModal}/>
      )}
  </section>
  );
};

// MovieList.propTypes = {
//     movies: PropTypes.arrayOf(
//       PropTypes.shape({
//         id: PropTypes.number.isRequired,
//         original_title: PropTypes.string,
//       })
//     ).isRequired,
//   };

export default CarsList;