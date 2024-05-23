<<<<<<< HEAD
import RestaurantCard, { WithPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { MENU_API_ALL } from "../utils/constants";
import ListMindCard from "./ListMindCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredListRestaurant, setFilterListRestaurant] = useState([]);
  const [listOfMind, setListOfMind] = useState([]);
  const [listOfMindTitle, setListOfMindTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);

  useEffect(() => {
    fetchData();
    fetchListOfMind();
  }, []);

  const fetchData = async () => {
    const data = await fetch(MENU_API_ALL);
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterListRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const fetchListOfMind = async () => {
    try {
      const response = await fetch(MENU_API_ALL);
      const data = await response.json();
      //hconsole.log(data?.data);
      setListOfMindTitle(data?.data?.cards[0]?.card?.card?.header?.title);
      setListOfMind(
        data?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
      );
      setLoading(false);
    } catch (error) {
      console.error("Error fetching listOfMind data: ", error);
      setLoading(false);
    }
  };

  const status = useOnlineStatus();
  if (status === false) {
    return (
      <h1>
        Looks like you are offline!! Please check your internet connection
      </h1>
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className="body">
      {loading ? (
        <Shimmer />
      ) : (
        <>
          <div className="m-6 p-6">
          {/* 
<h1 className="font-bold">{listOfMindTitle}</h1>
                    <Slider {...settings}>
                    <div className="">
                    
                        {listOfMind.map((item) => (
                            <Link key={item.id} to={item?.action?.link}>    
                                <ListMindCard resData={item} />
                            </Link>    
                        ))}
                    
                    </div>
                    </Slider>
*/}
          </div>

          <div className="filter flex justify-center ">
            <div className="m-4 p-4">
              <button
                className="m-2 rounded-md px-6 py-2 bg-black text-orange-400"
                onClick={() => {
                  const filteredListRestaurant = listOfRestaurants.filter(
                    (res) => res.info?.avgRating > 4
                  );
                  setFilterListRestaurant(filteredListRestaurant);
                }}
              >
                Top Rated Restaurants
              </button>
            </div>
          </div>
          <div className="flex flex-wrap">
            {filteredListRestaurant.map((restaurant) => (
              <Link
                key={restaurant?.info.id}
                to={"/restaurant/" + restaurant?.info.id}
              >
                {restaurant?.info?.promoted ? (
                  <RestaurantCardPromoted resData={restaurant?.info} />
                ) : (
                  <RestaurantCard resData={restaurant?.info} />
                )}
              </Link>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Body;

=======
import RestaurantCard, { WithPromotedLabel } from './RestaurantCard';
import { useEffect, useState, useContext } from 'react';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { API } from '../utils/constants';
const Body = () => {
	//local state variable - superpowerful variable
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredListRestaurant, setFilterListRestaurant] = useState([]);
	const [searchText, setSearchText] = useState('');
	const RestaurantCardPromoted = WithPromotedLabel(RestaurantCard);
	const { loggedInUser, setUserName } = useContext(UserContext);
	//console.log(user);
	useEffect(() => {
		fetchData();
	}, []);

	fetchData = async () => {
		const data = await fetch(API);
		const jsonData = await data.json();
		//optional chaining
		setListOfRestaurants(jsonData?.data?.cards[2]?.data?.data?.cards);
		setFilterListRestaurant(jsonData?.data?.cards[2]?.data?.data?.cards);
	};

	const status = useOnlineStatus();
	// console.log(status);
	if (status === false) {
		return (
			<h1>
				Looks like you are offline!! Please check your internet connection
			</h1>
		);
	}

	return listOfRestaurants.length === 0 ? (
		<Shimmer />
	) : (
		<div className='body'>
			<div className='filter flex'>
				<div className='search m-4 p-4'>
					<input
						type='text'
						className='items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700'
						placeholder='search'
						value={searchText}
						onChange={e => {
							setSearchText(e.target.value);
						}}
					></input>
					<button
						className='m-2 rounded-md px-6 py-2 bg-black text-orange-400 '
						onClick={() => {
							const filteredListRestaurant = listOfRestaurants.filter(res =>
								res.data.name.toLowerCase().includes(searchText.toLowerCase())
							);
							setFilterListRestaurant(filteredListRestaurant);
						}}
					>
						Search
					</button>
				</div>
				<div className='m-4 p-4'>
					<button
						className='m-2 rounded-md px-6 py-2 bg-black text-orange-400'
						onClick={() => {
							const filteredListRestaurant = listOfRestaurants.filter(
								res => res.data.avgRating > 4
							);
							setFilterListRestaurant(filteredListRestaurant);
						}}
					>
						Top Rated Restaurants
					</button>
					{/* <input
						type='text'
						className='items-center text-sm leading-6 text-slate-400 rounded-md ring-1 ring-slate-900/10 shadow-sm py-1.5 pl-2 pr-3 hover:ring-slate-300 dark:bg-slate-800 dark:highlight-white/5 dark:hover:bg-slate-700'
						value={loggedInUser}
						onChange={e => setUserName(e.target.value)}
					></input> */}
				</div>
			</div>
			<div className='flex flex-wrap'>
				{filteredListRestaurant.map(restaurant => (
					<Link
						to={'/restaurant/' + restaurant.data.id}
						key={restaurant.data.id}
					>
						{restaurant.data.promoted ? (
							<RestaurantCardPromoted resData={restaurant} />
						) : (
							<RestaurantCard resData={restaurant} />
						)}
					</Link>
				))}
			</div>
		</div>
	);
};

export default Body;
>>>>>>> 253a3b9510704957aca17443cfc49dd76f47f70e
