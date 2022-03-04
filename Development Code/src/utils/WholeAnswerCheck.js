/*level2 & level3*/

//Henry edited: convert a string into INT array object
export function stringToArrayINT(string){
  let splitString = string.split(',');////Henry edited: string format '1,2,3,4'
  let size = splitString.length;
  let arr = [];
  for(let i=0; i<size; i++) {
     arr[i] = parseInt(splitString[i]);
  }
  return arr;
}


//Henry edited: returns a bool
export function arrayEquals(a, b) {
  return (
    Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index])
  );
}

export function calculateScore(sortedArray, answerArray, timeLeft) {
  //initiate a score variable
  let score = 0;
  //compare two arrays
  if (sortedArray != null && answerArray != null && timeLeft != null) {
    if (arrayEquals(sortedArray, answerArray)) {
      score++;
    }
  }
  //count in timeleft as bonus
  return (score += timeLeft);
}

export function countMistakes(sortedArray, answerArray) {
  //initiate a mistakes variable
  let mistakes = 0;
  //compare two arrays
  if (sortedArray != null && answerArray != null) {
    if (!arrayEquals(sortedArray, answerArray)) {
      mistakes++;
    }
    return mistakes;
  }
}

export function mergeNode(leftArr, rightArr) {
  let arr = [];
  while (leftArr.length && rightArr.length) {
    if (leftArr[0] < rightArr[0]) {
      arr.push(leftArr.shift());
    } else {
      arr.push(rightArr.shift());
    }
  }
  return [...arr, ...leftArr, ...rightArr];
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

//console testing example arrays
let a1 = [1, 2, 3];
let a2 = [1, 2, 3];
console.log(calculateScore(a1, a2, 0));
