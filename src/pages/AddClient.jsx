import React from "react";
import MultiStep from "../components/MultiStep";

const AddClient = () => {
  return (
    <>
      <div className="background-color-view container-fluid">
        <div className="heading mx-2 mt-3">
          <h4 className="mx-1 view-client">Add Client</h4>
          <div className="d-flex">
            <p className="mx-1">Client Master </p> /{" "}
            <p className="mx-1"> Add Client</p>
          </div>
        </div>

        <MultiStep className="background-color" />
      </div>
    </>
  );
};

export default AddClient;
