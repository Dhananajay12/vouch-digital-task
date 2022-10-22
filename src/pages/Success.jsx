import { Button } from "antd";
import React, { useContext } from "react";
import { AiFillCheckCircle } from "react-icons/ai";
import { BsFillHouseDoorFill } from "react-icons/bs";
import { NavLink } from "react-router-dom";

import FormContext from "../Context/FormContext";
import image from "../images/infosys.jpg";
import image2 from "../images/iss.png";
const Success = () => {
  const {
    name,
    website,
    category,
    company,
    email,
    phone,
    state,
    city,
    pin,
    gst,
    fax,
    mode,
  } = useContext(FormContext);

  return (
    <>
      <div className="background-color-view container-fluid">
        <div className="heading mx-2 mt-3">
          <h4 className="mx-1 view-client">Add Client</h4>
          <div className="d-flex">
            <p className="mx-1">Client Master </p> /{" "}
            <p className="mx-1"> Add Client</p>/<p className="mx-1"> Success</p>
          </div>
        </div>

        <div className="serach-component background-color success">
          <div className="left-one mt-3">
            <AiFillCheckCircle color="green" className="mx-2" fontSize="22px" />
            <p className="text-bold h5">You have successfully added {name}</p>
          </div>
          <div className="right-one mt-2">
            <NavLink to="/viewclient" className="mx-4 mt-2">
              Go to Client Master
            </NavLink>
            <NavLink className="button6 " to="/addclient">
              Add More Client
            </NavLink>
          </div>
        </div>
        <div className="mt-2 row">
          {" "}
          <div className="col-lg-2 col-md-6">
            <div className="card-1 card-5">
              <div className="big-one center">
                <img src={image} className="img-logo2 mt-2" />
                <p className=" text-color-bold ">{name}</p>
                <p className=" text-secondary">4 Clients</p>
              </div>
              <br></br>
              <div className="big-two center ">
                <button className="button5 text-secondary">Add FCM</button>
                <br></br>
                <br></br>
                <NavLink to="/viewclient" className="color4 mt-5">
                  View All
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="card-1 card-5">
              <div className="big-one center">
                <img src={image2} className="img-logo2 mt-2" />
                <p className=" text-color-bold mt-2">ISS Facility Service</p>
                <p className=" text-secondary">4 Clients</p>
              </div>
              <br></br>
              <div className="big-two center ">
                <button className="button5 text-secondary">Add FCM</button>
                <br></br>
                <br></br>
                <NavLink to="/viewclient" className="color4 mt-5">
                  View All
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="card-1 card-5">
              <div className="big-one center mt-2">
                <BsFillHouseDoorFill className="img-logo3 color3" />
                <p className="mt-2 color3 ">Sites</p>
                {/* <p className="text-secondary">4 Clients</p> */}
              </div>
              <div className="big-two center mt-5">
                <button className="mt-1  button2 ">Add Tenant Group</button>
                <br></br>
                <br></br>
                <NavLink to="/viewclient" className="color4 mt-5">
                  View All
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="card-1 card-5">
              <div className="big-one center mt-2">
                <BsFillHouseDoorFill className="img-logo3 text-secondary" />
                <p className="mt-2 color4">Tenant Groups</p>
                {/* <p className="text-secondary">4 Clients</p> */}
              </div>
              <div className="big-two center mt-5">
                <button className="mt-2  button4 ">Add Tenant Group</button>
                <br></br>
                <br></br>
                <NavLink to="/viewclient" className="color4 mt-5">
                  View All
                </NavLink>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-6">
            <div className="card-1 card-5">
              <div className="big-one center mt-2">
                <BsFillHouseDoorFill className="img-logo3 text-secondary" />
                <p className="mt-2 color4">Tenants</p>
                {/* <p className="text-secondary">4 Clients</p> */}
              </div>
              <div className="big-two center mt-5">
                <button className="mt-2  button4 ">Add Tenant</button>
                <br></br>
                <br></br>
                <NavLink to="/viewclient" className="color4 mt-5">
                  View All
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
