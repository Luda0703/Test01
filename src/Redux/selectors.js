export const getCars = state => state.cars.items;
export const getSingleCar = state => state.cars.singleCar;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.cars.isLoading;
export const getError = state => state.cars.error;

export const getVisibleCars = ({ cars: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(cars =>
    cars.make.toLowerCase().includes(filter.toLowerCase() || cars.rentalPrice.toLowerCase().includes(filter.toLowerCase())
  ));
};