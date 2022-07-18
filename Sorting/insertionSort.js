/*
 * Author: Olutola Oloruntobi Paul
 * Date: 7/18/2022
 * Function for implementing insertion sort aldorithm
 */

const insertionSort = (arr) => {
  for (let i = 1; i <= arr.length; i++) {
    let temp = arr[i];
    for (let j = i - 1; j >= 0; j--) {
      if (temp < arr[j]) {
        prev = arr[j];
        arr[j] = temp;
        arr[j + 1] = prev;
      }
    }
  }
  return arr;
};
