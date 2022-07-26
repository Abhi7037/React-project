import React from "react";
import { Link } from "react-router-dom";
import "./product.css";
const Rent = () => {
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
              <Link to="/Login">LOGIN</Link>
            </button>
            <button className="btn1">
              <Link to="/Signup">SIGNUP</Link>
            </button>
          </div>
        </div>
      </nav>
        {/* --------------------------------------------------------------------------------- */}
      <div className="maincontainer grid grid-cols-3 gap-4 ml-20 mt-12">
        <div className="card1 hover:transition-all ">
          <img
            src="./rent/pexels-chait-goli-1918291.jpg"
            alt=""
            className="max-w-sm transform hover:scale-110 h-72 mt-10 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            THREE BHK 
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-24 h-8 rounded-xl ml-36 mt-8 ">
             {'\u20B9'}4500/-
            </button>
          </Link>
        </div>
        <div className="card1">
          <img
            src="./rent/pexels-jason-boyd-3209045.jpg"
            alt=""
            className="max-w-sm transform hover:scale-110 h-72 mt-10 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            THREE BHK
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-24 h-8 rounded-xl ml-36 mt-8 ">
            {'\u20B9'}5600/-
            </button>
          </Link>
        </div>{" "}
        <div className="card1">
          <img
            src="./rent/pexels-jean-van-der-meulen-1457842.jpg"
            alt=""
            className="max-w-sm transform hover:scale-110 h-72 mt-10 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            FOUR BHK
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-24 h-8 rounded-xl ml-36 mt-8 ">
            {'\u20B9'}8400/-
            </button>
          </Link>
        </div>{" "}
        <div className="card1">
          <img
            src="./rent/pexels-pixabay-271816.jpg"
            alt=""
            className="max-w-sm transform hover:scale-110 h-72 mt-10 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            THREE BHK
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-24 h-8 rounded-xl ml-36 mt-8 ">
            {'\u20B9'}7500/-
            </button>
          </Link>
        </div>{" "}
        <div className="card1">
          <img
            src="./rent/pexels-vecislavas-popa-1571459.jpg"
            alt=""
            className="max-w-sm transform hover:scale-110 h-72 mt-10 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            TW0 BHK
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-24 h-8 rounded-xl ml-36 mt-8 ">
            {'\u20B9'}6500/-
            </button>
          </Link>
        </div> 
        <div className="card1">
          <img
            src="./rent/pexels-pixabay-276724.jpg"
            alt=""
            className="max-w-sm transform hover:scale-110 h-72 mt-10 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            THREE BHK
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-24 h-8 rounded-xl ml-36 mt-8 ">
            {'\u20B9'}5600/-
            </button>
          </Link>
        </div>{" "}
        <div className="card1">
          <img
            src="./rent/pexels-vecislavas-popa-1571460.jpg"
            alt=""
            className="max-w-sm transform hover:scale-110 h-72 mt-10 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            THREE BHK
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-24 h-8 rounded-xl ml-36 mt-8 ">
            {'\u20B9'}9500/-
            </button>
          </Link>
        </div>
        <div className="card1">
          <img
            src="./rent/pexels-vecislavas-popa-1643383.jpg"
            alt=""
            className="max-w-sm  transform hover:scale-110 h-72 mt-10 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            FIVE BHK
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-24 h-8 rounded-xl ml-36 mt-8 ">
            {'\u20B9'}11500/-
            </button>
          </Link>
        </div>
        <div className="card1">
          <img
            src="./rent/pexels-vecislavas-popa-1743227.jpg"
            alt=""
            className="max-w-sm transform hover:scale-110 h-72 mt-10 rounded-2xl"
          />
          <h3 className="text-xl text-cyan-900 font-bold text-center">
            FIVE BHK
          </h3>
          <Link to="Rent">
            <button className="bg-cyan-700 text-white w-24 h-8 rounded-xl ml-36 mt-8 ">
            {'\u20B9'}15000/-
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Rent;
