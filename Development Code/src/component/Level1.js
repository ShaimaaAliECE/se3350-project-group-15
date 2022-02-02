import React from "react";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";
import ArrayGen from "./ArrayGen";
import MergeSort from "../algorithm/MergeSort";

function Level1() {
  return (
    <div>
      <HeaderLevel />
      <ArrayGen />
      <BottomInstructions />

      <div id="result"></div>
      <div>This is Level1</div>
      {/*<MergeSort />*/}

    </div>
  );
}

export default Level1;
