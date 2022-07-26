import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./comp.css";
import axios from "axios";
 
const Login = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const url = "http://localhost:5500/user";
    axios.get(url).then((res) => {
      const isLogin = res.data.find((userData) => {
        return (
          data.email === userData.email && data.password === userData.password
        );
      });
      if (isLogin) {
        localStorage.setItem("email", data.email);
        alert("Log-In Successfully");
        navigate("/");
      } else {
        alert("Enter Valid Credentials");
      }
    });
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
      </nav>
      {/* ------------------------------------------------------------------------------------------------- */}
      <div className="mainFormDiv">
        <div className="subdiv">
          <div></div>
          <div className="form">
            <h2 className="loginHeading">Login Form</h2>
            <form className="loginform" onSubmit={handleSubmit(onSubmit)}>
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
                  {...register("email", { required: true})}
                />
                <br />
                {errors.email && (
                  <span className="text-red-600">*Please Enter Email</span>
                )}
                <br />
              </div>
              <div className="input1">
                <label htmlFor="email" className="lebel">
                  Password
                </label>
                <br />
                <input
                  type="password"
                  placeholder="Enter Your Password"
                  name="password"
                  className="logininput"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-red-600">Password is Mandatory *</span>
                )}
                <br />
              </div>
              <button type="submit" className="logbtn">
                LogIn
              </button>
            </form>
          </div>
        </div>
      </div>
   
    </>
  );
};

export default Login;
