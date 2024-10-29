import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
    const { eachCard } = props;
    const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } = eachCard;
    const { slaString } = eachCard?.sla;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="res-logo" src={CDN_URL + cloudinaryImageId} />
            <h3>{name}</h3>
            <h3>{cuisines.join(', ')}</h3>
            <h3>{avgRating} ⭐ </h3>
            <span className="price">{costForTwo}</span>
            <h3>Delivery time - {slaString}</h3>
        </div>
    );
};

export default RestaurantCard;