import React from "react";
import cx from "classnames";
import logo from "../../../assets/images/woodies-logo.jpg";

const Header = ({ burgerActive , changeBurger }) => {
  return (
    <header className="header header-root">
      <div className="container">
        <div className="nav__brand">
          <img src={logo} alt="logo" />
        </div>
        <nav className={cx("nav", { active: burgerActive })}>
          <ul className="nav__list">
            <li className="nav__item">
              <a href="null" className="nav__link active">
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="null" className="nav__link">
                About Us
              </a>
            </li>
            <li className="nav__item">
              <a href="null" className="nav__link">
                How it works
              </a>
            </li>
            <li className="nav__item">
              <a href="null" className="nav__link">
                Categories
              </a>
            </li>
            <li className="nav__item">
              <a href="null" className="nav__link">
                Testimony
              </a>
            </li>
          </ul>
        </nav>
        <button className="btn nav__sign-up">SIGN UP</button>
        <button className={cx("btn-toggler", { active: burgerActive })} onClick={() => changeBurger()}>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
