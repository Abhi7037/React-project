import React, { useState } from "react";
import "./comp.css";
import axios from "axios";
const EditProperty = (props) => {
  const [EditProperty, setEditProperty] = useState({
    Propertytype: "",
    OWNERNAME: "",
    PURPOSE: "",
    ADDRESS: "",
    RATE: "",
  });
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(value);
    setEditProperty({ ...EditProperty, [name]: value });
  };

  const submitHandler = (id) => {
    const baseUrl = "http://localhost:3400/property";

    if (
      EditProperty.Propertytype &&
      EditProperty.OWNERNAME &&
      EditProperty.PURPOSE &&
      EditProperty.ADDRESS &&
      EditProperty.RATE
    ) {
      axios.put(`${baseUrl}/${id}`, EditProperty).then((res) => {
        console.log(res);
      });
      setEditProperty({
        Propertytype: "",
        OWNERNAME: "",
        PURPOSE: "",
        ADDRESS: "",
        RATE: "",
      });

      alert("Event edit successfully");
    } else {
      alert("all fields are required");
    }
  };
  return (
    <>
      <div className="form3 m-auto bg-gray-200 mt-12 rounded">
        <h2 className="text-center text-cyan-900 font-bold text-3xl">
          EDIT PROPERTY DETAILS
        </h2>
        <form className="mt-8 ml-12 " onSubmit={() => submitHandler(props.id)}>
          <label className="text-xl mb-4">PROPERTY TYPE</label> <br />
          <input
            type="text"
            name="Propertytype"
            placeholder="Propertytype"
            className="w-96 h-12 mt-2"
            onChange={inputHandler}
          />
          <br />
          <label className="text-xl mb-4">OWNER NAME</label> <br />
          <input
            type="text"
            name="OWNERNAME"
            placeholder="OWNERNAME"
            className="w-96 h-12 mt-2"
            onChange={inputHandler}
          />
          <br />
          <label className="text-xl mb-4">PURPOSE</label> <br />
          <input
            type="text"
            name="PURPOSE"
            placeholder="PURPOSE"
            className="w-96 h-12 mt-2"
            onChange={inputHandler}
          />
          <br />
          <label className="text-xl mb-4">ADDRESS</label> <br />
          <input
            type="text"
            name="ADDRESS"
            placeholder="ADDRESS"
            className="w-96 h-12 mt-2"
            onChange={inputHandler}
          />
          <br />
          <label className="text-xl mb-4 mt-2 p-2">RATE</label> <br />
          <input
            type="text"
            name="RATE"
            placeholder="RATE"
            className="w-96 h-12 mt-2"
            onChange={inputHandler}
          />
          <br />
          <button className="bg-sky-900 w-36 h-12 text-white rounded mt-4 ml-28">
            EDIT DETAILS
          </button>
        </form>
      </div>
    </>
  );
};

export default EditProperty;
