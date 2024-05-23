<<<<<<< HEAD
import {useEffect, useState} from "react";
import { MENU_API } from "./constants";
const useRestaurant = (resId) =>{
    const [restaurantMenuInfo,setRestaurantMenuInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        console.log(json);
        setRestaurantMenuInfo(json.data);
    };
    return restaurantMenuInfo;
};

=======
import {useEffect, useState} from "react";
import { MENU_API } from "./constants";
const useRestaurant = (resId) =>{
    const [restaurantMenuInfo,setRestaurantMenuInfo] = useState(null);
    useEffect(() => {
        fetchData();
    },[]);

    const fetchData = async () => {
        const data = await fetch(MENU_API+resId);
        const json = await data.json();
        setRestaurantMenuInfo(json.data);
    };

    return restaurantMenuInfo;
};

>>>>>>> 253a3b9510704957aca17443cfc49dd76f47f70e
export default useRestaurant;