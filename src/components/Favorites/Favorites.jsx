import Catalog from "components/Catalog/Catalog";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import { getFavorite } from "Redux/selectors";

function Favorites() {
    const [card, setCard] = useState([])
    
    const favorite = useSelector(getFavorite);
    const dispatch = useDispatch();
    
    console.log(favorite)

    useEffect(() => {
        dispatch(setCard(favorite))
        // const arr = Object.entries(favorite)
    
        // if(arr.length) {
        //     const res = arr.map(item => {
        //         return {
        //             id: item[0],
        //             ...item[1]
        //         }
        //     })
        //     console.log('res', res)

        //     setCard(res)
        // }

    }, [])

return (
    <>
    {card.length 
    ? <Catalog card={card}/>
    : <h2> No cards </h2> 
    }
    
    </>
)
    
   
}

export default Favorites;


