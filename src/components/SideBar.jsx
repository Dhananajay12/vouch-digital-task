import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
import { GrLinkNext } from "react-icons/gr";

import img from "../images/boy.jpg";
const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div
      style={{ width: isOpen ? "400px" : "60px" }}
      className="sidebar card-5"
    >
      <div className="top_section">
        <p style={{ display: isOpen ? "block" : "none" }} className="logo">
          Company name
        </p>

        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="size"
        ></div>
        <div style={{ marginLeft: isOpen ? "80px" : "0px" }} className="bars">
          <FaBars onClick={toggle} />
        </div>
      </div>

      <div className="input-field">
        <AiOutlineSearch className="icons" />
        <input type="text" placeholder="Username" className="input2" />
      </div>

      <div className="link2">
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="link_text2"
        >
          <p className="">CLIENT MASTER</p>
        </div>
      </div>

      <NavLink
        to="/viewclient"
        className="link"
        activeclassName="active"
        style={{ marginTop: "-0.5rem" }}
      >
        <div
          className="icon"
          style={{
            display: isOpen ? "none" : "block",
          }}
        >
          <FaRegAddressBook />
        </div>
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="link_text"
        >
          View Client
        </div>
      </NavLink>
      <NavLink to="/addclient" className="link" activeclassName="active">
        <div className="icon" style={{ display: isOpen ? "none" : "block" }}>
          <AiOutlineUsergroupAdd />
        </div>
        <div
          style={{ display: isOpen ? "block" : "none" }}
          className="link_text"
        >
          Add Client
        </div>
      </NavLink>
      <div style={{ bottom: "0", position: "fixed" }} className="d-flex">
        <img src={img} alt="eroor" className="img-logo5" />
        <div>
          <p
            className="mx-2"
            style={{ fontWeight: "bold", display: isOpen ? "block" : "none" }}
          >
            James Burt <br></br>
            <span style={{ fontWeight: "500" }}> iames@thevouch.digital </span>
          </p>
        </div>
        <div
          className="mx-5 mt-2 h5 text-secondary"
          style={{ display: isOpen ? "block" : "none" }}
        >
          [ <GrLinkNext style={{ color: "lightgray" }} />
        </div>
      </div>
    </div>
  );
};

export default SideBar;
