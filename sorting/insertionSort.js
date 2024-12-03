// Insertion Sort Implementation
/**
 * Function to perform Insertion Sort on an array.
 * @param {Array<number>} arr - The array to be sorted.
 * @returns {Array<number>} - The sorted array.
 */
function insertionSort(arr) {
    // Iterate over the array starting from the second element
    for (let i = 1; i < arr.length; i++) {
      let current = arr[i];  // The element to be inserted into the sorted part of the array
      let j = i - 1;         // Start comparing with the last element of the sorted part
      
      // Move elements of arr[0..i-1] that are greater than current to one position ahead of their current position
      while (j >= 0 && arr[j] > current) {
        arr[j + 1] = arr[j];  // Shift the element to the right
        j = j - 1;            // Move to the previous element in the sorted part
      }
  
      arr[j + 1] = current;   // Place the current element in the correct position
    }
  
    return arr;
  }
  
  // Test case: Sorting an array of numbers
  let arr = [5, 2, 9, 1, 5, 6];
  console.log("Original Array:", arr);
  console.log("Sorted Array:", insertionSort(arr));  // Log the sorted array
  