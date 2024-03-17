import React from "react";
import "./header.css";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "../../Assets/Images/Logo.png";
import NotificationAddIcon from "@mui/icons-material/NotificationAdd";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

const Heade = () => {
  return (
    <div className="outer-header-wrapper">
      <div className="heade-container">
        <div className="left-wrapper">
          <ul>
            <li>
              {" "}
              <img src={Logo} alt="logo" width={100} />{" "}
            </li>
            <li> Netflex </li>
            <li> Home </li>
            <li>Tv Shows</li>
            <li>Movies</li>
            <li>Latest</li>
            <li>My Lists</li>
            <li> Browse by Languages</li>
          </ul>
        </div>
        <div className="right-wrapper">
          <ul>
            <li>
              {" "}
              <SearchIcon />{" "}
            </li>
            <li>
              {" "}
              <NotificationAddIcon />
            </li>
            <li>
              {" "}
              <AccountBoxIcon />
            </li>
            <li>
              {" "}
              <ArrowDropDownIcon />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Heade;
