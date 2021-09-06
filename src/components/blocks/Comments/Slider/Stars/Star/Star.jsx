import React from "react";
import star from "../../../../../../assets/images/star.svg";
const Star = ({ alt }) => {
  return (
    <li>
      <img src={star} alt={`star-${alt}`} />
    </li>
  );
};

export default Star;
