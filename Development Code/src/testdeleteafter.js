import { mergeSortIterator } from './utils/mergeSortIterator';
export const handleRunning = (data) => {
    console.log(data);
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
    console.log(innerSummaryArray);
};

