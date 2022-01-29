import React from 'react';
import { useState } from "react";

function Level2() {
    const [ArrayLength, setArrayLength] = useState();
    const [NumberArray, setNumberArray] = useState([]);
  
    let newArray;
  
    function generateNumberArray() {
      // setNumberArray(
      //   Array.from({ length: {ArrayLength} }, () => Math.floor(Math.random() * 40))
      // );
      newArray = Array.from({ length: ArrayLength }, () =>
        Math.floor(Math.random() * 40)
      );
    }
  
    generateNumberArray();

  return <div>
      <input
        onChange={(e) => {
          setArrayLength(e.target.value);
        }}
      ></input>
      <div>
        <button
          onClick={(e) => {
            setNumberArray(newArray);
          }}
        >
          start
        </button>
      </div>
      <div>
        {NumberArray.map((num, index) => {
          return <div key={index}>{num}</div>;
        })}
      </div>
  </div>;
}

export default Level2;
