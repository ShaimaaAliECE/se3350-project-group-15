//From Ives Luo
export default function* mergeSortIterator(data) {
  let currentStepData = [data];
  do {
    const processingData = [];
    currentStepData.forEach((item) => {
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
