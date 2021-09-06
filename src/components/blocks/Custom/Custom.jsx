import React from "react";
import card from "../../../assets/images/card.png";
import ruler from "../../../assets/images/ruler.png";
import calculate from "../../../assets/images/calculate.png";
import human from "../../../assets/images/human.png";
const Custom = () => {
  return (
    <section className="custom">
      <div className="container">
        <div className="custom__container">
          <h2 className="custom__title title">How to custom</h2>
          <div className="custom__content">
            <div className="custom__card">
              <div className="custom__card__image">
                <img src={card} alt="design" loading="lazy" />
              </div>
              <h3 className="custom__card__title">Choose Design</h3>
            </div>
            <div className="custom__card">
              <div className="custom__card__image">
                <img src={ruler} alt="design" loading="lazy" />
              </div>
              <h3 className="custom__card__title">Area measuring</h3>
            </div>
            <div className="custom__card">
              <div className="custom__card__image">
                <img src={calculate} alt="design" loading="lazy" />
              </div>
              <h3 className="custom__card__title">Budgeting</h3>
            </div>
            <div className="custom__card">
              <div className="custom__card__image">
                <img src={human} alt="design" loading="lazy" />
              </div>
              <h3 className="custom__card__title">Production</h3>
            </div>
          </div>
          <button className="btn-orange">Get Personalized Now</button>
        </div>
      </div>
    </section>
  );
};

export default Custom;
