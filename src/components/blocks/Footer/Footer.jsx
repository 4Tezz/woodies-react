import React from "react";
import logo from "../../../assets/images/woodies-logo.jpg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__container">
          <div className="footer__content">
            <div className="footer__contact">
              <div className="footer__logo">
                <img src={logo} alt="footer logo" />
              </div>
              <a href="tel:+0128967453" className="footer__contact__link">
                (012) 8967453
              </a>
              <a
                href="mailto:woodies@gmail.com"
                className="footer__contact__link"
              >
                woodies@gmail.com
              </a>
              <a
                href="https://www.google.com/search?q=Jakarta, Indonesia"
                className="footer__contact__link"
                rel="noreferrer"
                target="_blank"
              >
                Jakarta, Indonesia
              </a>
            </div>
            <div className="footer__links">
              <ul className="footer__links__list">
                <h3 className="footer__links__title">Product</h3>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Furnitures{" "}
                  </a>
                </li>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Packages{" "}
                  </a>
                </li>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Services{" "}
                  </a>
                </li>
              </ul>
              <ul className="footer__links__list">
                <h3 className="footer__links__title">Resources</h3>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Blog{" "}
                  </a>
                </li>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    FAQs{" "}
                  </a>
                </li>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Contact Us{" "}
                  </a>
                </li>
              </ul>
              <ul className="footer__links__list">
                <h3 className="footer__links__title">Company</h3>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    About Us{" "}
                  </a>
                </li>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Jobs{" "}
                  </a>
                </li>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Our Team{" "}
                  </a>
                </li>
              </ul>
              <ul className="footer__links__list">
                <h3 className="footer__links__title">Follow Us</h3>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Facebook{" "}
                  </a>
                </li>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Instagram{" "}
                  </a>
                </li>
                <li className="footer__links__item">
                  <a href="null" className="footer__links__link">
                    {" "}
                    Twitter{" "}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <p className="footer__copyright">© 2020 WOODIES</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
