import React, { useState } from "react";
import "./HeaderLevel.css";
import ArrayGenBtn from "../utils/ArrayGenBtn";
import SortingComponent from "./SortingComponent";

export default function HeaderLevel(props) {
  const [NumberArray, setNumberArray] = useState([]);

  const restart = () => {
    window.location.reload();
  };

  //this function will accept the number array generated from ArrayGen component
  const callbackFunction = (childData) => {
    //save the number array generated from ArrayGen component locally
    setNumberArray(childData);
    //pass the number array generated from ArrayGen component to Level1 component
    props.callbackSetProblems(childData);
    props.callbackSetStep(1);
  };

  return (
    <div className="HeaderLevel">
      <div class="dropdown">
        <button
          class="btn btn-secondary dropdown-toggle"
          type="button"
          id="dropdownMenuButton1"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          Select Level
        </button>
        <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
          <li>
            <a class="dropdown-item" href="/Level1">
              Level 1
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/Level2">
              Level 2
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="/Level3">
              Level 3
            </a>
          </li>
        </ul>
      </div>
      <ArrayGenBtn
        ArrayLength="10" //the default array length is 10
        ArrayRange="20" //the default array range is 20
        parentCallback={callbackFunction}
      />
      <button onClick={restart} type="button" class="btn btn-warning" disabled={NumberArray.length === 0}>
        Restart
      </button>

      <div className="HeaderLevel__mistakeCount">
        Mistake:
        <span className="HeaderLevel__mistakeCountNumber">0</span>
      </div>
    </div>
  );
}
