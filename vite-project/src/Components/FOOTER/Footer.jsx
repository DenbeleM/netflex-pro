import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="outer-footer">
      <div className="inner-footer">
        <div className="footer-icons">
          <ul>
            <li>search</li>
            <li>search</li>
            <li>facebook</li>
          </ul>
        </div>
        <div className="footer-data">
          <div>
            <ul>
              <li>audio description</li>
              <li>investor relations</li>
              <li>legal notices</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Help center</li>
              <li>Jobs</li>
              <li>cookie preferences</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>Gift cards</li>
              <li>Terms of use</li>
              <li>corporate Information</li>
            </ul>
          </div>
          <div>
            <ul>
              <li>media center</li>
              <li>privacy</li>
              <li>contact us</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="copy">
        &copy; 2024 Your Company Name. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
