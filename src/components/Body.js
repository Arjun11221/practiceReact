import RestaurentCard from "./RestaurantCard";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
// import useListOfRes from "../utils/useListOfRes";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRes, setListOfRes] = useState([]);
  const [search, setSearch] = useState("");
  const [filterRes, setFilterRes] = useState([]);

  // const promotedLabelRestaurant = withPromotedLabel(RestaurentCard);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.763089020178832&lng=77.26507069360963&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();

    setListOfRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilterRes(
      json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1>You are offline Check Your Internet Connection...</h1>;
  }

  const { setName, logedIn } = useContext(UserContext);

  if (listOfRes.length === 0) return <Shimmer />;
  return (
    <div className="body">
      <div className=" flex p-4 m-4 items-center justify-center gap-4 text-black font-medium">
        <input
          type="text"
          data-testid = "searchInput"
          className="border border-black rounded-md outline-none w-96 h-10 p-2 "
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
        <button
          className=" px-4 py-2 bg-purple-400 rounded-lg   "
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
      <div className="flex">
        <div className=" justify-start mx-4 ">
          <button
          data-testid = "top"
            className="px-4 py-3 bg-zinc-800 rounded-lg text-white "
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
        <div className="justify-start">
          <label>Name </label>
          <input
            className="p-2 border border-black outline-none rounded-md"
            value={logedIn}
            onChange={(e)=>setName(e.target.value)}
          />
        </div>
      </div>
      <div className="flex flex-wrap ">
        {filterRes.map((restaurent) => (
          <Link
            to={"/restaurant/" + restaurent.info.id}
            key={restaurent.info.id}
          >
            <RestaurentCard resData={restaurent} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
