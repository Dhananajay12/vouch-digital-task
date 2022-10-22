import React, { useState, useEffect } from "react";

import { AiOutlineSearch, AiOutlineDownload } from "react-icons/ai";
import Dropdown from "react-bootstrap/Dropdown";

import Data from "../data/DataClient";
import Card from "../components/Card";
import { Pagination } from "antd";
import SearchFilter from "react-filter-search";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

const ViewClient = () => {
  const [data, setData] = useState(Data.clients);
  const [total, setTotal] = useState("");
  const [page, setPage] = useState(0);
  const [postPerPage, setPostPerPage] = useState(10);

  useEffect(() => {
    setData(Data.clients);
    setTotal(Data.clients.length);
  }, []);

  const indexOfLastPage = page + postPerPage;
  const indexOfFistPage = indexOfLastPage - postPerPage;
  const currentPosts = data.slice(indexOfFistPage, indexOfLastPage);

  return (
    <>
      <div className=" background-color-view container-fluid">
        <div className="heading mx-2 mt-3">
          <h4 className="mx-1  view-client">View Client</h4>
          <div className="d-flex">
            <p className="mx-1">Client Master </p> /{" "}
            <p className="mx-1"> View Client</p>
          </div>
        </div>

        <div className="serach-component ">
          <div className="input-field">
            <AiOutlineSearch className="icons" />
            <input type="text" placeholder="Username" className="input2" />
          </div>
          <div className="d-flex mt-2">
            <Dropdown className="" style={{ marginTop: "0.6rem" }}>
              <Dropdown.Toggle
                id="dropdown-basic"
                variant="Secondary"
                className="dropdown mx-3"
                style={{ border: "1px solid grey" }}
              >
                Colum
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
            <button className=" export mx-1 mt-2">
              <AiOutlineDownload className=" mt-1 mx-1" />
              <ReactHTMLTableToExcel
                className=" export"
                table="client-table"
                filename="client-data"
                buttonText="Export"
                sheet="Sheet"
              >
                {" "}
              </ReactHTMLTableToExcel>
            </button>
          </div>
        </div>
        <div className="table-responsive">
          <table
            className="table table-borderless text-color"
            id="client-table"
          >
            <thead>
              <tr>
                <th scope="col">Company Name</th>
                <th scope="col">Email address</th>
                <th scope="col">Phone No</th>
                <th scope="col">Contact Person</th>
                <th scope="col">Facilitor</th>
                <th scope="col">Site</th>
                <th scope="col">Tenants</th>
                <th scope="col">Tenant Group</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="background-color">
              {currentPosts.map((prod) => {
                return (
                  <>
                    <Card prod={prod} key={prod.id} />
                  </>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination
          onChange={(value) => setPage(value)}
          pagesize={postPerPage}
          total={total}
          current={page}
        />
      </div>
    </>
  );
};

export default ViewClient;
