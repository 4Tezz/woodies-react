import React from "react";
import Supplies from "./Supplies/Supplies";

const WeHave = ({ supplies }) => {
  return (
    <section className="we-have">
      <div className="container">
        <div className="we-have__container">
          <h2 className="we-have__title title">What we have</h2>
          <Supplies supplies={ supplies }/>
        </div>
      </div>
    </section>
  );
};

export default WeHave;
