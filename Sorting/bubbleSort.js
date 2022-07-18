/*
 * Author: Olutola Oloruntobi Paul
 * Date: 7/18/2022
 * Function for implementing bubble sort algorithm
 */

const bubbleSort = (arr) => {
  for (i = arr.length; i >= 0; i--) {
    for (j = 0; j <= i - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};
