import resList from "./utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container">
                {
                    resList.map((res) => {
                        return <RestaurantCard key={res.data.id} resData={res} />
                    })
                }
            </div>
        </div>
    );
};

export default Body;