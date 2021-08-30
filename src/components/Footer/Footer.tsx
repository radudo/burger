import React from 'react';
import './Footer.scss';
import { FaFacebook, FaYoutube, FaLinkedin } from "react-icons/fa";

const Footer = () => (
  <div className="Footer" >
    <div className="Footer--Wrapper">
      <div className="Footer--Wrapper__SocialMedia">
        <FaFacebook className="someIcon" />
        <FaYoutube className="someIcon"  />
        <FaLinkedin className="someIcon"  />
      </div>
    </div>
    <div className="Footer--CopyRights">
      © 2021 reactive-burger.com All Rights Reserved
    </div>
  </div>
);

export default Footer;
