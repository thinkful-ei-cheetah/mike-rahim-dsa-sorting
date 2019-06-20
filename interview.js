/*
Write an algorithm to sort an array containing only 1s and 0s.
Your algorithm should only iterate through the array once.
You can't use any extra memory to store the whole dataset.

input: [0 0 1 1 0 1 0 1]
output: [0 0 0 0 1 1 1 1 1]

go through the array
look at the first item and last item (i, j)
  if it is a 1 at the beginning and 0 is at the end, swap
  then i++ and j--
*/
const input = [1, 0, 0, 1, 1, 0, 1, 0, 1];
function sortBinary(arr) {
  let swapSpot = 0;
  let current;

  for (let i = 0; i < arr.length; i++) {
    current = arr[i];
    if (current < 1) {
      swap(arr, i, swapSpot);
      swapSpot++;
    }
  }

  return arr;
}
console.log(sortBinary(input));

function zeroOneSort(arr){
  let currIndex = (arr.length - 1);
  for( let i = currIndex; i > 0; i--){
    if(arr[i] ===1){
      swap(arr, i, currIndex)
      currIndex = i
    }
  }
  return arr
}
console.log(zeroOneSort(input));


function swap(array, i, j) {
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
}