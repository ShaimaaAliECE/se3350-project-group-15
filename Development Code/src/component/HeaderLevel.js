import React, { useState } from "react";
import "./HeaderLevel.css";
import ArrayGen from "./ArrayGen";

export default function HeaderLevel(props) {

  const [ArrayLength, setArrayLength] = useState(10); //the deafult array length is 10 
  const [ArrayRange, setArrayRange] = useState(20); //the default array range is 20
  const [NumberArray, setNumberArray] = useState([]);

  const restart = () => {
    window.location.reload();
  }

  const callbackFunction = (childData) => {
    setNumberArray(childData)
    props.callbackSetProblems(childData)
  }

  return (
    <div className="HeaderLevel">
      <div class="dropdown">
        <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
          Select Level
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li><a class="dropdown-item" href="/Level1">Level 1</a></li>
          <li><a class="dropdown-item" href="/Level2">Level 2</a></li>
          <li><a class="dropdown-item" href="/Level3">Level 3</a></li>
        </ul>
      </div>
      <ArrayGen ArrayLength={ArrayLength} ArrayRange={ArrayRange} parentCallback={callbackFunction} />
      <button onClick={restart} type="button" class="btn btn-warning">Restart</button>

      <div className="HeaderLevel__mistakeCount">
        Mistake:
        <span className="HeaderLevel__mistakeCountNumber">0</span>
      </div>
    </div>
  );
}
