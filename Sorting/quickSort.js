/*
 * Author: Olutola Oloruntobi Paul
 * Date: 7/19/2022
 * Function for implementing quick sort algorithm
 */

const swapValue = (arr, first, second) => {
  let temp = arr[first];
  arr[first] = arr[second];
  arr[second] = temp;
};

const pivot = (arr, pivotPoint = 0, endIndex = arr.length - 1) => {
  let swap = pivotPoint;
  for (let i = pivotPoint + 1; i <= endIndex; i++) {
    if (arr[i] < arr[pivotPoint]) {
      swap++;
      swapValue(arr, swap, i);
    }
  }
  swapValue(arr, pivotPoint, swap);
  return swap;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    let swap = pivot(arr, left, right);
    quickSort(arr, left, swap - 1);
    quickSort(arr, swap + 1, right);
  }
  return arr;
};
