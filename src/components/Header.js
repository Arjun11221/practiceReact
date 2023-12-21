import { Link } from "react-router-dom";
import { LOGO_URL } from "../utils/constant";
import { useContext, useState } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const { logedIn } = useContext(UserContext);

  const cartItems = useSelector((store)=> store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex bg-purple-500 h-36 justify-between shadow-2xl ">
      <div className="logo-container flex ">
        <img className="w-25 h-28 m-4 rounded-xl ml-10 " src={LOGO_URL} />
      </div>
      <div className="nav-items flex">
        <ul className="flex items-center ">
          <li className="px-4 font-semibold text-xl ">
            Status : {onlineStatus ? "✅" : "💀"}
          </li>
          <li className="px-4 font-semibold text-xl ">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-4 font-semibold text-xl ">
            <Link to={"/about"}>About</Link>{" "}
          </li>
          <li className="px-4 font-semibold  text-xl">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-4 font-semibold text-xl">
            <Link to={"/grocery"}>Grocery</Link>
          </li>
          <li className="px-4 font-semibold text-xl">Cart -({cartItems.length} Items) </li>
          <button
            className="login px-4 font-semibold text-xl"
            onClick={() => {
              btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
            }}
          >
            {btnName}
          </button>
          <li className="px-4 font-semibold text-xl text-black ">{logedIn}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
