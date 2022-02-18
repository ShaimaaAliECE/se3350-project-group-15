import React, { useState } from "react";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";
import MergesortFebThird from "../algorithm/SplitArray";
import SortingComponent from "./SortingComponent";
import Timer from "./Timer";
import { mergeSortIterator } from "../utils/mergeSortIterator";
import { handleRunning } from "../testdeleteafter";
//ignore the algorithm files

export default function Level1() {
  const [currentProblem, setCurrentProblem] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  return (
    <div>
      <div class="ms-3">
        <h1>Level 1: MergeSort Algorithm</h1>
      </div>
      {/* pass the number array from HeaderLevel component to Level1 component */}
      <HeaderLevel callbackSetProblems={setCurrentProblem} callbackSetStep={setCurrentStep} />
      <button onClick={() => handleRunning(currentProblem)} type="button" class="btn btn-success">Click me</button>
      <div class="d-flex justify-content-center">
        <SortingComponent Problem={currentProblem} />
      </div>
      <div class="fixed-bottom d-flex justify-content-center">
        <BottomInstructions passCurrentStep={currentStep} callbackSetStep={setCurrentStep} />
      </div>
    </div>
  );
}


