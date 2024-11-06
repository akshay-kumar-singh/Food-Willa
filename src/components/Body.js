import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import useFetchRestaurants from "../utils/useFetchRestaurants";
import RestaurantCard, { OpenRestaurantCheck } from "./RestaurantCard";

const Body = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchRestaurant, setSearchRestaurant] = useState("");
    const [page, setPage] = useState(1);  

    const onlineStatus = useOnlineStatus();
    const fetchListOfRestaurants = useFetchRestaurants(page); 

    const OpenRestaurant = OpenRestaurantCheck(RestaurantCard);

    const handleClick = () => {
        setPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        if (fetchListOfRestaurants) {
            setListOfRestaurants((prevRestaurants) => [
                ...prevRestaurants,
                ...fetchListOfRestaurants,
            ]);
            setFilteredRestaurant((prevRestaurants) => [
                ...prevRestaurants,
                ...fetchListOfRestaurants,
            ]);
        }
    }, [fetchListOfRestaurants]);

    if (onlineStatus === false) {
        return <h1>Looks like you're offline! Please check your Internet connection.</h1>;
    }

    return listOfRestaurants.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="mt-24 p-4 font-sans">
            <div className="flex mx-[10.5rem] p-4">
                <input
                    data-testid="searchInput"
                    className="m-4 px-4 py-2 border border-solid border-black text-center rounded-lg"
                    type="text"
                    placeholder="Search Restaurant"
                    value={searchRestaurant}
                    onChange={(event) => {
                        setSearchRestaurant(event.target.value);
                    }}
                />
                <button
                    className="m-4 px-6 py-2 bg-pink-400 text-white rounded-lg hover:bg-gray-600"
                    onClick={() => {
                        const filteredList = listOfRestaurants.filter((restaurant) =>
                            restaurant.info.name
                                .toLowerCase()
                                .includes(searchRestaurant.toLowerCase())
                        );
                        setFilteredRestaurant(filteredList);
                    }}
                >
                    Search
                </button>
                <div className="m-4 px-6 py-2 bg-pink-400 text-white rounded-lg hover:bg-gray-600">
                    <button
                        onClick={() => {
                            const filteredList = listOfRestaurants.filter(
                                (restaurant) => restaurant.info.avgRating > 4.5
                            );
                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurants
                    </button>
                </div>
            </div>

            <div className="flex flex-wrap justify-center mx-10">
                {filteredRestaurant.map((restaurant) => (
                    <Link to={`/restaurants/${restaurant.info.id}`} key={restaurant.info.id}>
                        <OpenRestaurant data={restaurant} isOpen={restaurant.info.isOpen} />
                    </Link>
                ))}
            </div>
            <div className="flex justify-center p-4 my-4 bg-pink-500 text-white hover:bg-gray-700 hover:cursor-pointer rounded-lg w-2/12 m-auto">
                <button onClick={handleClick}>Show More Restaurants</button>
            </div>
        </div>
    );
};

export default Body;
