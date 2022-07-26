import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./comp.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AddProperty = () => {
  const [admin, setUser] = useState({
    Propertytype:"",
    OWNERNAME: "",
    PURPOSE: "",
    ADDRESS: "",
    RATE: "",
  });
  const changeHandle = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...admin, [name]: value });
  };
  const submitProperty = (e) => {
    const addUrl = "http://localhost:3400/property";
    e.preventDefault();
    if (admin.Propertytype && admin.OWNERNAME && admin.PURPOSE && admin.ADDRESS && admin.RATE) {
      axios.post(addUrl, admin).then((res) => {
        alert("Property Saved!");
      });
      setUser({
        Propertytype:"",
        OWNERNAME: "",
        PURPOSE: "",
        ADDRESS: "",
        RATE: "",
      });
    } else {
      alert("fill all field!");
    }
  };
  return (
    <>
      <nav className="bg-sky-900 w-120 h-24">
        <Link to="/">
          <img
            src="./images/Screenshot__107_-removebg-preview.png"
            alt=""
            className="w-36"
          />
        </Link>
      </nav>
      <div className="form2 m-auto bg-gray-200 mt-12 rounded">
        <h2 className="text-center text-cyan-900 font-bold text-3xl ">
          ADD PROPERTY
        </h2>
        <form className="mt-12 ml-32 " onSubmit={submitProperty}>
          <label className="text-xl mb-4">PROPERTY TYPE</label> <br />
          <input
            type="text"
            name="Propertytype"
            placeholder="Propertytype"
            className="w-96 h-12 mt-2"
            onChange={changeHandle}
          />{" "}
          <br />
          <label className="text-xl mb-4">OWNER NAME</label> <br />
          <input
            type="text"
            name="OWNERNAME"
            placeholder="OWNERNAME"
            className="w-96 h-12 mt-2"
            onChange={changeHandle}
          />{" "}
          <br />
          <label className="text-xl mb-4">PURPOSE</label> <br />
          <input
            type="text"
            name="PURPOSE"
            placeholder="PURPOSE"
            className="w-96 h-12 mt-2"
            onChange={changeHandle}
          />{" "}
          <br />
          <label className="text-xl mb-4">ADDRESS</label> <br />
          <input
            type="text"
            name="ADDRESS"
            placeholder="ADDRESS"
            className="w-96 h-12 mt-2"
            onChange={changeHandle}
          />{" "}
          <br />
          <label className="text-xl mb-4 mt-2 p-2">RATE</label> <br />
          <input
            type="text"
            name="RATE"
            placeholder="RATE"
            className="w-96 h-12 mt-2"
            onChange={changeHandle}
          />{" "}
          <br />
          <button className="bg-sky-900 w-36 h-12 text-white rounded mt-12 ml-28">
            ADD PROPERTY
          </button>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default AddProperty;
