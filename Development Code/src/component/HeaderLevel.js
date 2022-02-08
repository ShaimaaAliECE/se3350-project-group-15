import React, { useState } from "react";
import "./HeaderLevel.css";
import ArrayGen from "./ArrayGen";

export default function HeaderLevel(props) {
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

  const restart = () => {
    window.location.reload();
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
      <ArrayGen ArrayLength="10"/>
      <button onClick={restart} type="button" class="btn btn-warning">Restart</button>

      <div className="HeaderLevel__mistakeCount">
        Mistake:
        <span className="HeaderLevel__mistakeCountNumber">0</span>
      </div>
    </div>
  );
}
