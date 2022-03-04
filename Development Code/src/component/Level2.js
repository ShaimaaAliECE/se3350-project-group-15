import React, { useState, useEffect } from "react";
import HeaderLevelAileenP from "./HeaderLevelAileenP";
import BottomInstructions from "./BottomInstructions";
import SortingComponent from "./SortingComponent";
import ScoreIndicator from "./ScoreIndicator";
import Timer from "./Timer";
//import Grids from "./Grid";
import UserInput from "./UserInput";
import { Grid } from "@material-ui/core";

function Level2() {
  const [currentProblem, setCurrentProblem] = useState([]); //unsorted array
  const [sortedArray, setSortedArray] = useState([]); //sorted array after merge sort
  const [answerArray, setAnswerArray] = useState([1,2,3]); //player's answer
  const [timeLeft, setTimeLeft] = useState(0);
  const [data, setData] = useState("");

  console.log("level2 currentProblem " + currentProblem);
  console.log("level2 sorted array " + sortedArray);

  function getData(input) {
    setData(input.target.value);
    console.log("input.id " + input.target.id);
    console.log("input.id " + input.target.id);
  }

  return (
    <div>
      <div class="ms-3">
        <h1>Level 2: MergeSort Algorithm</h1>
        <Timer /*startCount='0'*/ />
      </div>

      {/* pass the number array from HeaderLevel component to Level1 component */}
      <HeaderLevelAileenP
        callbackSetProblems={setCurrentProblem}
        parseSotedArray={setSortedArray}
      />

      <div class="fixed-bottom d-flex justify-content-center">
        {/* <BottomInstructions /> */}
      </div>
      
      {/* calculate score */}
      <ScoreIndicator
        sortedArray={sortedArray}
        answerArray={answerArray}
        timeLeft={timeLeft}
      />
      {/* TODO: Fix UserInput component data flow issue!!! */}
      {/* <div>
        This is Level2 userinput
        <UserInput currentProblem={currentProblem}  sortedArray={sortedArray} />
        <div id="Grid"> </div>
      </div> */}
      <div classNAme="UserInput ">
      <div className="UserInput_background">
        <h1>user input step one here !</h1>
        <label for="A1">1</label>
        <input type="text" class="resizedTextbox" id="A1" onChange={getData} />
      </div>
      //step2
      <div className="UserInput_background">
        <h1>user input step two here !</h1>
        <label for="A2.1">1.1</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A2.1"
          onChange={getData}
        />
        <label for="A2.2">1.2</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A2.2"
          onChange={getData}
        />
      </div>
      //step3
      <div className="UserInput_background">
        <h1>user input step three here !</h1>
        <label for="A3.1">1.1.1</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A3.1"
          onChange={getData}
        />
        <label for="A3.2">1.1.2</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A3.2"
          onChange={getData}
        />
        <label for="A3.3">1.2.1</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A3.3"
          onChange={getData}
        />
        <label for="A3.4">1.2.2</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A3.4"
          onChange={getData}
        />
      </div>
      //step4
      <div className="UserInput_background">
        <h1>user input step four here !</h1>
        <label for="A4.1">1.1.1.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A4.1"
          onChange={getData}
        />
        <label for="A4.2">1.1.1.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A4.2"
          onChange={getData}
        />
        <label for="A4.3">1.1.2.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A4.3"
          onChange={getData}
        />
        <label for="A4.4">1.1.2.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A4.4"
          onChange={getData}
        />
        <label for="A4.5">1.2.1.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A4.5"
          onChange={getData}
        />
        <label for="A4.6">1.2.1.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A4.6"
          onChange={getData}
        />
        <label for="A4.7">1.2.2.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A4.7"
          onChange={getData}
        />
        <label for="A4.8">1.2.2.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A4.8"
          onChange={getData}
        />
      </div>
      //step 5
      <div className="UserInput_background">
        <h1>user input step five here !</h1>
        <label for="A5.1">1.1.1.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.1"
          onChange={getData}
        />
        <label for="A5.2">1.1.1.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.2"
          onChange={getData}
        />
        <label for="A5.3">1.1.2.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.3"
          onChange={getData}
        />
        <label for="A5.4">1.1.2.2.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.4"
          onChange={getData}
        />
        <label for="A5.5">1.1.2.2.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.5"
          onChange={getData}
        />
        <label for="A5.6">1.2.1.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.6"
          onChange={getData}
        />
        <label for="A5.7">1.2.1.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.7"
          onChange={getData}
        />
        <label for="A5.8">1.2.2.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.8"
          onChange={getData}
        />
        <label for="A5.9">1.2.2.2.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.9"
          onChange={getData}
        />
        <label for="A5.10">1.2.2.2.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A5.10"
          onChange={getData}
        />
      </div>
      //start merging //step6
      <div className="UserInput_background_1">
        <h1>user input step 6 here !</h1>
        <label for="A6.1">1.1.1.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A6.1"
          onChange={getData}
        />
        <label for="A6.2">1.1.1.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A6.2"
          onChange={getData}
        />
        <label for="A6.3">1.1.2.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A6.3"
          onChange={getData}
        />
        <label for="A6.4">1.1.2.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A6.4"
          onChange={getData}
        />
        <label for="A6.5">1.2.1.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A6.5"
          onChange={getData}
        />
        <label for="A6.6">1.2.1.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A6.6"
          onChange={getData}
        />
        <label for="A6.7">1.2.2.1</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A6.7"
          onChange={getData}
        />
        <label for="A6.8">1.2.2.2</label>
        <input
          type="text"
          class="resizedTextbox_1"
          id="A6.8"
          onChange={getData}
        />
      </div>
      //step7
      <div className="UserInput_background_1">
        <h1>user input step 7 here !</h1>
        <label for="A7.1">1.1.1</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A7.1"
          onChange={getData}
        />
        <label for="A7.2">1.1.2</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A7.2"
          onChange={getData}
        />
        <label for="A7.3">1.2.1</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A7.3"
          onChange={getData}
        />
        <label for="A7.4">1.2.2</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A7.4"
          onChange={getData}
        />
      </div>
      //step8
      <div className="UserInput_background_1">
        <h1>user input step 8 here !</h1>
        <label for="A8.1">1.1</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A8.1"
          onChange={getData}
        />
        <label for="A8.2">1.2</label>
        <input
          type="text"
          class="resizedTextbox"
          id="A8.2"
          onChange={getData}
        />
      </div>
      //step9
      <div className="UserInput_background_1">
        <h1>user input step 9 here !</h1>
        <label for="A9">1</label>
        <input type="text" class="resizedTextbox" id="A9" onChange={getData} />
      </div>
    </div>
    </div>
  );
}

export default Level2;
