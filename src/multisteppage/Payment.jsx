import React, { useState, useContext } from "react";
import {
  TextField,
  MenuItem,
  Select,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import FormContext from "../Context/FormContext";

const Payment = () => {
  const {
    bill,
    setBlling,
    states,
    setStates,
    citys,
    setCitys,
    pins,
    setPins,
    sites,
    setSites,
    payment,
    setPayment,
    discount,
    setDiscount,
    reason,
    setReason,
    mode,
    setMode,
    pending,
    setPending,
  } = useContext(FormContext);

  return (
    <>
      <hr style={{ marginTop: "-10px", height: "0px" }}></hr>
      <br></br>
      <div className="heading mx-2">
        <p className="mx-1 text-style-add-client">Payment Setup</p>
        <div className="d-flex">
          <p className="mx-1 text-secondary">
            Set up payment for the DataClient{" "}
          </p>{" "}
        </div>
      </div>
      <TextField
        label="Billing Address"
        variant="outlined"
        placeholder="Billing Address"
        fullWidth
        margin="normal"
        name="emailAddress"
        required
        value={bill}
        onChange={(e) => {
          setBlling(e.target.value);
        }}
      />

      <div className="row">
        <div className="col-lg-6 col-md-12 col">
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="demo-simple-select-helper-label">
              Select State *
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label=""
              value={states}
              onChange={(e) => {
                setStates(e.target.value);
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
              label="state"
              value={citys}
              onChange={(e) => {
                setCitys(e.target.value);
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
            variant="outlined"
            placeholder="Pincode *"
            label="Pincode "
            fullWidth
            name="pincode"
            value={pins}
            onChange={(e) => {
              setPins(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col">
          <FormControl fullWidth margin="normal" variant="outlined">
            <InputLabel id="demo-simple-select-helper-label">
              Select Number of site Access *
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              label="site"
              value={sites}
              onChange={(e) => {
                setSites(e.target.value);
              }}
            >
              <MenuItem value="">
                <em>none</em>
              </MenuItem>
              <MenuItem value={"Kalyan"}>1</MenuItem>
              <MenuItem value={"Mumbai"}>2</MenuItem>
              <MenuItem value={"Pune"}>3</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="col-lg-6">
          <div className="input-field2">
            <p className="icons2 color2">Rs.</p>
            <TextField
              id="last-name"
              variant="outlined"
              placeholder="Payment Amount per Site"
              fullWidth
              label="payment"
              margin="normal"
              className="payment"
              name="lastName"
              value={payment}
              onChange={(e) => {
                setPayment(e.target.value);
              }}
              required
            />
            <p className="errspan4">Total</p>
            <p className="errspan2 color2">Rs.</p>
            <p className="errspan3">{payment}</p>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-6 col">
          <TextField
            variant="outlined"
            placeholder="Discount (%)"
            fullWidth
            label="Discount "
            margin="normal"
            name="firstName"
            value={discount}
            onChange={(e) => {
              setDiscount(e.target.value);
            }}
            required
          />
        </div>
        <div className="col-lg-6">
          <TextField
            variant="outlined"
            placeholder="Reason "
            label="Reason"
            fullWidth
            margin="normal"
            name="lastName"
            value={reason}
            onChange={(e) => {
              setReason(e.target.value);
            }}
            required
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col-lg-6 col">
          <p className="text-color-bold">Payment mode </p>
          <fieldset id="group">
            <div className="d-flex">
              <input
                type="radio"
                name="group"
                value={mode === "UPI "}
                onChange={(e) => {
                  setPending(e.target.value);
                }}
              ></input>
              <label for="UPI" className="mx-2 text-bold">
                UPI
              </label>

              <div className="mx-1">
                <input
                  type="radio"
                  name="group"
                  value={mode === "Net "}
                  onChange={(e) => {
                    setPending(e.target.value);
                  }}
                ></input>
                <label for="Net" className="mx-2 text-bold">
                  Net Banking
                </label>
              </div>
              <div className="mx-1">
                <input
                  type="radio"
                  name="group"
                  value={mode === "Cash "}
                  onChange={(e) => {
                    setPending(e.target.value);
                  }}
                ></input>
                <label for="Cash" className="mx-2 text-bold">
                  Cash
                </label>
              </div>
              <div className="mx-1">
                <input
                  type="radio"
                  name="group"
                  value={mode === "Cheque "}
                  onChange={(e) => {
                    setPending(e.target.value);
                  }}
                ></input>
                <label for="right" className="mx-2 text-bold">
                  Cheque
                </label>
              </div>
              <div className="mx-1">
                <input
                  type="radio"
                  name="group"
                  value={mode === "Other "}
                  onChange={(e) => {
                    setPending(e.target.value);
                  }}
                ></input>
                <label for="Other" className="mx-2 text-bold">
                  Other
                </label>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="col-lg-6">
          <p className="text-color-bold">Payment Status </p>
          <fieldset id="group1">
            <div className="d-flex">
              <input
                type="radio"
                name="group1"
                value={pending === "paid "}
                onChange={(e) => {
                  setPending(e.target.value);
                }}
              ></input>
              <label for="Paid" className="mx-2 text-bold">
                Paid
              </label>

              <input
                type="radio"
                name="group1"
                value={pending === "Pending "}
                onChange={(e) => {
                  setPending(e.target.value);
                }}
              ></input>
              <label for="Pending" className="mx-2 text-bold">
                Pending
              </label>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
};

export default Payment;
