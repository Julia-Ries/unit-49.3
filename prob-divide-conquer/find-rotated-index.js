function findRotatedIndex(arr, num) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      let mid = Math.floor((left + right) / 2);
  
      if (arr[mid] === num) {
        return mid;
      }
  
      // If the left half is sorted
      if (arr[left] <= arr[mid]) {
        if (num >= arr[left] && num < arr[mid]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      }
      // If the right half is sorted
      else {
        if (num > arr[mid] && num <= arr[right]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  
    return -1;
  }
//                  L   m     R
//   const array = [3, 4, 1, 2];
//   const numToFind = 4;

  

module.exports = findRotatedIndex