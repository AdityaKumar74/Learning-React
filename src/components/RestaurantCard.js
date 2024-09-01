import { CDN_URL } from "./utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;
    const { cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime } = resData?.data;
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img
                className="res-logo"
                alt="reslogo"
                src={CDN_URL + cloudinaryImageId}
            />
            <h3>{name}</h3>
            <h3>{cuisines.join(", ")}</h3>
            <h3>{avgRating} Star </h3>
            <span className="price"> <span className="price-sign">₹</span> {costForTwo / 100} for two</span>
            <h3>{deliveryTime} mins</h3>
        </div>
    );
};

export default RestaurantCard;