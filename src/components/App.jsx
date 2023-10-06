import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
// import Home from './Home/Home';
// import {Catalog} from './Catalog/Catalog';
// import {Favorites} from './Favorites/Favorites';

// const HomePage = lazy(() => import('./Home/Home'));
const CatalogPage = lazy(() => import('./Catalog/Catalog'));
const FavoritesPage = lazy(() => import('./Favorites/Favorites'))

export const App = () => {
 

  return (
    // <>
    // <Home/>
    // </>
    
    <Routes>
      {/* <Route path='/' element={<HomePage/>}/> */}
      <Route path='/' element={<CatalogPage/>}/>
      <Route path='/favorites' element={<FavoritesPage/>}/>
    </Routes>
  );
};
