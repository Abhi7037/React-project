import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
function Navbar() {
  let email = localStorage.getItem("email");
  const logout = () => {
    localStorage.removeItem("email");
    alert("logout");
  };
  return (
    <>
      <nav className="bcg">
        <div className="header">
          <div className="logo ">
            <img
              src="./images/Screenshot__107_-removebg-preview.png"
              alt=""
              className="w-35 h-35"
            />
          </div>
          <div className="profile">
            <button className="btn">
              <Link to="/Login">LOGIN</Link>
            </button>
            <button className="btn">
              <Link to="/Signup">SIGNUP</Link>
            </button>
            <button className="btn" onClick={logout}>
              LOGOUT
            </button>
            <button className="btn">
              <Link to="/Admin">ADMIN</Link>
            </button>
          </div>
        </div>
        <div>
          <button className="scroll animate-bounce bg-lime-300 w-40 h-16 text-lg font-semibold font-serif rounded-md items-center text-slate-800">
            SCROLL
          </button>
        </div>
      </nav>
      <div className="containerCard ml-8">
        <div className="card1">
          <img
            src="./images/pexels-hemanth-nirujogi-2555635.jpg"
            alt=""
            className="max-w-sm mt-10 rounded-2xl animate-bounce "
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            THREE BHK
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-44 h-8 rounded-xl ml-24 mt-8  transform hover:scale-110">
              FOR RENT CLICK HERE
            </button>
          </Link>
        </div>
        <div className="card1">
          <img
            src="./images/pexels-chris-goodwin-32870.jpg"
            alt=""
            className="max-w-lg mt-5 rounded-2xl  animate-bounce "
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>
          <Link to="Purchase">
            <button className="bg-cyan-700 text-white w-56 h-8 rounded-xl ml-36  mt-8  transform hover:scale-110">
              FOR PURCHASE CLICK HERE
            </button>
          </Link>
        </div>
        <div className="card1">
          <img
            src="./images/pexels-thorsten-technoman-338504.jpg"
            alt=""
            className="max-w-sm mt-10 rounded-2xl  animate-bounce "
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY AND HOUSE
          </h3>
          <button className="bg-cyan-700 text-white w-44 h-8 rounded-xl ml-24 mt-8  transform hover:scale-110">
            FOR SELL CLICK HERE
          </button>
        </div>
      </div>
    </>
  );
}

export default Navbar;
