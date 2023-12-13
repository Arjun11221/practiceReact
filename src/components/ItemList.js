import { IMG_URL } from "../utils/constant";
const ItemList = ({ items }) => {
  console.log(items);
  return (
    <div>
      {items.map((item) => (
        <div
          className="p-2 m-2 border-gray-300 border-b-2 text-left flex justify-between"
          key={item.card.info.id}
        >
          <div className="w-9/12" >
          <div className="py-2 font-semibold" >
            <span>{item.card.info.name}</span>
            <span> - ₹ {item.card.info.price ? item.card.info.price/100 : item.card.info.defaultPrice/100 }</span>
          </div>
          <p className="text-sm">{item.card.info.description}</p>
        </div>
        <div className="w-3/12 p-4" >
            <div className="absolute " >
                <button className="p-2 mx-11 rounded-lg bg-black text-white shadow-lg " >
                    Add + 
                </button>
            </div>
            <img className=" rounded-lg " src={IMG_URL+item.card.info.imageId}/>
        </div>

        </div>
      ))}
    </div>
  );
}; 

export default ItemList;
