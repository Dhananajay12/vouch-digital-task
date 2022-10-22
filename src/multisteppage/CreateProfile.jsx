import React, { useState, useContext, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
  Button,
} from "@material-ui/core";
import FormContext from "../Context/FormContext";

const CreateProfile = () => {
  const {
    name,
    setName,
    website,
    setWebsite,
    category,
    setCategory,
    company,
    setCompany,
    email,
    setEmail,
    phone,
    setPhone,
    state,
    setState,
    city,
    setCity,
    pin,
    setPin,
    gst,
    setGst,
    fax,
    setFax,
  } = useContext(FormContext);

  return (
    <>
      <hr style={{ marginTop: "-10px", height: "0px" }}></hr>
      <br></br>
      <div className="heading mx-2 ">
        <p className="mx-1 text-style-add-client">Create Client Profile</p>
        <p className="text-secondary mx-1">
          Add some basic information related to the client{" "}
        </p>{" "}
      </div>
      <div className="module-setup2 mt-4">
        <div className="d-flex">
          <Button component="label">
            <p className="plus-file mt-4">+ </p>
            <input type="file" hidden />
          </Button>
          <div className="mt-3 mx-2 padding2">
            <h5 className="color2">Company Logo </h5>
            <p className="text-secondary">
              Logo ratio shoud be 1:1 and should be 120 px × 120 px{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="row mt-1">
        <div className="col-lg-6 col">
          <TextField
            id="first-name"
            label="Company Name "
            variant="outlined"
            placeholder="Company Name "
            fullWidth
            margin="normal"
            name="firstName"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-lg-6">
          <TextField
            id="last-name"
            label="Website "
            variant="outlined"
            placeholder="Website"
            fullWidth
            value={website}
            onChange={(e) => {
              setWebsite(e.target.value);
            }}
            margin="normal"
            name="lastName"
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col">
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="demo-simple-select-helper-label">
              Select Business Category *{" "}
              {/* <span style={{ color: "red" }}>*</span> */}
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Age"
              value={category}
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Maharashtra"}>Firm</MenuItem>
              <MenuItem value={"Mumbai"}>Private</MenuItem>
              <MenuItem value={"Madhya Pradesh"}>Public</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-6">
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="demo-simple-select-helper-label">
              Select Facility Management Company *
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Management"
              value={company}
              onChange={(e) => {
                setCompany(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col">
          <TextField
            id="first-name"
            label="Company Email Address "
            variant="outlined"
            placeholder="Company Email Address *"
            fullWidth
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            margin="normal"
            name="firstName"
            required
          />
        </div>
        <div className="col-lg-6">
          <TextField
            id="last-name"
            label="Mobile Number "
            variant="outlined"
            placeholder="Mobile Number *"
            fullWidth
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value);
            }}
            margin="normal"
            name="lastName"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col-md-12 col">
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="demo-simple-select-helper-label">
              Select State *
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="Age"
              value={state}
              onChange={(e) => {
                setState(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Maharashtra"}>Maharashtra</MenuItem>
              <MenuItem value={"Mumbai"}>Utter Pradesh</MenuItem>
              <MenuItem value={"Madhya Pradesh"}>Madhya Pradesh</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-4 col-md-12">
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="demo-simple-select-helper-label">
              Select City *
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="city"
              value={city}
              onChange={(e) => {
                setCity(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={"Kalyan"}>Kalyan</MenuItem>
              <MenuItem value={"Mumbai"}>Mumbai</MenuItem>
              <MenuItem value={"Pune"}>Pune</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-2 col-md-12">
          <TextField
            margin="normal"
            label="Pincode "
            variant="outlined"
            placeholder="Pincode "
            fullWidth
            value={pin}
            onChange={(e) => {
              setPin(e.target.value);
            }}
            name="pincode"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col">
          <TextField
            variant="outlined"
            label="GST Number"
            placeholder="GST Number"
            fullWidth
            margin="normal"
            name="gst"
            value={gst}
            onChange={(e) => {
              setGst(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-lg-6">
          <TextField
            id="last-name"
            label="Fax Number"
            variant="outlined"
            placeholder="Fax Number"
            fullWidth
            value={fax}
            onChange={(e) => {
              setFax(e.target.value);
            }}
            margin="normal"
            name="lastName"
            required
          />
        </div>
      </div>
    </>
  );
};

export default CreateProfile;
