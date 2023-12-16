import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaLinkedin,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                {/* <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul> */}
                <div className="infoText">
                COPYRIGHT SHIVAM SINGH
                </div>
                <div className="socialIcons">
                <a  href="www.facebook.com">
                    <span className="icon">
                        <FaFacebookF />
                    </span>
                    </a>
                    <a  href="www.instagram.com">
                    <span className="icon">
                        <FaInstagram />
                    </span>
                    </a>
                    <a  href="www.twitter.com">
                    <span className="icon">
                        <FaTwitter />
                    </span>
                    </a>
                    <a  href="www.Linkedin.in">
                    <span className="icon">
                        <FaLinkedin />
                    </span>
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
