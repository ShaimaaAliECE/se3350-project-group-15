import React, { Component } from "react";
import leftArrow from "../assets/svg/left-arrow.svg";
import rightArrow from "../assets/svg/right-arrow.svg";
//import "./BottomInstructions.css";


/*
1. Create button(done)
2. Link buttons with functions(done)
3. Write button function that forwards and backwards the instruction(on-going)
4. Write button function that can change the state of the algorithm to next and previous steps(on-going)
*/

export default class InstructionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introductionDictionary: [// the dictionary that includes all the instruction to indicate player about the process.
        "Welcome to the Merge Sort Algorithm! Press start to begin.",
        "Select the entire Array",
        "Split the selected array(as evenly as possible)",
        "Split the left sub-array",
        "An array of length 1 cannot be split, ready to merge",
        "Merge selected arrays back together, in sorted order",
        "Select the minimum of the two values",
        "Add the selected value to the sorted array",
        "When one list becomes empty, copy all values from the remaining array into the sorted array",
        "Finished merging",
        "Select the smallest value from the front of each list(excluding values already in the sorted array)",
        "When one list becomes empty, copy all values from the remaining array into the sorted array",
        "Select the right subarray",
        "Done Sorting"
      ]
    }



    this.selectNextInstruction = this.selectNextInstruction.bind(this);// binding the method to the this statement in the function
    this.selectPreviousInstruction = this.selectPreviousInstruction.bind(this);
    //this.showInstruction=this.showInstruction.bind
  };

  render() {
    return (
      <div className="BottomInstructions" class="shadow p-3 mb-5 w-25 d-flex justify-content-center bg-secondary rounded">
        <span className='Instruction'>
          {this.showInstruction()}
        </span>
        <button className='BackwardBtn' disabled={this.props.passCurrentStep > 0 ? '' : 'disabled'} onClick={this.selectPreviousInstruction}>
          Previous
        </button>
        <button className='ForwardBtn' disabled={this.props.passCurrentStep < 13 && this.props.passCurrentStep != 0 ? '' : 'disabled'} onClick={this.selectNextInstruction}>
          Next
        </button>
      </div>
    )
  }





  showInstruction() {//changing the text in span
    return this.state.introductionDictionary[this.props.passCurrentStep];
  }

  selectNextInstruction() {//Click and select next Instruction
    //console.log('Forwarding',this.state.introductionDictionary[this.state.count]);
    this.props.callbackSetStep(this.props.passCurrentStep + 1);


  }

  selectPreviousInstruction() {//Click and select preious instruction
    //console.log('Backwarding',this.state.introductionDictionary[this.state.count]);
    this.props.callbackSetStep(this.props.passCurrentStep - 1);


  }



}


/*
function BottomInstructions() {
  return (
    <div className="BottomInstructions" class="shadow p-3 mb-5 w-25 d-flex justify-content-center bg-secondary rounded">

      <div className="textField" id="textField">
        This is an instruction:)
      </div>
      <div className="footer-navigator">
        <div
          className="footer-navigator-button"
          onClick={showBackwardInstruction()}
        >
          <img
            src={leftArrow}
            alt="left-arrow"
          />
        </div>
        <div
          className="footer-navigator-button"
          onClick={showForwardInstruction()}
        >
          <img
            src={rightArrow}
            alt="right-arrow"
          />
        </div>
      </div>


    </div>
  );
}


/*class showForwardInstruction extends React.Component{
  constructor(props){
    super(props)
    this.handleClick=this.handleClick.bind(this);
    this.state={text:""};
  }

  handleClick(){
    var i=0;
    var text = "this is instruction";
    var speed=50
  }
}


function showForwardInstruction() {// use it to display the next message\
  console.log("error")
  let instruction = selectNextInstruction();
  document.getElementsByClassName("textField").innerHTML = (instruction);
}


function showBackwardInstruction() {//use it to display the previous message 
  console.log("error");
  let instruction = selectPreviousInstruction();
  document.getElementsByClassName("textField").innerHTML = (instruction);
}

function selectNextInstruction() {// use to select the corret key for the next instruction
  i++;
  if (i >= 13) {
    i = 13;
    return "This is the last step";
  }
  return introductionDictionary[i];
}

function selectPreviousInstruction() {// use to select the corret key for the previous instruction
  i--;
  if (i <= 1) {
    i = 0
    return "This is the first step";
  }
  return introductionDictionary[i];
}

function getDictionaryLength(){
  var size=0;
  for(i of introductionDictionary){
    size++
  }
  return size;
}


var introductionDictionary = {// the dictionary that includes all the instruction to indicate player about the process.
  1: "Select the entire Array",
  2: "Split the selected array(as evenly as possible)",
  3: "Split the left sub-array",
  4: "An array of length 1 cannot be split, ready to merge",
  5: "Merge selected arrays back together, in sorted order",
  6: "Select the minimum of the two values",
  7: "Add the selected value to the sorted array",
  8: "When one list becomes empty, copy all values from the remaining array into the sorted array",
  9: "Finished merging",
  10: "Select the smallest value from the front of each list(excluding values already in the sorted array)",
  11: "When one list becomes empty, copy all values from the remaining array into the sorted array",
  12: "Select the right subarray",
  13: "Done Sorting"
}

var size = introductionDictionary.length;
*/

