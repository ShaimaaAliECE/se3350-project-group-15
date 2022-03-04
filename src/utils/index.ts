var allStep: string[] = []

interface SortStepProject {
  leftTips: boolean,
  data: number[],
  step: string[]
}

export const mergeSortIterator = function* (data: number[]) {
  let currentStepData: number[][] = [data];
  do {
    const processingData: number[][] = [];
    currentStepData.forEach((item: number[]) => {
      if (item.length === 1) {
        processingData.push(item);
      } else {
        const leftItemLength = Math.ceil(item.length / 2);
        processingData.push(
          item.slice(0, leftItemLength),
          item.slice(leftItemLength),
        );
      }
    });
    currentStepData = processingData;
    yield processingData;
  } while (currentStepData.length < data.length);
};

export const sort = function (arr: number[], step: string[], leftTips: boolean) : SortStepProject {
  if (step.length == 0){
    allStep.splice(0,allStep.length)
    allStep.push(arr.join(','))
  }
  if (arr.length <= 1){
    return {
      leftTips: leftTips,
      data: arr,
      step: step
    }
  }
  const leftItemLength = Math.ceil(arr.length / 2);
  var left = arr.slice(0,leftItemLength)
  var right = arr.slice(leftItemLength)
  
  var stepCode = allStep[allStep.length - 1] + '&' + left.join(',') + '|' + right.join(',');
  allStep.push(stepCode)
  
  var leftStep = left.join(',');
  var rightStep = right.join(',');
  if (step.length){
    leftStep = step[step.length - 1] + '&' + leftStep + '|' + rightStep
  }
  
  console.log('sort-->',left, right,'step-->>',leftStep)
  return merge(sort(left,[...step,leftStep],true),sort(right,[...step,leftStep],false), leftTips)
}

export const merge = function (leftModel: SortStepProject,rightModel: SortStepProject, leftTips: boolean) : SortStepProject {

  let left = leftModel.data
  let right = rightModel.data
  var temp: number[] = [];
  // createZeroStep(temp,left,right,leftTips)
  while(left.length > 0 && right.length > 0){
    var x = left.shift() || 0
    var y = right.shift() || 0
    if (x <= y){
      temp.push(x);
      right.unshift(y);
    }else{
      temp.push(y);
      left.unshift(x);
    }
    // debugger
    // createZeroStep(temp,left,right,leftTips)
  }
  
  if (left.length == 0){
    temp = temp.concat(right)
  }else{
    temp = temp.concat(left)
  }

  createStep(temp.join(','),leftTips, true)
  
  return {
    data: temp,
    step: allStep,
    leftTips: leftTips
  }
}

export const createStep = function(tempCode: string, leftTips: boolean, deleteLast: boolean){

  var lastStep = allStep[allStep.length - 1]
  
  var stepCode = lastStep.split('&')
  var lastCode = stepCode.pop() || ''
  var flastCode = stepCode.pop() || ''
  var flastArray = flastCode.split('|')
  
  var tempStep = ''
  if (flastArray.length > 1){
    if (leftTips){
      tempStep = tempCode + '|' + flastArray[1]
    }else{
      tempStep =  flastArray[0] + '|' + tempCode
    }
  }else{
    tempStep = tempCode
  }
  stepCode.push(tempStep)
  if (!deleteLast){
    stepCode.push(lastCode)
  }
  var newStepCode = stepCode.join('&')

  allStep.push(newStepCode)
}

export const createZeroStep = function(temp: number[], left: number[], right: number[],leftTips: boolean){

  var lastStep = allStep[allStep.length - 1]
  
  var stepCode = lastStep.split('&')
  var lastCode = stepCode.pop() || ''
  var flastCode = stepCode.pop() || ''
  var flastArray = flastCode.split('|')
  
  var tempStep = ''
  if (flastArray.length > 1){
    console.log('flastArray',flastArray,temp,left)
    if (leftTips){
      let length = flastArray[0].length - temp.length - 1
      let newTemp = [...temp]
      newTemp = newTemp.concat(Array(length).fill('-1'))
      tempStep = newTemp.join(',')
      tempStep = tempStep + '|' + flastArray[1]
    }else{
      let length = flastArray[1].length - temp.length - 1
      tempStep = temp.concat(Array(length).fill('-1')).join(',')
      tempStep =  flastArray[0] + '|' + tempStep
    }
  }
  stepCode.push(tempStep)
  stepCode.push(lastCode)
  var newStepCode = stepCode.join('&')

  allStep.push(newStepCode)
}