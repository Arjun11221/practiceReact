import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-5 p-5">
      <h1 className="text-4xl font-semibold">Cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="m-4 p-2 flex text-right  bg-fuchsia-700 text-white rounded-md "
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        <hr className="border-red-950" ></hr>
        {cartItems.length === 0 ? (
          <h2 className="text-2xl font-semibold m-4">
            Cart is Empty!! Go to home page and Cart...
          </h2>
        ) : (
          <ItemList items={cartItems} />
        )}
      </div>
    </div>
  );
};

export default Cart;
