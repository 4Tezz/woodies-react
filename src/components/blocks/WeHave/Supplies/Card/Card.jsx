import React from "react";
const Card = ({ values }) => {
  return (
    <div className="we-have__card">
      <div className="we-have__card-bg">
        <img src={values.img.default} alt="desk" loading="lazy" />
      </div>
      <h3 className="we-have__card__title">{values.title}</h3>
      <button className="btn">Shop Now</button>
    </div>
  );
};

export default Card;
