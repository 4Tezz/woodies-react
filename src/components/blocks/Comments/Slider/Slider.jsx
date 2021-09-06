import React from "react";
import Stars from "./Stars/Stars";
import cx from "classnames";

const Slider = ({
  currentComment,
  comment,
  commentsLength,
  changeCurrentComment,
}) => {
  const previousValid = () => currentComment <= 0;
  const nextValid = () => currentComment >= commentsLength - 1;
  return (
    <div className="slider">
      <div className="slider__box">
        <div className="slider__comment">
          <Stars stars={comment.stars} />
          <figure>
            <blockquote>
              <q className="slider__comment_text">{comment.text}</q>
              <div className="slider__comment__contact">
                <div className="slider__comment__avatar">
                  <img
                    src={comment.avatar.default}
                    alt="Sandra"
                    loading="lazy"
                  />
                </div>
                <figcaption>
                  {comment.name} <cite> {comment.city} </cite>
                </figcaption>
              </div>
            </blockquote>
          </figure>
        </div>
      </div>
      <div className="slider__pagination">
        <div className="slider__pagination__links">
          <button
            className={cx("first", { disabled: previousValid() })}
            disabled={previousValid()}
            onClick={() => changeCurrentComment({ type: "delete" })}
          >
            Previous
          </button>
          <button
            className={cx("second", { disabled: nextValid() })}
            disabled={nextValid()}
            onClick={() => changeCurrentComment({ type: "add" })}
          >
            Next
          </button>
        </div>
        <ul className="slider__pagination__progress">
          {"l"
            .repeat(4)
            .split("")
            .map((_, idx) => {
              return (
                <li
                  key={idx}
                  className={cx(_, { active: currentComment === idx })}
                  onClick={() =>
                    changeCurrentComment({ type: "set", value: idx })
                  }
                />
              );
            })}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
