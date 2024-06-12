import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  const onlineStatus = useOnlineStatus();

  return (
    <div className="header flex justify-between items-center p-4 bg-white shadow-md">
      <div className="logo-container flex items-center">
        <img className="logo w-16 h-16" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="nav-items"> 
        <ul className="flex space-x-6 items-center text-gray-700">
          <li className="font-medium">
            Online Status: {onlineStatus ? "✅" : "🔴"}
          </li>
          <li>
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="hover:text-blue-500">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-blue-500">
              About Us
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-blue-500">
              Contact Us
            </Link>
          </li>
          <li className="hover:text-blue-500">Cart</li>
          <button
            className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
