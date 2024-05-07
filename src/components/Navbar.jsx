import React from "react";
import logo from "../../src/Netflix-Logo.png";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
function Navbar() {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex justify-between items-center p-4 z-[100] absolute w-full ">
      <Link to="/">
        <img className="w-25 h-20" alt="logo" src={logo} />
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className=" pr-4  cursor-pointer text-white">
              Account
            </button>
          </Link>

          <button
            onClick={handleLogout}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white"
          >
            Logout
          </button>
        </div>
      ) : (
        <div>
          <Link to="/login">
            <button className=" pr-4  cursor-pointer text-white">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}

export default Navbar;
