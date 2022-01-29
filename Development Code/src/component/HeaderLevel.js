import React from "react";
import "./HeaderLevel.css";
import { Link } from "react-router-dom";

function HeaderLevel() {
  return (
    <div className="HeaderLevel">
      <div className="HeaderLevel__chooseLevel">
        <label for="levels">Level:</label>
    
        <select name="levels" id="levels">
          <Link to="/level1">Level 1</Link>
          <Link to="/level2">Level 2</Link>
          <Link to="/level3">Level 3</Link>
          <option value="LevelOne">Level 1</option>

          <option value="LevelTwo">Level 2</option>
          <option value="LevelThree">Level 3</option>
          <option value="LevelFour">Level 4</option>
        </select>
      </div>

      <div className="HeaderLevel__runButton">
        <span>
          <button type="button">Run</button>
        </span>
      </div>
      <div className="HeaderLevel__restartButton">
        <span>
          {" "}
          <button type="button">Restart</button>
        </span>
      </div>

      <div className="HeaderLevel__mistakeCount">
        mistake:
        <span className="HeaderLevel__mistakeCountNumber">0</span>
      </div>
    </div>
  );
}

export default HeaderLevel;
