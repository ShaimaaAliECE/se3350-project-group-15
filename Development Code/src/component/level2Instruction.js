import React, { Component } from "react";
import leftArrow from "../assets/svg/left-arrow.svg";
import rightArrow from "../assets/svg/right-arrow.svg";

//create a step-by-step instruction 
//enable next button after answer is checked


export default class InstructionButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      introductionDictionary: [// the dictionary that includes all the instruction to indicate player about the process.
        "Welcome to the Merge Sort Algorithm! Press start to begin.",
        "Slice the entire Array into half",
        "Split the selected array(as evenly as possible)",
        "Split the left sub-array and right sub-array",
        "Keep split the sub-array until all the sub-arrays contain only 1 number",
        "All sub-arrays contain 1 number, it's time to sort",
        "Select the minimum number and place at the left",
        "Repeat the previous step and place the number after the previous number",
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
  showInstruction() {//changing the text in span
    return this.state.introductionDictionary[this.props.passCurrentStep];
  }

  selectNextInstruction() {//Click and select next Instruction
    //console.log('Forwarding',this.state.introductionDictionary[this.state.count]);
    this.props.callbackSetStep(this.props.passCurrentStep + 1);
    console.log(this.props.passDisplayArray);
  }

  selectPreviousInstruction() {//Click and select preious instruction
    //console.log('Backwarding',this.state.introductionDictionary[this.state.count]);
    this.props.callbackSetStep(this.props.passCurrentStep - 1);
    console.log(this.props.passDisplayArray);
  }
  render() {
    return (
      <div className="BottomInstructions" class="shadow p-3 mb-5 w-25 d-flex justify-content-center bg-secondary rounded">
        <span className='Instruction'>
          {this.showInstruction()}
        </span>
        
        <button className='BackwardBtn' disabled={this.props.passCurrentStep > 1 ? '' : 'disabled'} onClick={this.selectPreviousInstruction}>
          Previous
        </button>
        <button className='ForwardBtn' disabled={this.props.passCurrentStep < 13 && this.props.passCurrentStep != 0 ? '' : 'disabled'} onClick={this.selectNextInstruction}>
          Next
        </button>
      </div>
    )
  }
}