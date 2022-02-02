import React from "react";
class MergeSortComponent extends React.Component {

  merge(arr, l, m, r) {

   //n1 is the size of left
   //n2 is the size of the right
    let n1 = m - l + 1,
        n2 = r - m;

    // Create temp arrays
    var L = new Array(n1);
    var R = new Array(n2);

   // Copy data to temp arrays L[] and R[]
    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];
   
    // Initial index of merged subarray
    var k = l;


    while (i < n1 && j < n2) {
      if (L[i] <= R[j]) {
        arr[k] = L[i];
        i++;
      } else {
        arr[k] = R[j];
        j++;
      }
      k++;
    }

// Copy the remaining elements of L[], if there are any
    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

// Copy the remaining elements of R[], if there are any
    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }
    const leftArray = L;

    return (leftArray);

  }

  //half the array: l is the start point and r is the end point
  mergeSort(arr, l, r) {
    for (var i = l; i <= r; i++) {
      console.log(arr[i]);
    }
    console.log("<br></br>");

    if (l >= r) {
      return; 
      //returns recursively
    }

    //find the midpoint
    var m = l + parseInt((r - l) / 2);

    //half the left subarray (from start to mid)
    this.mergeSort(arr, l, m);
     //half the right subarray (from mid to end)
    this.mergeSort(arr, m + 1, r);

    this.merge(arr, l, m, r);

  }

  printResult(arr) {
    const arrSize = arr.length;
    this.mergeSort(arr, 0, arr.length - 1);

    //printout sorted array
    console.log("<br>Sorted array is </br>");
    this.printArray(arr, arrSize);
  }

  printArray(A, size) {
    for (var i = 0; i < size; i++) 
    console.log(A[i] + " ");
  }

  render() {
    this.printResult([12, 11, 13, 5, 6, 7]);
    return <div>hi</div>;
  }
}

export default MergeSortComponent;
