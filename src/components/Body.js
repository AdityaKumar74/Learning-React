import resList from "./utils/mockData";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
    // Local variable - super powerful variable
    const [listOfRestaurant, setListOfRestaurant] = useState(resList)
    
    return (
        <div className="body">
            <div className="filter">
                <button
                    className="filter-btn"
                    onClick={() => {
                        const filteredList = listOfRestaurant.filter( (ev) => {
                            return ev.data.avgRating > 4
                    });
                        setListOfRestaurant(filteredList);
                    }}
                >Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {
                    listOfRestaurant.map((res) => {
                        return <RestaurantCard key={res.data.id} resData={res} />
                    })
                }
            </div>
        </div>
    );
};

export default Body;