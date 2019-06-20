const LinkedList = require('./linkedlist');
const _Node = require('./linkedlist');

/* 1. Understanding merge sort
  start: [21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
         [21, 1, 26 45, 29, 28, 2, 9] [16, 49, 39, 27, 43, 34, 46, 40]
        [21, 1, 26 45] [29, 28, 2, 9] [16, 49, 39, 27] [43, 34, 46, 40]
      [21, 1] [26 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40]

  [21] [1] [26] [45] [29] [28] [2] [9] [16] [49] [39] [27] [43] [34] [46] [40]

      [1, 21] [26, 45] [28, 29] [2, 9] [16, 49] [27, 39] [34, 43] [40, 46]
        [1, 21, 26, 45] [2, 9, 28, 29] [16, 27, 39, 49] [34, 40, 43, 46]  
         [1, 2, 9, 21, 26, 28, 29, 45] [16, 27, 34, 39, 40, 43, 46, 49]
         [1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]

  a) After 3 recursive calls: 
      [21, 1] [26 45] [29, 28] [2, 9] [16, 49] [39, 27] [43, 34] [46, 40]
  b) After 16 recursive calls, the array will be completely sorted in ascending
     order: [1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]
  c) The first two list to be merged will be 21 and 1
  d) On the 7th merge, it would be 43 and 34
*/

/* 2. Understanding quick sort
  1) [3 9 1 14 17 24 22 20]
    a) False, the pivot could be either 17 or 14 since all other values are 
       either less than 14 or greater than 17
    b) True, the values to the left of 17 or 14 are all less values and to the 
       right are greater values.
    c) False, all other values are either greater or less than values to their 
       left or right
    d) False, the pivot could be both, values to the left or right of 14 and
       17 are either less or greater than the said value

  2) [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]
    a) When using the last item as pivot
       1st partition: 10, 17, 13, 15, 19, 14, 3, 16, 9, 12
       2nd partition: 10, 3, 13, 15, 19, 14, 17, 16, 9, 12
    b) When using the first item as pivot
       1st partition: 14, 13, 17, 15, 19, 10, 3, 16, 9, 12
       2nd partition: 14, 13, 10, 15, 19, 17, 3, 16, 9, 12 
*/

// 3. Implementing quick sort
const data =
  '89 30 25 32 72 70 51 42 25 24 53 55 78 50 13 40 48 32 26 2 14 33 45 72 56 44 21 88 27 68 15 62 93 98 73 28 16 46 87 28 65 38 67 16 85 63 23 69 64 91 9 70 81 27 97 82 6 88 3 7 46 13 11 64 76 31 26 38 28 13 17 69 90 1 6 7 64 43 9 73 80 98 46 27 22 87 49 83 6 39 42 51 54 84 34 53 78 40 14 5';
const dataset = data.split(' ').map(num => Number(num));

function qSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = qSort(array, start, middle);
  array = qSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end){
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++){
    if (array[i] <= pivot){
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end - 1, j);
  return j; 
}

function swap(array, i, j){
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
// console.log(qSort(dataset));

// 4. Implementing merge sort
function mSort(array) {
  if (array.length <= 1) {
    return array;
  }
  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mSort(left);
  right = mSort(right);
  return merge(left, right, array);
}

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    } else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
}
// console.log(mSort(dataset));

// 5. Sorting a linked list using merge sort


// 6. Bucket sort
function bucketSort(array, low, high) {
  const newArray = [];
  for (let i = 0; i < high; i++) {
    newArray[i] = '';
  }

  for (let i = 0; i < array.length; i++) {
    newArray[array[i] - low] = array[i];
  }
  return newArray;
}
const bucketData = [8, 1, 9, 5, 4, 10, 6, 2, 3, 7];
// console.log(bucketSort(bucketData, 1, 10));

// 7. Sort in place


// 8. Sorting books

