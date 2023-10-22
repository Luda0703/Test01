import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchCar } from '../../Redux/carsFetch';
import { HiOutlineHeart } from 'react-icons/hi';
import { getFavorite } from '../../Redux/selectors';
import { toggleFavorites } from 'Redux/favoriveSlise';
import Modal from '../Modal/Modal';
import './styles.css';

const CarsList = ({
  model,
  make,
  id,
  img,
  year,
  address,
  rentalPrice,
  rentalCompany,
  type,
  functionalities,
  fuelConsumption,
  engineSize,
  description,
  accessories,
  rentalConditions,
  mileage,
  city,
}) => {
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();

  const favorite = useSelector(getFavorite);

  const isExists = favorite.some(c => c.id === id);

  const toggleFavoritesCars = id => {
    dispatch(toggleFavorites({ id }));
  };

  const toggleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="">
      <ul className="card_ul">
        <li key={id} className="card">
          <div className="image">
            <img className="image_car" src={img} alt="car" />
            <button
              onClick={() => {
                toggleFavoritesCars(id);
              }}
              className="buttonHeart"
            >
              {!isExists ? (
                <HiOutlineHeart className="icon" />
              ) : (
                <HiOutlineHeart
                  className="icon"
                  style={{ fill: 'blue', color: 'blue' }}
                />
              )}
            </button>
          </div>
          <div className="wrapper">
            <p className="type_car">
              {make} <span style={{ color: '#3470FF' }}>{model}</span>, {year}
            </p>
            <p className="type_car">{rentalPrice}</p>
          </div>
          <ul className="address_car">
            <li>{address.split(',')[1]}</li>
            <li>{address.split(',')[2]}</li>
            <li>{rentalCompany}</li>
            <li>{type}</li>
            <li>{model}</li>
            <li>{mileage}</li>
            <li>{accessories[0]}</li>
          </ul>
          <button
            className="btn"
            type="button"
            onClick={() => {
              toggleModal();
              dispatch(fetchCar(id));
            }}
          >
            Learn more
          </button>
        </li>
      </ul>

      {showModal && <Modal 
      onClose={closeModal} 
      data={{
        make,
        year,
        rentalPrice,
        address,
        rentalCompany,
        type,
        accessories,
        mileage,
        model,
        id,
        fuelConsumption,
        engineSize,
        description,
        functionalities,
        img,
        rentalConditions,
    city,
      }}
      />}
    </div>
  );
};

export default CarsList;
