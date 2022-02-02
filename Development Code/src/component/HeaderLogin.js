import React from "react";
import "./HeaderLogin.css";
import PersonIcon from "@material-ui/icons/Person";

function HeaderLogin() {
  return (
    <div className="headerLogin">
      <span className="headerLogin__loginButton">
        <PersonIcon />
        <button type="button" >
          Login
        </button>
      </span>
    </div>
  );
}

export default HeaderLogin;
