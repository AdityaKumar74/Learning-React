import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {

  const [listOfRestaurant, setListOfRestaurant] = useState([]);
  const [updatedResList, setUpdatedResList] = useState([]);
  const [resSearch, setResSearch] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.65420&lng=77.23730&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
      const fetchedData = await data.json();
      // Optional chaining
      const finalData = fetchedData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      setListOfRestaurant(finalData);
      setUpdatedResList(finalData);
    } catch (error) {
      console.log(Error("Some error has occured"));
    }
  }

  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <form className="search" onSubmit={(e) => {
          e.preventDefault();
          const filteredResList = listOfRestaurant.filter((e) => {
            return e.info.name.toLowerCase().includes(resSearch.toLowerCase());
          });
          setUpdatedResList(filteredResList);
        }}>
          <input type="text" placeholder="search restaurant" value={resSearch} onChange={(e) => {
            setResSearch(e.target.value);
          }} />
          <button type="submit">search</button>
        </form>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurant.filter((ev) => {
              return ev.info.avgRating >= 4.3;
            });
            setUpdatedResList(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {updatedResList.map((res) => {
          return <RestaurantCard key={res.info.id} eachCard={res.info} />;
        })}
      </div>
    </div>
  );
};

export default Body;