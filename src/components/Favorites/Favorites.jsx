import Catalog from "components/Catalog/Catalog";
// import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
// import { fetchCar, fetchCars } from '../../Redux/carsFetch';
// import { getFavorite } from "Redux/selectors";
// import { getSingleCar } from '../../Redux/selectors';

function Favorites() {
    // const [card, setCard] = useState([])
    // const car = useSelector(getSingleCar);
    // const cars = useSelector(getCars)
    // const favorite = useSelector(getFavorite);
    // const favoriteCars = cars.filter((car) => favorite.includes(car.id));
    const favorite = useSelector((state) => state.favorite)
    // // console.log(carsFavorite)
    // const cardsId = (cars, favorite) =>
    // cars.filter((car) =>
    // favorite.some((favoriteCar) => car.id === favoriteCar.id)
    //  );
    // const dispatch = useDispatch();

    // useEffect(() => {
    //     setCard({favorite})
    // }, [])
    
    // console.log(favorite)

    // useEffect(() => {
        
    //     const arr = Object.entries(favorite)
    
    //     if(arr.length) {
    //         const res = arr.map(item => {
    //             return item.id === favorite
    //         })
    //         console.log('res', res)

    //         setCard(res)
    //     }

    // }, [favorite])

return (
    
    <>
    {/* <Catalog favoriteCars={favoriteCars}/> */}
    {/* {favorite.length > 0 ? (
          cardsId(cars, favorite).map((car) => (
            <Catalog key={car.id} {...car} />
            ))
            ) : (
                <h2> No cards </h2>
            )} */}
    {favorite.length 
    ? <Catalog />
    : <h2 style={{display: 'flex', justifyContent: 'center'}}> No cards </h2> 
    }
    
    </>
)
    
   
}

export default Favorites;


