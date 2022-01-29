import React from "react";
import Level1 from "./Level1";
import Level2 from "./Level2";
import Level3 from "./Level3";
import { Routes, Route, Link } from "react-router-dom";
import "./LevelMain.css";

function LevelMain() {
  return (
    <div className="LevelMain">
      <Link to={"/Level1"} className="level1">
        Level1
      </Link>
      <Link to={"/Level2"} className="level2">
        Level2
      </Link>
      <Link to={"/Level3"} className="level3">
        Level3
      </Link>
    </div>
  );
}

export default LevelMain;
