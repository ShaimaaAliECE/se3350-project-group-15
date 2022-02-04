import React, { useState } from "react";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";
import ArrayGen from "./ArrayGen";
import MergesortFebThird from "../algorithm/SplitArray";
import SortingComponent from "./SortingComponent";
//ignore the algorithm files

function Level1() {
  let arr = [12, 11, 13, 5, 6, 7];
  let l = 0;
  let m = arr.length / 2;
  let r = arr.length;
  let leftHalf = arr.slice(l, m);
  let rightHalf = arr.slice(m, r);


  const [array, setArray] = useState();
  const halfArray = () => {
    setArray((pre) => leftHalf);
    console.log(array);
  };
  // halfArray(array.length);

  return (
    <div>
      <div class="ms-3">
        <h1>Level 1: MergeSort Algorithm</h1>
      </div>

      <HeaderLevel />
      {/* {array}
      <button onClick={halfArray}>half the array</button> */}
      {/* <MergesortFebThird arr={arr} l={l} m={m} r={r} /> */}
      <div class="d-flex justify-content-center">
        <SortingComponent />
      </div>
      <div class="fixed-bottom d-flex justify-content-center">
        <BottomInstructions />
      </div>
    </div>
  );
}

export default Level1;
