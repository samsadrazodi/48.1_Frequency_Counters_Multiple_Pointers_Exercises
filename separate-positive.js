// add whatever parameters you deem necessary
function separatePositive(arr) {
    let left = 0; // Pointer for positive integers
    let right = arr.length - 1; // Pointer for negative integers
  
    while (left <= right) {
      if (arr[left] < 0 && arr[right] > 0) {
        // Swap the positive and negative integers
        const temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
      } else {
        if (arr[left] > 0) {
          left++;
        }
        if (arr[right] < 0) {
          right--;
        }
      }
    }
  
    return arr;
  }

module.exports = separatePositive;