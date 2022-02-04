import React from "react";
import "./BottomInstructions.css";


/*
1. Create button(done)
2. Link buttons with functions(done)
3. Write functions that can bind with algorithm(ongoing)
*/
let i = 0;

function BottomInstructions() {
  return (
    <div>
      <div class="BottomInstructions">
        <text class="instructionField" id="textField">
          The instruction will be shown here
        </text>
      </div>

      <div class="InstructionButton">
        <button class="backwardButton" onClick={showBackwardInstruction}>
          (--
        </button>

        <button class="forwardButton" onClick={showForwardInstruction}>
          --)
        </button>
      </div>
    </div>
  );
}

function showForwardInstruction(){// use it to display the next message
  let instruction= selectInstruction();
  document.getElementById("textField").innerHTML=(instruction);
}

function showBackwardInstruction(){//use it to display the previous message 
  alert("you clicked backward instruction")
}

function selectInstruction(){// use to select the corret key for the instruction

  i++;
  return introductionDictionary[i];
}

var introductionDictionary= {
  1:"Select the entire Array",
  2:"Split the selected array(as evenly as possible)",
  3:"Split the left sub-array",
  4:"An array of length 1 cannot be split, ready to merge",
  5:"Merge selected arrays back together, in sorted order",
  6:"Select the minimum of the two values",
  7:"Add the selected value to the sorted array",
  8:"When one list becomes empty, copy all values from the remaining array into the sorted array",
  9:"Finished merging",
  10:"Select the smallest value from the front of each list(excluding values already in the sorted array)",
  11:"When one list becomes empty, copy all values from the remaining array into the sorted array",
  12:"Select the right subarray",
  13:"Done Sorting"
}





export default BottomInstructions;
