import "./App.css";
import Home from "./component/Home";
import Level1 from "./component/Level1";
import ParallaxComponent from "./component/ParallaxComponent";
import { useState } from "react";

function App() {
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
  console.log(NumberArray);

  return (
    <div>
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
      <Level1 />
      {/* <ParallaxComponent /> */}
    </div>
  );
}

export default App;
