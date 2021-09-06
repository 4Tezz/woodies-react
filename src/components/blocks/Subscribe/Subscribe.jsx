import React from "react";

const Subscribe = () => {
  return (
    <section className="subscribe">
      <div className="container">
        <div className="subscribe__container">
          <div className="subscribe__content">
            <h3 className="subscribe__title">Subscribe to our newsletter</h3>
            <p className="subscribe__text">
              A monthly digest of the new WOODIES products, hot offers, and
              resources.
            </p>
          </div>
          <form className="subscribe__form">
            <span>
              <input
                type="email"
                className="subscribe__form__control"
                placeholder="Your email address"
                required
              />
              <button className="btn-orange">Subscribe</button>
            </span>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;
