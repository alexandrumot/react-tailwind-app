import mountains from "../images/mountains.png";
import Register from "../components/forms/Register";
import Login from "../components/forms/Login";
import { useState } from "react";

function Auth() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <form className="bg-clr-card shadow-lg rounded-3xl mb-4 w-2S/5 h-2/3 flex flex-wrap flex-col">
      <ul className="flex pl-10 pt-10">
        <li className="mr-6">
          <p className="transition cursor-pointer text-white px-2 border-b-4 border-clr-accent border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 focus:outline-none" onClick={() => setIsLoggedIn(false)}>Register</p>
        </li>
        <li className="mr-6">
          <p className="transition cursor-pointer text-white px-2 border-b-4 border-clr-accent border-opacity-0 hover:border-opacity-100 focus:border-opacity-100 focus:outline-none" onClick={() => setIsLoggedIn(true)}>Login</p>
        </li>
      </ul>
        {isLoggedIn ?
          <Login />
          :
          <Register />
        }
      <img src={mountains} alt="Mountains" className="object-cover h-full w-1/2 object-left rounded-r-3xl"/>
    </form>
  );
}

export default Auth;