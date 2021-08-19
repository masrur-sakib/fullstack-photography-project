import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
// React Icons
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaBehance,
} from "react-icons/fa";
import { MdCall } from "react-icons/md";
import { GoLocation } from "react-icons/go";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="footer-section">
      <div className="container footer-all-section">
        <div className="footer-left-section">
          <h4>[ELITE]</h4>
          <p>
            A professional photography team who makes your precious moment looks
            stunning.
          </p>
          <div className="footer-social-icons">
            <a href="/#facebook">
              <FaFacebookF />
            </a>
            <a href="/#instagram">
              <FaInstagram />
            </a>
            <a href="/#twitter">
              <FaTwitter />
            </a>
            <a href="/#youtube">
              <FaYoutube />
            </a>
            <a href="/#bahance">
              <FaBehance />
            </a>
          </div>
        </div>
        <div className="footer-middle-section">
          <p className="footer-middle-section-title">Useful Links:</p>
          <Link to="/#">About Us</Link>
          <Link to="/#">Our Services</Link>
          <Link to="/#">Orders</Link>
          <Link to="/#">Terms &amp; Conditions</Link>
          <Link to="/#">Privacy Policy</Link>
        </div>
        <div className="footer-right-section">
          <p className="footer-right-section-title">Contact Us:</p>
          <div>
            <GoLocation />
            <span> Mirpur Dohs, Dhaka, Bangladesh.</span>
          </div>
          <div>
            <FiMail />
            <span> information@elite.com</span>
          </div>
          <div>
            <MdCall />
            <span> +8801711111111</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
