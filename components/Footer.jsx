import React from "react";
// import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faSquareInstagram,
} from "@fortawesome/free-brands-svg-icons";



const Footer = () => {

  return (
    // <div className="footer-container">
    //   <p>2022 JSM Headphones All rights reserverd</p>npm update
    //   <p className="icons">
    //     <AiFillInstagram />
    //     <AiOutlineTwitter />
    //   </p>
    // </div>
    <div class="container">
      <div class="row">
        <div class="col-md-4">
          <h4>Contact Us</h4>
          <ul>
            <li>Email: info@customsneakers.com</li>
            <li>Phone: 555-555-5555</li>
            <li>Address: 1234 Main St, Anytown USA</li>
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Links</h4>
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About Us</a>
            </li>
            {/* <li>
              <a href="" onClick={handleClick}>
                Get In Touch
              </a>
              {isVisible && <Popup closePopup={() => setIsVisible(true)} />}
            </li> */}
          </ul>
        </div>
        <div class="col-md-4">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a href="https://www.instagram.com/_kicksthetic/" target="_blank">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12">
          <p class="copyright">Copyright &copy; 2020 Kicksthetic Sneakers</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
