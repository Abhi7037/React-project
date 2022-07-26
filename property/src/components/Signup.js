import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./comp.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  const inputHandler = (e) => {
    const name = e.target.name;  
    const value = e.target.value;  
   setUser({ ...user, [name]: value }); 
  };
  const submitHandler = (e) => {
    const baseUrl = "http://localhost:5500/user";
    e.preventDefault();
    if (
      user.username &&
      user.email &&   
      user.password
    ) {
      axios.post(baseUrl, user).then((res) => {
        alert("register");
     });
      setUser({
        username: "",    
        email: "",
        password: "",
      });
    } else {
      toast("all fields are required");
    }
  };

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
        {/* -------------------------------------------------------- */}
      </nav>
      <div className="mainFormDiv1">
        <div className="subdiv1">
          <div></div>
          <div className="form1">
            <h2 className="loginHeading">Sign Up </h2>
            <form className="loginform" onSubmit={submitHandler}>
              <div className="input1">
                <label htmlFor="email" className="lebel">
                  User Name
                </label>
                <br />
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  name="username"
                  className="logininput"
                  onChange={inputHandler}
                  // {...register("username", { required: true })}
                />
                  {/* {errors.username && (
                    <span className="text-red-600">*Please Enter YourName</span>
                  )} */}
              </div>

              <div className="input1">
                <label htmlFor="email" className="lebel">
                  Email
                </label>
                <br />
                <input
                  type="email"
                  placeholder="Enter Your Email"
                  name="email"
                  className="logininput"
                  onChange={inputHandler}
                  // {...register("email", { required: true })}
                />
                {/* {errors.email && (
                  <span className="text-red-600">*Please Enter Email</span>
                )} */}
                <br />
              </div>
              <div className="input1">
                <label htmlFor="email" className="lebel">
                  Password
                </label>
                <br />
                <input
                  type="passsword"
                  placeholder="Enter Your Password"
                  name="password"
                  className="logininput"
                  onChange={inputHandler}
                  
                />
                {/* {errors.password && (
                  <span className="text-red-600">*Please Enter Password</span>
                )} */}
              </div>
              <button className="logbtn1">SIGNUP</button>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Signup;
