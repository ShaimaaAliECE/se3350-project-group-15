import React from "react";
import avatar from "../assets/svg/avatar.svg";

function HeaderLogin() {
  return (
    <div className="header-container">
      <div className="header-body">
        <div className="header-left"></div>
        <div className="header-right">
          <div className="user-frame">
            <img
              src={avatar}
              alt="placeholder+image"
            />
            <span>Jack</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeaderLogin;
