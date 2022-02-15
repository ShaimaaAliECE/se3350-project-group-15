//1 - TODO: generate an random number array (done)
//2 - TODO: pass the generated number array as input to the merge sort algorithm component

import React from "react";

function RunButton() {
  const [ArrayLength, setArrayLength] = useState(10); //the deafult array length is 10
  const [NumberArray, setNumberArray] = useState([]);

  let newArray; //a temporary array holder

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
    //   if(NumberArray){
    //   setShowComponent(!showComponent)
    //   }
  };

  const RunMergeSort = () => {
    //1 - TODO: generate an random number array (done)
    generateNumberArray();
    //2- TODO: pass the generated number array as input to the merge sort algorithm component
  };

  return (
    <div>
      <button onClick={RunMergeSort}>Run</button>
    </div>
  );
}



export default RunButton;
