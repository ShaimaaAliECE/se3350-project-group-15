import React from "react";

export default class ArrayGenAileenP extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ArrayLength: props.ArrayLength,
      ArrayRange: props.ArrayRange,
      NumberArray: [], //this is where the numbers are contained -
      SortedArray: [],
    };
  }

  generateNumberArray() {
    let random = new Set();
    while (random.size < this.state.ArrayLength) {
      random.add(Math.floor(Math.random() * this.state.ArrayRange) + 1);
    }
    this.state.NumberArray = [...random];
    
    //pass the generated number array to HeaderLevel component
    this.props.parentCallback(this.state.NumberArray);
    this.forceUpdate()

    //Henry edit: merge sort the NumberArray 
    let numberArray = [...this.state.NumberArray];
    this.state.SortedArray = mergeSort(numberArray);
    this.props.parseSotedArray(this.state.SortedArray);
  }

  render() {
    return (
      <div>
        <div>
          <button
            onClick={() => {
              this.generateNumberArray();
            }}
            class="btn btn-success"
          >
            Start
          </button>
        </div>
        <div>
          <div class="row">
            {this.state.NumberArray.map((num, index) => {
              return (
                <div class="border col" key={index}>
                  {num}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

//------here Henry uses temporary mergeSort function due to not knowing which existing mergeSort algorithm to use-------
function mergeSort(array) {
  const half = array.length / 2;

  // Base case or terminating case
  if (array.length < 2) {
    return array;
  }

  const left = array.splice(0, half);
  return merge(mergeSort(left), mergeSort(array));
}

function merge(left, right) {
  let arr = [];
  // Break out of loop if any one of the array gets empty
  while (left.length && right.length) {
    // Pick the smaller among the smallest element of left and right sub arrays
    if (left[0] < right[0]) {
      arr.push(left.shift());
    } else {
      arr.push(right.shift());
    }
  }
  // Concatenating the leftover elements
  // (in case we didn't go through the entire left or right array)
  return [...arr, ...left, ...right];
}
//-----------------------------------------------------------------------------------------------------------------------
