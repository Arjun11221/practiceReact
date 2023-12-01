import RestaurentCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.763089020178832&lng=77.26507069360963&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // console.log(json);
    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  if(listOfRes.length===0) return <Shimmer/>;

  return(
    <div className="body">
      <div className="search-box">
        <input
          type="text"
          className="search"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const searchList = listOfRes.filter((res) => 
              res.info.name.toLowerCase().includes(search.toLowerCase())
            );
            setFilterRes(searchList);
          }}
        >
          Search
        </button>
      </div>
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filterList = listOfRes.filter(
              (res) => res.info.avgRating > 4
            );
            setFilterRes(filterList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filterRes.map((restaurent) => (
          <Link to={"/restaurant/"+restaurent.info.id} key={restaurent.info.id} ><RestaurentCard resData={restaurent} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
