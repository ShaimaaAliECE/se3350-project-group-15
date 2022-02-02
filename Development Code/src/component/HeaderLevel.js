import React, { useState } from "react";
import "./HeaderLevel.css";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";

export default function HeaderLevel() {
  // const [currentProblem, setCurrentProblem] = useState([]);
  // const [arrayLength, setArrayLength] = useState(10);

  const [ArrayLength, setArrayLength] = useState(10); //the deafult array length is 10 
  const [NumberArray, setNumberArray] = useState([]);

  let newArray;
  
  //TODO: better to generate unique numbers!!!
  function generateNumberArray() {
    // setNumberArray(
    //   Array.from({ length: {ArrayLength} }, () => Math.floor(Math.random() * 40))
    // );
    newArray = Array.from({ length: ArrayLength }, () =>
      Math.floor(Math.random() * 20) //numbers range from 0-20
    );
  }

  // let newArray = [];
  // let random = new Set();
 
  //TODO: when 'RUN' btn is clicked for the first time, we get an empty array??? 
  const newProblems = (e) => {
    generateNumberArray();
    setNumberArray(newArray);
    console.log(NumberArray);
    // while (random.size < arrayLength) {
    //   random.add(Math.floor(Math.random() * 20) + 1);
    // }
    // newArray = [...random];
    // setCurrentProblem(newArray);
    // console.log(currentProblem);
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
      {/* <div className="HeaderLevel__chooseLevel">
        <label for="levels">Level:</label>
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
      </div> */}

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
