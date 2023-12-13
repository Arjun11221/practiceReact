import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[5]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
     
      <h2 className="my-5 text-2xl font-bold">{name}</h2>
      <p className="text-lg font-medium" >
        {cuisines.join(",")} - {costForTwoMessage}
      </p>

      {
        categories.map((category)=>(
          <RestaurantCategory key={category?.card?.card?.id} data={category?.card?.card} />
        ))
      }
    </div>
  );
};

export default RestaurantMenu;
