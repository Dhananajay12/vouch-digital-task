import React, { useState } from "react";
import image from "../images/card2.png";
import {
  AiOutlineUser,
  AiOutlineEye,
  AiOutlineEyeInvisible,
} from "react-icons/ai";
import { BiLockAlt } from "react-icons/bi";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  let navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordType, setPasswordType] = useState("password");

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const notifyE = () =>
    toast.error("Email Missing", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  const notifyP = () =>
    toast.error("Password Missing", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });
  const notifyError = () =>
    toast.error("Enter correct password and Email", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });

  const notify = () =>
    toast.success("Login Sucessfully", {
      position: "top-center",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: 0,
    });

  console.log({ email, password });
  const handleEmail = (e) => {
    setemail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    console.log({ email, password });
    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })
      .then((res) => {
        navigate("/viewclient");
        alert("Login Sucessfully!");
        notify();
      })
      .catch((error) => {
        if (!email && !password) {
          notifyError();
        } else if (!email) {
          notifyE();
        } else if (!password) {
          notifyP();
        }
        alert(error);
      });
  };

  return (
    <>
      <div
        className="container-fluid center overflow "
        style={{ height: "100%" }}
      >
        <div className="row">
          <div className="col-md-12 col-sm-12  col-lg-6 ">
            <div className="login-component">
              <h1 className="text-wel">Welcome</h1>
              <p className="text-secondary">Enter Your Username and Password</p>

              <div className="input-field">
                <AiOutlineUser className="icons" />
                <input
                  type="text"
                  placeholder="Username"
                  className="input"
                  value={email}
                  onChange={handleEmail}
                />
              </div>
              <div className="input-field">
                <BiLockAlt className="icons" />
                <input
                  type={passwordType}
                  placeholder="Password"
                  className="input"
                  autoComplete="none"
                  value={password}
                  onChange={handlePassword}
                />

                {passwordType === "password" ? (
                  <AiOutlineEyeInvisible
                    className="errspan"
                    onClick={togglePassword}
                  ></AiOutlineEyeInvisible>
                ) : (
                  <AiOutlineEye
                    className="errspan"
                    onClick={togglePassword}
                  ></AiOutlineEye>
                )}
              </div>
              <button className="button-login" onClick={handleSubmit}>
                Login
              </button>

              <p className="mt-4 pointer" style={{ color: "#686687" }}>
                Forgot Password ?
              </p>
            </div>
            <br></br>
            <br></br>

            <div className="term-policy mt-5">
              <br></br>
              <p className=" mt-4 pointer">
                {" "}
                Tearms of Use <span className="mx-2"> Privacy policy</span>
              </p>
              <p className=" mt-2 pointer">
                Punctualiti 2022.All rights reserved
              </p>
            </div>
          </div>
          <div className="col-md-12 col-sm-12 col-lg-6">
            <div className="login-card-right">
              <div className="">
                <img src={image} alt="errr" className="img-fluid margin-top " />
                <div className="text ">
                  <h1 className="text-white">
                    360° Solution for Asset Management
                  </h1>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default Login;
