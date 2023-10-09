import { useSelector } from 'react-redux';
import { getVisibleCars } from '../../Redux/selectors';
import { useState } from 'react';
import Modal from '../Modal/Modal'
import './styles.css';

const CarsList = () => {
    const [showModal, setShowModal] = useState(false);
    // const dispatch = useDispatch();
    const cars = useSelector(getVisibleCars);
    const [visible, setVisible] = useState(8);

    const toggleModal = () => {
        setShowModal(true);
      };
    
      const closeModal = () => {
        setShowModal(false);
      };

    const showMoreItems = () => {
        setVisible(prevValue => prevValue + 8);

    }

  return (
    <div>
    <ul className='container_cards'>
    {cars.slice(0, visible).map(({ img, make, type, year, rentalPrice, id, address, rentalCompany}) => (
      <li key={id} className='card'>
        <div className='image'>
        <img className='image_car' src={img} alt='car'/>
        </div>
        <p className='type_car'>
          {make}    {type}     {year}              {rentalPrice}
        </p>
        <p className='address_car'>
        {address}   {type}    {make}    {id}     {rentalCompany}
        </p>
        <button 
        className='btn' 
        type="button" 
        onClick={toggleModal}
        >
        Learn more
        </button>
      </li>
    ))}
    <button className='btn_load_more' type='button' onClick={showMoreItems}>Load more</button>
  </ul>
  {showModal && (
        <Modal onClose={closeModal}/>
      )}
  
  </div>
  
 
//   </section>
  );
};


export default CarsList;