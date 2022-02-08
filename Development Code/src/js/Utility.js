  /*level2 & level3*/
  export function calculateScore(sortedArray,answerArray,timeLeft) {
    //initiate a score variable
    let score=0;
    //compare two arrays
    if ((sortedArray != null) & (answerArray != null) & (timeLeft != null)) {
      for(let i=0;i<sortedArray.length;i++){
        if(answerArray[i]===sortedArray[i]){
          score++;
        }
      }
      //count in timeleft as bonus 
      return score+=timeLeft;
    } 
  }

  export function countMistakes(sortedArray,answerArray) {
    //initiate a mistakes variable
    let mistakes=0;
    //compare two arrays
    if ((sortedArray != null) & (answerArray != null)) {
      for(let i=0;i<sortedArray.length;i++){
        if(answerArray[i]!==sortedArray[i]){
          mistakes++;
        }
      }
      return mistakes;
    } 
  }

  let a1=[1,2,3];
  let a2 = [1,2,3];
  console.log(calculateScore(a1,a2,0))