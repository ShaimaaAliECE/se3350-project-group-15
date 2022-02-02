import React, { useState } from "react";
import "./HeaderLevel.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function HeaderLevel() {
  const [ArrayLength, setArrayLength] = useState(10); //the deafult array length is 10
  const [NumberArray, setNumberArray] = useState([]);

  let newArray;

  //TODO: better to generate unique numbers!!!

  //TODO: when 'RUN' btn is clicked for the first time, we get an empty array???
  // TODO: pass the generated number array as input to the merge sort algorithm component
  const generateNumberArray = (e) => {
    newArray = Array.from(
      { length: ArrayLength },
      () => Math.floor(Math.random() * 20) //numbers range from 0-20
    );
    setNumberArray(newArray);
    console.log(NumberArray);
  };

  return (
    <div className="HeaderLevel">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
          Select Level
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="/level1">Level1</Dropdown.Item>
          <Dropdown.Item href="/level2">Level2</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>

      <div className="HeaderLevel__runButton">
        <span>
          <button onClick={generateNumberArray} type="button">
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
