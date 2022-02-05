import React, { useState } from "react";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";
import MergesortFebThird from "../algorithm/SplitArray";
import SortingComponent from "./SortingComponent";
//ignore the algorithm files

export default function Level1() {
  const [currentProblem, setCurrentProblem] = useState([]);


  return (
    <div>
      <div class="ms-3">
        <h1>Level 1: MergeSort Algorithm</h1>
      </div>
      <HeaderLevel callbackSetProblems={setCurrentProblem} />
      <div class="d-flex justify-content-center">
        <SortingComponent Problem={currentProblem} />
      </div>
      <div class="fixed-bottom d-flex justify-content-center">
        <BottomInstructions />
      </div>
    </div>
  );
}


