import React, { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineEye, AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BiBlock } from "react-icons/bi";

const Card = ({ prod }) => {
  const [isShown, setIsShown] = useState(false);

  const handleClick = (e) => {
    setIsShown((current) => !current);
  };

  return (
    <>
      <tr key={prod.id}>
        <td className="d-flex">
          <img src={prod.img} alt="eroor" className="img-logo" />
          <p className="mt-2 mx-2">{prod.name}</p>
        </td>

        <td>{prod.email}</td>
        <td>{prod.phone}</td>

        <td>{prod.contactp}</td>

        <td>{prod.facilitor}</td>
        <td>{prod.sites}</td>

        <td>{prod.tenants}</td>
        <td>
          {prod.tenantg}
          {isShown && (
            <ul className="edit-info card-5">
              <li className="mt-1 pointer">
                <AiOutlineEye /> View Details{" "}
              </li>
              <li className="mt-3  pointer">
                <AiOutlineEdit /> Edit
              </li>
              <li className="mt-3  pointer">
                <AiOutlineDelete /> Block Access
              </li>
              <li className="mt-3  pointer">
                <BiBlock /> Delete
              </li>
            </ul>
          )}
        </td>
        <td>
          <BsThreeDotsVertical onClick={handleClick} className="dots" />
        </td>
      </tr>
    </>
  );
};

export default Card;
