import { createPortal } from 'react-dom';
import { useEffect } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import PropTypes from 'prop-types';
import './styles.css';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose, data }) {
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
          <img className="imgModal" src={data.img} alt={data.model} />
          <div className="containerTitleModal">
            <ul className="titleModal">
              <li className="marka">{data.make}</li>
              <li className="modal_m">{data.model}</li>
              <li>{data.year}</li>
            </ul>
            <div className="infoModal">
              <div className="infoCarModal">
                <ul className="containerInfoCar">
                  <li>{data.address.split(',')[1]}</li>
                  <li>{data.address.split(',')[2]}</li>
                  <li className="infoCar">{data.city}</li>
                  <li className="infoCar">{data.address}</li>
                  <li className="infoCar">id: {data.id}</li>
                  <li className="infoCar">year: {data.year}</li>
                  <li className="infoCar">type: {data.type}</li>
                  <li className="infoCar">
                    Fuel Consumption: {data.fuelConsumption}
                  </li>
                  <li className="infoCar">Engine Size: {data.engineSize}</li>
                </ul>
              </div>
              <div className="description">{data.description}</div>
              <p className="Accessories">Accessories and functionalities:</p>
              <ul className="AccessoriesInfo">
                {data.accessories.map((item, index) => (
                  <li className="accessoriesInfoList" key={index}>
                    {item}
                  </li>
                ))}
                {data.functionalities.map((item, index) => (
                  <li className="accessoriesInfoList" key={index}>
                    {item}
                  </li>
                ))}
              </ul>
              <div>
                <p className="rentalCredition">Rental Conditions:</p>
                <ul className="list_item">
                  <li className="item">
                    Minimum age:{' '}
                    <span className="item_span">
                      {new Date().getFullYear() - data.year}
                    </span>
                  </li>
                  <li className="item">
                    {data.rentalConditions.split('\n')[1]}
                  </li>
                  <li className="item">
                    {data.rentalConditions.split('\n')[2]}
                  </li>
                  <li className="item">
                    Mileage:{' '}
                    <span className="item_span">
                      {data.mileage.toLocaleString('en-US')}
                    </span>
                  </li>
                  <li className="item">
                    Price: <span className="item_span">{data.rentalPrice}</span>
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

Modal.propTypes = {
    onClose: PropTypes.func.isRequired,
  data: PropTypes.object
};

export default Modal;
