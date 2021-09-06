import React from "react";
import kitchenFurniture from "./../../../assets/images/kitchen-furniture.jpg";
import furniture from "./../../../assets/images/furniture.jpg";

const WeAre = () => {
  return (
    <section className="we-are">
      <div className="container we-are__container">
        <h2 className="we-are__title title">Who we are</h2>
        <div className="we-are__box top">
          <div className="we-are__image-top">
            <img src={furniture} alt="furniture" loading="lazy" />
          </div>
          <div className="we-are__content-top">
            <h3 className="we-are__title-top">
              <strong>WOODIES</strong> is the
              <strong>home of modern wooden furniture</strong>
            </h3>
            <p className="we-are__text top">
              the answer to your need for furniture with shapes, sizes and
              colors.
            </p>
          </div>
        </div>
        <div className="we-are__box bottom">
          <div className="we-are__content-bottom">
            <h3 className="we-are__title-bottom">
              Customized furniture <strong>made just for you</strong>
            </h3>
            <p className="we-are__text bottom">
              Get it easy to adjust furniture to the shape and size of your
              dwelling or business.
            </p>
          </div>
          <div className="we-are__image-bottom">
            <img
              src={kitchenFurniture}
              alt="kitchen furniture"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeAre;
