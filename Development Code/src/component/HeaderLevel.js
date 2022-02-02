import React, { useState } from "react";
import "./HeaderLevel.css";
import { Link } from "react-router-dom";

export default function HeaderLevel() {
  const [currentProblem, setCurrentProblem] = useState([]);
  const [arrayLength, setArrayLength] = useState(10);

  let newArray = [];
  let random = new Set();

  const newProblems = () => {
    while (random.size < arrayLength) {
      random.add(Math.floor(Math.random() * 20) + 1);
    }
    newArray = [...random];
    setCurrentProblem(newArray);
    console.log(currentProblem);
  };
  return (
    <div className="HeaderLevel">
      <div className="HeaderLevel__chooseLevel">
        <label htmlFor="levels">Level:</label>
        <select
          name="levels"
          id="levels"
          onChange={(event) => {
            setArrayLength(event.target.value);
          }}
        >
          <option value="10">Level 1</option>
          <option value="10">Level 2</option>
          <option value="10">Level 3</option>
          <option value="50">Level 4</option>
        </select>
      </div>

      <div className="HeaderLevel__runButton">
        <span>
          <button onClick={newProblems} type="button">
            Run
          </button>
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
