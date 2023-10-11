import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { getSingleCar } from '../../Redux/selectors';
import { AiOutlineClose } from 'react-icons/ai';

import './styles.css';

const modalRoot = document.querySelector('#modal-root');

export default function Modal({ onClose }) {
  const car = useSelector(getSingleCar);

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClose = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handleBackdropClose}>
      <div className="overlay">
        <div className="modal">
          <button onClick={onClose} type="button" className="btnClose">
            <AiOutlineClose className="svgClose" />
          </button>
          <img className="imgModal" src={car.img} alt={car.model} />
          <div className="containerTitleModal">
            <ul className="titleModal">
              <li className="marka">{car.make}</li>
              <li className="modal_m">{car.model}</li>
              <li>{car.year}</li>
            </ul>
            <div className="infoModal">
              <div className="infoCarModal">
                <ul className="containerInfoCar">
                  {/* <li >{car.address.split(',')[1]}</li>
                 <li >{car.address.split(',')[2]}</li> */}
                  {/* <li className='infoCar'>{car.city}</li> */}
                  <li className="infoCar">{car.address}</li>
                  <li className="infoCar">id: {car.id}</li>
                  <li className="infoCar">year: {car.year}</li>
                  <li className="infoCar">type: {car.type}</li>
                  <li className="infoCar">
                    Fuel Consumption: {car.fuelConsumption}
                  </li>
                  <li className="infoCar">Engine Size: {car.engineSize}</li>
                </ul>
              </div>
              <div className="description">{car.description}</div>
              <p className="Accessories">Accessories and functionalities:</p>
              <ul className="AccessoriesInfo">
                {/* {car.accessories.map((item, index) => (
                 <li className='accessoriesInfoList' key={index}>
                   {item}
                 </li>
               ))} */}
                {/* {car.functionalities.map((item, index) => (
                 <li className='accessoriesInfoList' key={index}>
                   {item}
                 </li>
               ))} */}
              </ul>
              <div>
                <p className="rentalCredition">Rental Conditions:</p>
                <ul className="list_item">
                  <li className="item">
                    Minimum age:{' '}
                    <span className="item_span">
                      {new Date().getFullYear() - car.year}
                    </span>
                  </li>
                  {/* <li className='item'>
                  {car.rentalConditions.split('\n')[1]}
                </li> */}
                  {/* <li className='item'>
                  {car.rentalConditions.split('\n')[2]}
                </li> */}
                  <li className="item">
                    Mileage:{' '}
                    {/* <span className='item_span'>
                    {car.mileage.toLocaleString('en-US')}
                  </span> */}
                  </li>
                  <li className="item">
                    Price: <span className="item_span">{car.rentalPrice}</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <a href="tel:+380730000000" className="RentalCar">
            <span>Rental car</span>
          </a>
        </div>
      </div>
    </div>,
    modalRoot
  );
}
