import React from "react";
import image from "../images/infosys.jpg";
const AddCard = () => {
  return (
    <div className="card-1 card-5">
      <div className="big-one center">
        <img src={image} className="img-logo2" />
        <p className="mt-4 text-color-bold ">ISS Facility Service</p>
        <p className="mt-2 text-secondary">4 Clients</p>
      </div>
      <div className="big-two center mt-5">
        <p className="mt-2 color3">Add FCM</p>
        <p className="text-secondary mt-1">View All</p>
      </div>
    </div>
  );
};

export default AddCard;
