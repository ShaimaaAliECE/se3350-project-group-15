export default class Helper {
    generateNumberArray(arrayLength, arrayRange) {
        let random = new Set();
        while (random.size < arrayLength) {
            random.add(Math.floor(Math.random() * arrayRange) + 1);
        }
        console.log('Debug: \nGenerated Array is: ' + [...random]);
        return [...random];
    }

    generateMap(array) {
        const generator = this.mergeSortIterator(array);
        let innerSummaryArray = [];
        do {
            const result = generator.next();
            if (result.value && result.value.length > 0) {
                innerSummaryArray.push(result.value);
            }
            if (result.done) {
                break;
            }
        } while (1);
        return innerSummaryArray;
    }

    // Merges two subarrays of arr[].
    // First subarray is arr[l..m]
    // Second subarray is arr[m+1..r]
    merge(arr, l, m, r) {
        var n1 = m - l + 1;
        var n2 = r - m;

        // Create temp arrays
        var L = new Array(n1);
        var R = new Array(n2);

        // Copy data to temp arrays L[] and R[]
        for (var a = 0; a < n1; a++)
            L[a] = arr[l + a];
        for (var b = 0; b < n2; b++)
            R[b] = arr[m + 1 + b];

        // Merge the temp arrays back into arr[l..r]

        // Initial index of first subarray
        var i = 0;

        // Initial index of second subarray
        var j = 0;

        // Initial index of merged subarray
        var k = l;

        while (i < n1 && j < n2) {
            if (L[i] <= R[j]) {
                arr[k] = L[i];
                i++;
            }
            else {
                arr[k] = R[j];
                j++;
            }
            k++;
        }

        // Copy the remaining elements of
        // L[], if there are any
        while (i < n1) {
            arr[k] = L[i];
            i++;
            k++;
        }

        // Copy the remaining elements of
        // R[], if there are any
        while (j < n2) {
            arr[k] = R[j];
            j++;
            k++;
        }
    }

    mergeSort(arr, l, r) {
        if (l >= r) {
            return;//returns recursively
        }
        var m = l + parseInt((r - l) / 2);
        this.mergeSort(arr, l, m);
        this.mergeSort(arr, m + 1, r);
        this.merge(arr, l, m, r);
    }

    * mergeSortIterator(data) {
        let currentStepData = [data];
        let finalData = [...data];
        let yieldData = [];
        this.mergeSort(finalData, 0, data.length - 1);
        console.log("Final data: " + finalData + " ,length: " + finalData.length)
        do {
            const processingData = [];
            currentStepData.forEach((item) => {
                if (item.length <= 2) {
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
            yieldData.push(currentStepData);
            yield processingData;
        } while (currentStepData.length < (data.length / 2));
        let middleRow = [];
        data.forEach((item, index) => {
            middleRow.push([item]);
        })
        yield middleRow;
        let anotherHalfData = JSON.parse(JSON.stringify(yieldData));
        for (let i = anotherHalfData.length - 1; i >= 0; i--) {
            anotherHalfData[i].forEach((item) => {
                this.mergeSort(item, 0, item.length - 1);
            })
            yield anotherHalfData[i];
        }
        yield finalData;
    }
}

