import { useSelector } from 'react-redux';

export const useFavorite = () => {
    const {favorite} = useSelector(state => state);

    return {favorite}
}