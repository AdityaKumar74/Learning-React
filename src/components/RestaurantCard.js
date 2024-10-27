import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
    const { eachCard } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId, deliveryTime } = eachCard;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} Star </h3>
            <span className="price"> <span className="price-sign">₹</span> {costForTwo} for two</span>
            <h3>{deliveryTime} mins</h3>
        </div>
    );
};

export default RestaurantCard;