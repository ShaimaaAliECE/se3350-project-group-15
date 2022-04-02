import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Background.css";
import actualTime from "../Helper/Clock.js";

export default function LevelMain() {
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [userEmail, setUserEmail] = React.useState(null);

  React.useEffect(() => {
    // Get all the clock elements
    let element = document.getElementsByClassName("clock")[0].children;
    actualTime(element);

    if (localStorage.getItem("userEmail") != null) {
      setUserEmail(localStorage.getItem("userEmail"));
      if (userEmail == "admin@123.com") {
        setIsAdmin(true);
      }
    }
  });

  return (
    <div>
      <div className="LevelMain">
        <h1>Welcome My Friend</h1>
        <li>
          <Link to={"/level1"} className="level1">
            LVL: “I'm Too Young to Die”
          </Link>
        </li>
        <li>
          <Link to={"/level2"} className="level2">
            LVL: “Hurt Me Plenty”
          </Link>
        </li>
        <li>
          <Link to={"/level3"} className="level3">
            LVL: “Ultra Violence”
          </Link>
        </li>
        <li>
          <Link to={"/level4"} className="level3">
            LVL: “Nightmare”
          </Link>
        </li>
        <li>
          <Link to={"/level5"} className="level3">
            LVL: "Ultra Nightmare"
          </Link>
        </li>
        <li>
          <Link to={"/customLevel"} className="level3">
            LVL: "Extra life mode" - Custom mode
          </Link>
        </li>
      </div>

      <div className="position-absolute top-50 start-50 translate-middle w-auto h-auto" style={{ marginTop: "80px" }}>
        <article class="clock">
          <div class="hours-container">
            <div class="hours"></div>
          </div>
          <div class="minutes-container">
            <div class="minutes"></div>
          </div>
          <div class="seconds-container">
            <div class="seconds"></div>
          </div>
        </article>
      </div>

    </div>
  );
}
