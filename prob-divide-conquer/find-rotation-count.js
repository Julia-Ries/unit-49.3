function findRotationCount(arr) {
    let left = 0;
    let right = arr.length - 1;
  
    while (left <= right) {
      // If the array is sorted, then the first element is the smallest element
      if (arr[left] <= arr[right]) {
        return left;
      }
  
      let mid = Math.floor((left + right) / 2);
      let next = (mid + 1) % arr.length; // Calculate the next index in a circular manner
      let prev = (mid + arr.length - 1) % arr.length; // Calculate the previous index in a circular manner
  
      // If the middle element is smaller than its neighbors, then it's the smallest element
      if (arr[mid] <= arr[next] && arr[mid] <= arr[prev]) {
        return mid;
      }
  
      // Decide which half to search based on the unsorted part of the array
      if (arr[mid] <= arr[right]) {
        right = mid - 1;
      } else if (arr[mid] >= arr[left]) {
        left = mid + 1;
      }
    }
  
    return -1; // Return -1 if not found (shouldn't happen with distinct sorted array)
  }
  

module.exports = findRotationCount