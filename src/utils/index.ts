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
