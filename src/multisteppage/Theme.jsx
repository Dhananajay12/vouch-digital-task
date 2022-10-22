import React from "react";
import { TextField } from "@material-ui/core";

const Theme = () => {
  return (
    <>
      <hr style={{ marginTop: "-10px", height: "0px" }}></hr>
      <br></br>
      <div className="heading mx-2 ">
        <h4 className="mx-1 text-style-add-client">Theme Setup</h4>
        <div className="d-flex">
          <p className="mx-1 text-secondary">
            Add information about the client to give them a personalized
            experience{" "}
          </p>{" "}
        </div>
      </div>

      <div className="input-field">
        <input
          type="color"
          id="favcolor"
          name="favcolor"
          value="#153AC7"
          className="icons3"
        ></input>
        <TextField
          id="address1"
          variant="outlined"
          placeholder="Color"
          fullWidth
          margin="normal"
          name="color"
        />
      </div>

      <div>
        <p className="text-secondary mx-2">Add Hex Value</p>
        <br></br>
        <p className="text-color-bold">Login Theme </p>
        <p>Select the look and feel of the login page </p>
        <input
          type="radio"
          id="html"
          name="Use Color"
          value="HTML"
          className=""
        ></input>
        <label for="html" className="mx-1 text-bold ">
          {" "}
          Use Color
        </label>
        <br></br>
        <input
          type="text"
          name="color"
          placeholder="color code"
          className="input-field-color mx-2 mt-2"
        />
      </div>
      <br></br>
      <div className="">
        <p className="text-color-bold ">Where Should be the login model</p>
        <fieldset id="group">
          <div className="d-flex">
            <div>
              <div className="box1 box">
                <div className="small-box"></div>
              </div>
              <div className="center mx-2">
                <input type="radio" name="group" value="left"></input>
                <label for="left" className="mx-2 text-bold">
                  Left
                </label>
              </div>
            </div>
            <div>
              <div className="center">
                <div className="box2 box">
                  <div className="small-box"></div>
                </div>
                <input type="radio" name="group" value="right"></input>
                <label for="right" className="mx-2 text-bold">
                  Right
                </label>
              </div>
            </div>
            <div>
              <div className="box3 box">
                <div className="small-box"></div>
              </div>
              <div className="center">
                <input type="radio" name="group" value="center"></input>
                <label for="html" className="mx-2 text-bold">
                  Center
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  );
};

export default Theme;
