import mergeSortIterator from "./mergeSortIterator";
export default function handleRunning(data, callback) {
  if (data != null) {
    const innerSummaryArray = [];
    const generator = mergeSortIterator(data);
    do {
      const result = generator.next();
      if (result.value && result.value.length > 0) {
        innerSummaryArray.push(result.value);
      }
      if (result.done) {
        break;
      }
    } while (1);
    // console.log(innerSummaryArray);
    return innerSummaryArray;
  }
}
