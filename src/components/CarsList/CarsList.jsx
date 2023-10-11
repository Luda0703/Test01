import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchCar } from '../../Redux/carsFetch';
import { HiOutlineHeart } from 'react-icons/hi';
import { getFavorite } from '../../Redux/selectors';
import { plusFavoriteList, minusFavoriteList } from '../../Redux/favoriveSlise';
import Modal from '../Modal/Modal';
import './styles.css';

const CarsList = ({ cars }) => {
  const [showModal, setShowModal] = useState(false);
  const favorite = useSelector(getFavorite);
  const dispatch = useDispatch();

  //   const car = useSelector(getSingleCar);
  const favoriteStatus = favorite.includes(cars.id);

  const [visible, setVisible] = useState(8);

  const incrementFavorite = () => {
    dispatch(plusFavoriteList(cars.id));
  };
  const decrementFavorite = () => {
    dispatch(minusFavoriteList(cars.id));
  };

  const toggleModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const showMoreItems = () => {
    setVisible(prevValue => prevValue + 8);
  };

  const showLike = !favoriteStatus ? incrementFavorite : decrementFavorite;

  return (
    <div className="container_list_map">
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
                  <button
                    onClick={() => {
                      dispatch(fetchCar(id));
                      showLike();
                    }}
                    //   onClick={!favoriteStatus ? incrementFavorite : decrementFavorite}
                    className="buttonHeart"
                  >
                    {!favoriteStatus ? (
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
                >
                  Learn more
                </button>
              </li>
            )
          )}
      </ul>

      <button className="btn_load_more" type="button" onClick={showMoreItems}>
        Load more
      </button>

      {showModal && <Modal onClose={closeModal} />}
    </div>
  );
};

export default CarsList;
