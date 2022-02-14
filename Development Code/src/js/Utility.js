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

export function mergeNode(leftArr, rightArr){
    let arr = [];
    while (leftArr.length && rightArr.length) {
      if (leftArr[0] < rightArr[0]) {
          arr.push(leftArr.shift())  
      } else {
          arr.push(rightArr.shift()) 
      }
    }
    return [ ...arr, ...leftArr, ...rightArr];
  }

//test
//remove export when testing
// let left = [3,6,8];
// let right = [4,7];
// let answerArray = mergeNode(left, right);
// console.log(answerArray);

// let left1 = [5];
// let right1 = [9];
// let answerArray1 = mergeNode(left1, right1);
// console.log(answerArray1);


  let a1=[1,2,3];
  let a2 = [1,2,3];
  console.log(calculateScore(a1,a2,0))