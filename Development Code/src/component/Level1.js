import React, { useState } from "react";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";
import SquareBtnStyle from "../utils/SquareBtnStyle";
//ignore the algorithm files

export default function Level1() {
  const [currentProblem, setCurrentProblem] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [summaryArray, setSummaryArray] = useState([]);
  const displayArray = summaryArray.slice(0, (currentStep) - 1);
  return (
    <div>
      <div class="ms-3">
        <h1>Level 1: MergeSort Algorithm</h1>
      </div>
      {/* pass the number array from HeaderLevel component to Level1 component */}
      <HeaderLevel callbackSetProblems={setCurrentProblem} callbackSetStep={setCurrentStep} callbackSetSummaryArray={setSummaryArray} />
      <div class="d-flex justify-content-center">
        {/*<SortingComponent Problem={currentProblem} />*/}
        <div className="display-area">
          <div className="display-area-row">
            {/*first random num row */}
            {currentProblem.map((item, i) => (
              <SquareBtnStyle key={i}>{item}</SquareBtnStyle>
            ))}
          </div>
          <div className="display-area-dynamic">
            {console.log(displayArray)}
            {displayArray.map((item, i) => (
              <div className="display-area-row" key={i}>
                <SquareBtnStyle opacity />
                {item.map((subItem, j) => (
                  <div className="display-area-col" key={j}>
                    {j === item.length / 2 && <SquareBtnStyle opacity />}
                    {subItem.map((num, k) => (
                      <SquareBtnStyle key={k}>{num}</SquareBtnStyle>
                    ))}
                    <SquareBtnStyle opacity />
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div class="fixed-bottom d-flex justify-content-center">
        <BottomInstructions passCurrentStep={currentStep} passDisplayArray={displayArray} callbackSetStep={setCurrentStep} callbackSetSummaryArray={setSummaryArray} />
      </div>
    </div>
  );
}


