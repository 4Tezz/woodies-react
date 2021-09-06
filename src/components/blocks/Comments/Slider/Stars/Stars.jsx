import React from "react";
import Star from "./Star/Star";
const Stars = ({ stars }) => {
  return (
    <ul className="slider__stars">
      {"a"
        .repeat(stars)
        .split("")
        .map((_, idx) => (
          <Star key={idx} alt={idx} />
        ))}
    </ul>
  );
};

export default Stars;
