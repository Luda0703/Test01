import { useSelector, useDispatch } from 'react-redux';
import { getVisibleCars } from '../../Redux/selectors';
import { useState } from 'react';
import { fetchCar } from '../../Redux/carsFetch';
// import { useEffect } from 'react';
// import { HiOutlineHeart } from "react-icons/hi";
// import {
//     plusFavoriteList,
//     minusFavoriteList,
//   } from "../../Redux/favoriveSlise";
import Modal from '../Modal/Modal';
import './styles.css';

const CarsList = () => {
  const [showModal, setShowModal] = useState(false);
  // const favorite = useSelector((state) => state.favorite);

  const cars = useSelector(getVisibleCars);

  const dispatch = useDispatch();

  const [visible, setVisible] = useState(8);
  // const idCar = cars.map((item) => item.id)
  // const favoriteStatus = favorite.includes(idCar);

  // const incrementFavorite = () => {
  //     dispatch(plusFavoriteList(idCar));
  //   };
  //   const decrementFavorite = () => {
  //     dispatch(minusFavoriteList(idCar));
  //   };

  const toggleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 8);
  };

  return (
    <div className="div_container">
      <ul className="container_cards">
        {cars
          .slice(0, visible)
          .map(
            ({
              img,
              make,
              type,
              year,
              rentalPrice,
              model,
              id,
              address,
              rentalCompany,
              mileage,
              accessories,
            }) => (
              <li key={id} className="card">
                <div className="image">
                  <img className="image_car" src={img} alt="car" />
                  {/* <button
          onClick={!favoriteStatus ? incrementFavorite : decrementFavorite}
          className='buttonHeart'
        >
          {!favoriteStatus ? (
            <HiOutlineHeart className='icon' />
          ) : (
            <HiOutlineHeart
              className='icon'
              style={{ fill: "blue", color: "blue" }}
            />
          )}
        </button> */}
                </div>
                <div className="wrapper">
                  <p className="type_car">
                    {make} <span style={{ color: '#3470FF' }}>{model}</span>,{' '}
                    {year}
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
                  // onClick={toggleModal}
                  // onClick={() => dispatch(fetchCar(id))}
                >
                  Learn more
                </button>
              </li>
            )
          )}
      </ul>

      {showModal && <Modal onClose={closeModal} />}
      <div>
        <button className="btn_load_more" type="button" onClick={showMoreItems}>
          Load more
        </button>
      </div>
    </div>
  );
};

export default CarsList;
