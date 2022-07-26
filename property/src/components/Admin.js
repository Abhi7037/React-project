import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import "./comp.css";
import axios from "axios";
import Popup from "reactjs-popup";
import EditProperty  from "../components/EditProperty";
const Admin = (e) => {
  const [data, setEvents] = useState([]);
  const baseURL = "http://localhost:3400/property";

  function getEvents() {
    axios.get(baseURL).then((response) => {
      setEvents(response.data);
    });
  }

  useEffect(() => {
    getEvents();
  }, []);

  const deleteEvents = (id) => {
    axios.delete(`http://localhost:3400/property/${id}`).then((res) => {
      alert("Delete Successfully ");

      getEvents();
    });
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
      <div className="maincontainer">
        <Link to="/AddProperty">
          <button className="float-right bg-sky-900 w-36 h-12 text-white rounded m-5">
            + Add Property
          </button>
        </Link>
      </div>
      <div>
        <table className="ta table-auto border border-slate-500 m-auto mt-24 text-center  ">
          <thead>
            <tr className="h-12 bg-sky-900 text-white">
              <th className="border border-slate-300">S.NO</th>
              <th className="border border-slate-300">Property Type</th>
              <th className="border border-slate-300">OWNER NAME</th>
              <th className="border border-slate-300">PURPOSE</th>
              <th className="border border-slate-300">ADDRESS</th>
              <th className="border border-slate-300">RATE</th>
              <th className="border border-slate-300">DELETE</th>
              <th className="border border-slate-300">EDIT</th>
            </tr>
          </thead>
          {data.map((data, index) => {
            return (
              <tbody>
                <tr className="h-12">
                  <td className="border border-slate-300">{index + 1}</td>
                  <td className="border border-slate-300">
                    {data.Propertytype}
                  </td>
                  <td className="border border-slate-300">{data.OWNERNAME}</td>
                  <td className="border border-slate-300">{data.PURPOSE}</td>
                  <td className="border border-slate-300">{data.ADDRESS}</td>
                  <td className="border border-slate-300">
                    {"\u20B9"}
                    {data.RATE}
                  </td>
                  <td className="border border-slate-300">
                    <button
                      className="bg-sky-900 text-white w-24 h-8 rounded"
                      onClick={() => deleteEvents(data.id)}
                    >
                      DELETE
                    </button>
                  </td>
                  <td className="border border-slate-300">
                    <Popup
                      trigger={
                        <button className="bg-sky-900 text-white w-24 h-8 rounded">
                          EDIT
                        </button>
                      }
                    position="center center"
                    >
                      <EditProperty
                        id={data.id}
                        Propertytype={data.Propertytype}
                        OWNERNAME={data.OWNERNAME}
                        PURPOSE={data.PURPOSE}
                        ADDRESS={data.ADDRESS}
                      />
                    </Popup>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Admin;
