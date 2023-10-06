export const getCars = state => state.cars.items;
export const getFilter = state => state.filter;
export const getIsLoading = state => state.cars.isLoading;
export const getError = state => state.cars.error;

export const getVisibleContacts = ({ cars: { items }, filter }) => {
  if (!filter) {
    return items;
  }
  return items.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
};