import { Route, Routes } from 'react-router-dom';
import { lazy } from 'react';
import Layout from './Layout/Layout';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../Redux/carsFetch';
// import {actions} from '../Redux/favoriveSlise'

import {
  getFavorite,
  getCars,
} from '../Redux/selectors';
import './App.module.css';

const HomePage = lazy(() => import('./Home/Home'));
const CatalogPage = lazy(() => import('./Catalog/Catalog'));
const FavoritesPage = lazy(() => import('./Favorites/Favorites'));

export const App = () => {
  const cars = useSelector(getCars);
  const favoriteCars = useSelector(getFavorite)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage cars={cars} favoriteCars={favoriteCars}/>} />
        <Route path="/favorites" element={<FavoritesPage />} />
        <Route path="*" element={<HomePage />} />
      </Route>
    </Routes>
  );
};
