import React from "react";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";
import MergeSort from "../algorithm/MergeSort";

function Level1() {
  return (
    <div>
      <HeaderLevel />
      <BottomInstructions />

      <div id="result"></div>
      <div>This is Level1</div>
      {/*<MergeSort />*/}
      
    </div>
  );
}

export default Level1;
