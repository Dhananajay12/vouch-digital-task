import React, { useState } from "react";

import { IoNuclearSharp } from "react-icons/io5";

const Module = () => {
  const [isShown, setIsShown] = useState(false);
  const [isShownH, setIsShownH] = useState(true);
  const handleClick = (e) => {
    setIsShown(!isShown);
    setIsShownH(!isShownH);
  };
  const handleClickH = (e) => {
    setIsShown(!isShown);
    setIsShownH(!isShownH);
  };

  return (
    <>
      <div className="heading mx-2 ">
        <h4 className="mx-1 text-style-add-client">Module Setup</h4>
        <p className=" text-secondary">
          Add some basic information related to the client{" "}
        </p>{" "}
      </div>

      <div className="row">
        <div className="col-md-6 col-lg-3" style={{ padding: "1%" }}>
          <div className="width-small">
            <div
              className={isShown ? "active2" : "link"}
              onClick={handleClickH}
            >
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Home"
              />
              <label
                for="vehicle1"
                className={isShown ? "text-white" : "text-m-color"}
              >
                {" "}
                Home / Dashboard
              </label>
            </div>

            <div className="link" activeclassName="active">
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Helpdesk"
              />
              <label for="vehicle1" className="text-m-color">
                Helpdesk
              </label>
            </div>

            <div className="link" activeclassName="active">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Asset"
              />
              <label for="vehicle1" className="text-m-color">
                {" "}
                Asset
              </label>
            </div>

            <div
              className={isShownH ? "active2" : "link"}
              onClick={handleClick}
            >
              <input
                type="checkbox"
                id="vehicle4"
                name="vehicle4"
                value="daily"
              />
              <label
                for="vehicle1"
                className={isShownH ? "text-white" : "text-m-color"}
              >
                {" "}
                Daily Tasks
              </label>
            </div>

            <div className="link" activeclassName="active">
              <input
                type="checkbox"
                id="vehicle5"
                name="vehicle5"
                value="PPM"
              />
              <label for="vehicle1" className="text-m-color">
                PPM
              </label>
            </div>

            <div className="link" activeclassName="active">
              <input
                type="checkbox"
                id="vehicle6"
                name="vehicle6"
                value="Employess"
              />
              <label for="vehicle1" className="text-m-color">
                Employess
              </label>
            </div>
            <div className="link" activeclassName="active">
              <input
                type="checkbox"
                id="vehicle7"
                name="vehicle7"
                value="Bike"
              />
              <label for="vehicle1" className="text-m-color">
                Profile
              </label>
            </div>
            <div className="link" activeclassName="active">
              <input
                type="checkbox"
                id="vehicle7"
                name="vehicle7"
                value="Bike"
              />
              <label for="vehicle1" className="text-m-color">
                Transactions
              </label>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-9" style={{ padding: "0%" }}>
          <div className={isShown ? "isshown " : " active3"}>
            <div className="daily-scroll">
              <div className="module-setup">
                <div className="d-flex">
                  <IoNuclearSharp className="icon-nuc mx-2" />
                  <div>
                    <p className="text-style-add-client">Daily Tasks</p>
                    <p className="text-secondary">
                      Select the sub module that the client can use{" "}
                    </p>
                  </div>
                </div>
                <button className="button2 mx-3">
                  <span className="mx-2"> ✓ </span> Visible to Client
                </button>
              </div>
              <hr style={{ marginRight: "1%" }}></hr>

              <div className="show-module">
                <input type="checkbox" id="m1" name="m1" value="Show" />
                <label for="m1" className="text-color-bold mx-2 mt-4">
                  Show All Sub Module
                </label>
                <br></br>

                <input type="checkbox" id="m2" name="m2" value="Summary" />
                <label for="m2" className="text-m-color  mx-2 mt-4">
                  Summary
                </label>
                <br></br>
                <input type="checkbox" id="m3" name="m3" value="View" />
                <label for="m3" className="text-m-color mx-2 mt-4">
                  View Tasks
                </label>
                <br></br>

                <input type="checkbox" id="m4" name="m4" value="Create" />
                <label for="m4" className="text-m-color mx-2 mt-4">
                  Create New Tasks
                </label>
                <br></br>
                <input type="checkbox" id="m5" name="m5" value="Logbook" />
                <label for="m5" className="text-m-color mx-2 mt-4">
                  Logbook
                </label>
                <br></br>

                <input type="checkbox" id="m6" name="m6" value="Logsheet" />
                <label for="m6" className="text-m-color mx-2 mt-4">
                  Logsheet
                </label>

                <div>
                  <input
                    type="checkbox"
                    id="m6"
                    name="m6"
                    value="Logsheet"
                    className="mx-2"
                  />
                  <label for="m6" className="text-secondary mx-2 mt-2">
                    Daily
                  </label>
                  <br></br>
                  <input
                    type="checkbox"
                    id="m6"
                    name="m6"
                    value="Logsheet"
                    className="mx-2"
                  />
                  <label for="m6" className="text-secondary mx-2 mt-2">
                    Activity Wise
                  </label>
                </div>
                <input type="checkbox" id="m5" name="m5" value="Logbook" />
                <label for="m5" className="text-m-color mx-2 mt-3">
                  demo
                </label>
                <br></br>

                <br></br>
              </div>
            </div>
          </div>
          <div className={isShownH ? "isshown " : " active3"}>
            <div className="module-setup">
              <div className="d-flex">
                <IoNuclearSharp className="icon-nuc mx-2" />
                <div>
                  <p className="text-style-add-client">Home / Dashboard</p>
                  <p className="text-secondary">
                    Select the sub module that the client can use{" "}
                  </p>
                </div>
              </div>
              <button className="button2 mx-3">
                <span className="mx-2"> ✓ </span> Visible to Client
              </button>
            </div>
          </div>
        </div>
      </div>

      <br></br>
      <br></br>
    </>
  );
};

export default Module;
