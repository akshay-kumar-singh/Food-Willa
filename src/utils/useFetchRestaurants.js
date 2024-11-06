import { RESTAURANTS } from "./constants";
import { useEffect, useState } from "react";

const useFetchRestaurants = (page) => {
    const [fetchListOfRestaurants, setFetchListOfRestaurants] = useState([]);

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const fetchData = async (page) => {
        try {
            const data = await fetch(`${RESTAURANTS}&page=${page}`);
            const json = await data.json();
            const restaurants = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
            setFetchListOfRestaurants(restaurants);
        } catch (error) {
            console.error("Error fetching restaurants:", error);
        }
    };

    return fetchListOfRestaurants;
};

export default useFetchRestaurants;
