import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { AiOutlineSearch, AiOutlineUsergroupAdd } from "react-icons/ai";
import { FaRegAddressBook } from "react-icons/fa";
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
    </div>
  );
};

export default SideBar;
