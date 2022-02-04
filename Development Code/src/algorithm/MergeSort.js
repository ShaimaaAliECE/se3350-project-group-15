//import React, { useState } from "react";
import React from "react";
export default function MergeSort() {
  const merge = (arr, l, m, r) => {
    let n1 = m - l + 1,
      n2 = r - m;

    var L = new Array(n1);
    var R = new Array(n2);

    for (var i = 0; i < n1; i++) L[i] = arr[l + i];
    for (var j = 0; j < n2; j++) R[j] = arr[m + 1 + j];

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

    while (i < n1) {
      arr[k] = L[i];
      i++;
      k++;
    }

    while (j < n2) {
      arr[k] = R[j];
      j++;
      k++;
    }


  return(L);
    // console.log("left array: ");
    // printArray(L, L.length);
    // console.log("right array: ");
    // printArray(R, R.length);
    // console.log("<br></br>");

 };

  const mergeSort = (arr, l, r) => {
    for (var i = l; i <= r; i++) {
      console.log(arr[i]);
    }
    console.log("<br></br>");

    if (l >= r) {
      return; //returns recursively
    }
    var m = l + parseInt((r - l) / 2);
    mergeSort(arr, l, m);

    mergeSort(arr, m + 1, r);

    merge(arr, l, m, r);
  };

  var arr = [12, 11, 13, 5, 6, 7];
  const printResult = (arr) => {
    const arrSize = arr.length;
    mergeSort(arr, 0, arr.length - 1);

    console.log("<br>Sorted array is </br>");
    printArray(arr, arrSize);
  };

  const printArray = (A, size) => {
    for (var i = 0; i < size; i++) console.log(A[i] + " ");
  };

  printResult(arr);

  return (
  <div>
	 {this.merge()}
  </div>
  );
}
