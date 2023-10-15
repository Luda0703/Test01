import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { fetchCar } from '../../Redux/carsFetch';
import { HiOutlineHeart } from 'react-icons/hi';
// import { getFavorite } from 'Redux/selectors';
// import { getFavorite } from '../../Redux/selectors';
// import { actions } from "Redux/favoriveSlise";
import { plusFavoriteList, minusFavoriteList } from '../../Redux/favoriveSlise';
import Modal from '../Modal/Modal';
import './styles.css';
// import { useAcrions } from 'components/hooks/useActions';
// import { useFavorite } from 'components/hooks/useFavorive';
// import { useFetch } from 'components/hooks/useFetch';


const CarsList = ({ cars, id }) => {
    console.log(cars)
  const [showModal, setShowModal] = useState(false);

  const dispatch = useDispatch();
   
//   const car = useSelector(getSingleCar);
 
  const [visible, setVisible] = useState(8);
  const favorite = useSelector((state) => state.favorite)
//   const favorite = useSelector(getFavorite);
//   console.log(favorite)

// const {toggleFavorites} = useAcrions();

//   const isExists = favorite.some(r => r.id === favoriteCars.id)


    const favoriteStatus = favorite.includes(id);

  const incrementFavorite = () => {
    dispatch(plusFavoriteList(id));
  };
  const decrementFavorite = () => {
    dispatch(minusFavoriteList(id));
  };

//   const showLike = !favoriteStatus ? incrementFavorite : decrementFavorite;

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
                    // onClick={() => {
                    //     // favoriteCars={favoriteCars}
                    //   dispatch(fetchCar(favoriteCars));
                    //   showLike();
                    // }}
                      onClick={!favoriteStatus ? incrementFavorite : decrementFavorite}
                    className="buttonHeart"
                    // onClick={() => dispatch(fetchCar(id))}
                    // onClick={() => toggleFavorites(favoriteCars)}
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
                    cars = {cars}
                    dispatch(fetchCar(id))
                    ;
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
