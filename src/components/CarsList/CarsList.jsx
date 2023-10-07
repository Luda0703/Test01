import { Link, useLocation } from 'react-router-dom';
// import PropTypes from 'prop-types';
// import {Ul} from './MovieList.styled'

const CarsList = ({ cars }) => {
   const location = useLocation();

  return (
    <>
      <ul>
        {cars && cars.map(({ id, title, name, original_title }) => (
          <li key={id}>
            <Link to={`/catalog/${id}`} state={{ from: location}}>
              <h3>{title || name || original_title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </>
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