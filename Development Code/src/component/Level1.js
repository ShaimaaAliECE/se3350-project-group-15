import React, { useState } from "react";
import HeaderLevel from "./HeaderLevel";
import BottomInstructions from "./BottomInstructions";
import MergeSort from "../algorithm/MergeSort";
import {SortingComponent} from "../algorithm/Merge_Sort/SortingComponent"

function Level1() {
  const [showComponent, setShowComponent]=useState(true);
  const [ArrayLength, setArrayLength] = useState(10); //the deafult array length is 10
  const [NumberArray, setNumberArray] = useState([]);

  let newArray;

  //TODO: better to generate unique numbers!!!
  //TODO: when 'RUN' btn is clicked for the first time, we get an empty array???
  // TODO: pass the generated number array as input to the merge sort algorithm component
  const generateNumberArray = (e) => {
    newArray = Array.from(
      { length: ArrayLength },
      () => Math.floor(Math.random() * 20) //numbers range from 0-20
    );
    setNumberArray(newArray);
    console.log(NumberArray);
    //show  SortingComponent
    if(NumberArray){
    setShowComponent(!showComponent)
    }
  };

  return (
    <div>
      <HeaderLevel />
      <button onClick={generateNumberArray}>Button</button>
      <div hidden={showComponent}>
        <SortingComponent unsorted={NumberArray}/>
      </div>
      <BottomInstructions />

      {/*<MergeSort />*/}
      
    </div>
  );
}

export default Level1;
