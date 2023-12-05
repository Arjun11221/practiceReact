import { useState,useEffect } from "react";
const useListOfRes = ()=>{
    const [listOfRes, setListOfRes] = useState([]);
    
    useEffect(()=>{
        fetchData();
    },[]);
    
    const fetchData = async()=>{
        const data = await fetch(
            "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.763089020178832&lng=77.26507069360963&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
          );
        const json = await data.json();
        setListOfRes(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);  
    }
    return listOfRes;
}

export default useListOfRes;