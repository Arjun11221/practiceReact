import { IMG_URL } from "../utils/constant";

const RestaurentCard = ({resData})=>{
    const {cloudinaryImageId,name,cuisines,avgRating,areaName} = resData.info;
    const {deliveryTime} = resData.info.sla;
    return (
      <div className="m-4 p-4 w-64  bg-zinc-200 rounded-lg ">
        <img className="rounded-t-md" src={IMG_URL+cloudinaryImageId}/>
       <div className="recipe">
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating } Stars </h4>
        <h4>{deliveryTime} mins </h4>
        <h4>{areaName}</h4>
       </div>
      </div>
    )
  }

  export default RestaurentCard;