import React from "react";
import "./footer.css";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";

const Footer = () => {
  return (
    <div className="outer-footer">
      <div className="inner-footer">
        <div className="footer-icons">
          <ul>
            <li>
              <TelegramIcon />
            </li>
            <li>
              <InstagramIcon />
            </li>
            <li>
              <FacebookOutlinedIcon />
            </li>
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

//2d717dd4a3389518752605e096cbdebd
