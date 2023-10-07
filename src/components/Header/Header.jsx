import { NavLink } from 'react-router-dom';
import './styles.css';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <NavLink
                style={{ color: '#191970', textDecoration: 'none' }}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ color: '#191970', textDecoration: 'none' }}
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
            <li>
              <NavLink
                style={{ color: '#191970', textDecoration: 'none' }}
                to="/favorites"
              >
                Favorites
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Header;
