import React from "react";
import "./header.scss";
import Headertopline from "../../components/Headercontactline";
import Headermain from "./Header";
import Mobileheader from "../../components/Headercontactline/Mobileheader";
// import ScrollProgressBar from "../../components/Progressbar";

function Header() {
  return (
    <div>
      <header>
        <Headertopline />
        <Headermain />
        <Mobileheader />
        {/* <ScrollProgressBar /> */}
      </header>
    </div>
  );
}

export default Header;
