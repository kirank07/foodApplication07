import RestaurantCard, {WithPromotedLabel} from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MENU_API_ALL,POPULAR_CUISINES } from "../utils/constants/";

const Search = () => {
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredListRestaurant, setFilteredListRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [popularCuisines,setPopularCuisines] = useState([]);
    const [popularText,setPopularText] = useState("");
useEffect(() => {
    fetchData();
    fetchPopularCuisines();
}, []);

const fetchPopularCuisines = async () =>{
    const data = await fetch(POPULAR_CUISINES);
    const json = await data.json();
    setPopularText(json?.data?.cards[1]?.card?.card?.header.title);
    setPopularCuisines(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.info);
}

const fetchData = async () => {
    const data = await fetch(MENU_API_ALL);
    const json = await data.json();
    setListOfRestaurants(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
};

const status = useOnlineStatus();

if (status === false) {
    return (
    <h1>
        Looks like you are offline!! Please check your internet connection
    </h1>
    );
}

useEffect(() => {
    handleSearch(); // Update filtered results on search text change
}, [searchText]);

const handleSearch = () => {
    if(searchText.trim() === ""){
        setFilteredListRestaurant([]);
    }else{
    const filteredListRestaurant = listOfRestaurants.filter(
        (res) =>
        res.info?.name?.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredListRestaurant(filteredListRestaurant);
    }
};

return (
    <div className="body m-20">
        <div className="filter justify-center">
            <div className="relative w-full flex">
                <input
                type="search"
                id="search-dropdown"
                className="h-12 block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-100 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:border-orange-500"
                placeholder="Search for restaurants and food"
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                />
            </div>
        </div>
        <div className="flex flex-wrap m-10">
        {popularText}
        {popularCuisines.length===0 ? (
            <h1>Cuisines not available</h1>
        ) : (
            
            popularCuisines.map((cuisine) => (
                console.log(cuisine)
            ))
        )} 
        {filteredListRestaurant.length === 0 ? (
         <h1></h1>
            ) : (
            filteredListRestaurant.map((restaurant) => (
                <Link
                key={restaurant?.info.id}
                to={"/restaurant/" + restaurant?.info.id}
                >
                {restaurant?.info.promoted ? (
                    <RestaurantCardPromoted resData={restaurant?.info} />
                  ) : (
                    <RestaurantCard resData={restaurant.info} />
                  )}
                </Link>
            ))
            )}
        </div>
    </div>
);
};

export default Search;