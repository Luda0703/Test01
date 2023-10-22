import CarsList from "components/CarsList/CarsList";
import { useState } from "react";
import { useSelector } from "react-redux";
import { selectFilteredCatalogs } from "Redux/selectors";
import './styles.css';

export const Card = () => {
    const cards = useSelector(selectFilteredCatalogs);
    const [visibleCount, setVisibleCount] = useState(8); 
  
    const loadMore = () => {
      setVisibleCount((prevCount) => prevCount + 8); 
    };
  
    return (
      <>
        <div className="container_cards" >
          {cards.slice(0, visibleCount).map((car) => (
            <CarsList key={car.id} {...car} />
          ))}
          {visibleCount < cards.length && (
            <button
            className="btn_load_more"
              onClick={loadMore}
              style={{ margin: "100px auto", display: "block" }}
            >
              Load more
            </button>
          )}
        </div>
      </>
    );
  };