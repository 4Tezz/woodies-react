import React from "react";
import Slider from "./Slider/Slider";
import bedroom from "../../../assets/images/bedroom.png";
import kitchen from "../../../assets/images/kitchen.png";
const Comments = ({ comments, currentComment, changeCurrentComment }) => {
  return (
    <section className="comments">
      <div className="container">
        <div className="comments__container">
          <h2 className="comments__title title">What they say</h2>
          <div className="comments__content">
            <div className="comments__images">
              <img
                src={bedroom}
                alt="bedroom"
                loading="lazy"
                className="first"
              />
              <img
                src={kitchen}
                alt="kitchen"
                loading="lazy"
                className="second"
              />
            </div>
            <Slider
              comment={comments[currentComment]}
              currentComment={currentComment}
              commentsLength={comments.length}
              changeCurrentComment={changeCurrentComment}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comments;
