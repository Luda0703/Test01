import { NavLink } from 'react-router-dom';
import {BsFillBookmarkHeartFill} from 'react-icons/bs'
import './styles.css';
import { useFavorite } from 'components/hooks/useFavorive';
import { getFavorite } from 'Redux/selectors';
import { useSelector } from "react-redux";

const Header = () => {
    const favorite = useSelector(getFavorite);
  return (
    <>
      <header>
        <nav>
          <ul className="naw_ul">
            <li className="naw_header">
              <NavLink
                style={{ color: '#191970', textDecoration: 'none' }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li className="naw_header">
              <NavLink
                style={{ color: '#191970', textDecoration: 'none' }}
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
            <li className="naw_header_span">
              <NavLink
                style={{ color: '#191970', textDecoration: 'none' }}
                to="/favorites"
              >
                <BsFillBookmarkHeartFill/>
                <span>{favorite.length}</span>
                
              </NavLink>
            </li>
            </ul>
            
          
        </nav>
      </header>
    </>
  );
};

export default Header;
