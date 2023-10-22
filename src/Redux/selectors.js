export const getCars = state => state.cars.items;
export const getSingleCar = state => state.cars.singleCar;
export const getFavorite = state => state.favorite;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.cars.isLoading;
export const getError = state => state.cars.error;

export const selectFilteredCatalogs = ({ cars: { items }, filter }) => {
  if (!filter) {
    return items;
  }

  return items.filter((item) =>
    item.name.toLowerCase().includes(filter.toLowerCase())
  );
};

