import React from "react";
import { Link } from "react-router-dom";
const Purchase = () => {
  return (
    <>
      <nav className="nav1">
        <div className="header ng-2">
          <div className="logo ">
            <Link to="/">
              <img
                src="./images/Screenshot__107_-removebg-preview.png"
                alt=""
                className="w-25 h-25"
              />
            </Link>
          </div>
          <div className="profile">
            <button className="btn1">
              <Link to="Login">LOGIN</Link>
            </button>
            <button className="btn1">
              <Link to="Signup">SIGNUP</Link>
            </button>
          </div>
        </div>
      </nav>
{/* ------------------------------------------------------------------------------------------------------- */}
      <div className="purchaseContainer  grid grid-cols-3 gap-4 ml-16 mt-12">
        <div className="card1">
          <img
            src="./purchase/pexels-ahmed-abdelaziz-453201.jpg"
            alt=""
            className="max-w-md transform hover:scale-110 h-80 mt-5 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>

          <button className="bg-cyan-700 text-white w-36 h-8 rounded-xl ml-36 mt-8">
          {'\u20B9'}10 lakh/-
          </button>
        </div>
        <div className="card1">
          <img
            src="./purchase/pexels-binyamin-mellish-186077.jpg"
            alt=""
            className="max-w-md transform hover:scale-110 h-80 mt-5 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>

          <button className="bg-cyan-700 text-white w-36 h-8 rounded-xl ml-36 mt-8">
          {'\u20B9'}20 lakh/-
          </button>
        </div>
        <div className="card1">
          <img
            src="./purchase/pexels-binyamin-mellish-1396122.jpg"
            alt=""
            className="max-w-md transform hover:scale-110 h-80 mt-5 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>

          <button className="bg-cyan-700 text-white w-36 h-8 rounded-xl ml-36 mt-8">
          {'\u20B9'}30 lakh/-
          </button>
        </div>
        <div className="card1">
          <img
            src="./purchase/pexels-binyamin-mellish-1396132.jpg"
            alt=""
            className="max-w-md transform hover:scale-110 h-80 mt-5 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>

          <button className="bg-cyan-700 text-white w-36 h-8 rounded-xl ml-36 mt-8">
          {'\u20B9'}50 lakh/-
          </button>
        </div>
        <div className="card1">
          <img
            src="./purchase/pexels-engin-akyurt-3656188.jpg"
            alt=""
            className="max-w-md transform hover:scale-110 h-80 mt-5 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>

          <button className="bg-cyan-700 text-white w-36 h-8 rounded-xl ml-36 mt-8">
          {'\u20B9'}60 lakh/-
          </button>
        </div>
        <div className="card1">
          <img
            src="./purchase/pexels-expect-best-323775.jpg"
            alt=""
            className="max-w-md transform hover:scale-110 h-80 mt-5 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>

          <button className="bg-cyan-700 text-white w-36 h-8 rounded-xl ml-36 mt-8">
          {'\u20B9'}70 lakh/-
          </button>
        </div>
        <div className="card1">
          <img
            src="./purchase/pexels-expect-best-323780.jpg"
            alt=""
            className="max-w-md transform hover:scale-110 h-80 mt-5 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>

          <button className="bg-cyan-700 text-white w-36 h-8 rounded-xl ml-36 mt-8">
          {'\u20B9'}60 lakh/-
          </button>
        </div>
        <div className="card1">
          <img
            src="./purchase/pexels-jessica-bryant-1370704.jpg"
            alt=""
            className="max-w-md transform hover:scale-110 h-80 mt-5 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>

          <button className="bg-cyan-700 text-white w-36 h-8 rounded-xl ml-36 mt-8">
          {'\u20B9'}1 cr/-
          </button>
        </div>
        <div className="card1">
          <img
            src="./purchase/pexels-pixabay-259588.jpg"
            alt=""
            className="max-w-md transform hover:scale-110 h-80 mt-5 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            PROPERTY & HOUSE
          </h3>

          <button className="bg-cyan-700 text-white w-36 h-8 rounded-xl ml-36 mt-8">
          {'\u20B9'}85 lakh/-
          </button>
        </div>
      </div>
    </>
  );
};

export default Purchase;
