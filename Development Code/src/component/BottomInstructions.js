import React from 'react';


/*
1. Create button(done)
2. Link buttons with functions(done)
3. Write button function that forwards and backwards the instruction(on-going)
4. Write button function that can change the state of the algorithm to next and previous steps(on-going)
*/

class InstructionButton extends React.Component{
    constructor(props){
      super(props);
      this.state={
        count:0,
        introductionDictionary: [// the dictionary that includes all the instruction to indicate player about the process.
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
    };

    render(){
      return (
        <div className="BottomInstructions" class="shadow p-3 mb-5 w-25 d-flex justify-content-center bg-secondary rounded">
          <span className='Instruction'>
              Here is the Instruction.
          </span>
          <button className='ForwardBtn' onClick={this.showForwardInstruction()}>
            Next
          </button>
          <button className='BackwardBtn' onClick={this.showForwardInstruction()}>
            Previous
          </button>
        </div>
      )
    }

    this.showForwardInstruction=()=>{//
      return this.state.introductionDictionary[1]

    }

    selectNextInstruction(){

    }

    showBackwardInstruction(){

    }

    selectPreviousInstruction(){

    }


}



let i = 0;
/*
function BottomInstructions() {
  return (
    <div className="BottomInstructions" class="shadow p-3 mb-5 w-25 d-flex justify-content-center bg-secondary rounded">

      <div className="textField" id="textField">
        This is an instruction:)
        </div>

      <div class="InstructionButton">
        <button class="backwardButton" id="backwardBtn" onClick={showBackwardInstruction()}>
          (--
          </button>

        <button class="forwardButton" id="forwardBtn" onClick={showForwardInstruction()}>
          --)
          </button>
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


function showForwardInstruction(){// use it to display the next message\
  console.log("error")
  let instruction= selectNextInstruction();
  document.getElementsByClassName("textField").innerHTML=(instruction);
}


function showBackwardInstruction(){//use it to display the previous message 
  console.log("error");
  let instruction= selectPreviousInstruction();
  document.getElementsByClassName("textField").innerHTML=(instruction);
}

function selectNextInstruction(){// use to select the corret key for the next instruction
  i++;
  if(i>=13){
    i=13;
    return "This is the last step";
  }
  return introductionDictionary[i];
}

function selectPreviousInstruction(){// use to select the corret key for the previous instruction
  i--;
  if(i<=1){
    i=0
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


var introductionDictionary= {// the dictionary that includes all the instruction to indicate player about the process.
  1:"Select the entire Array",
  2:"Split the selected array(as evenly as possible)",
  3:"Split the left sub-array",
  4:"An array of length 1 cannot be split, ready to merge",
  5:"Merge selected arrays back together, in sorted order",
  6:"Select the minimum of the two values",
  7:"Add the selected value to the sorted array",
  8:"When one list becomes empty, copy all values from the remaining array into the sorted array",
  9:"Finished merging",
  10:"Select the smallest value from the front of each list(excluding values already in the sorted array)",
  11:"When one list becomes empty, copy all values from the remaining array into the sorted array",
  12:"Select the right subarray",
  13:"Done Sorting"
}

var size = introductionDictionary.length;
*/


export default InstructionButton;
