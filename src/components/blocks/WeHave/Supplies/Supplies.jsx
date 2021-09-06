import React from "react";
import Card from "./Card/Card";
const Supplies = ({ supplies }) => {
  return (
    <div className="we-have__content">
      {supplies.map((el) => (
        <Card key={el.id} values={el} />
      ))}
    </div>
  );
};

export default Supplies;
