# Insertion Sort Algorithm

This project demonstrates the implementation of the **Insertion Sort** algorithm in JavaScript. Insertion Sort is a simple and efficient sorting algorithm that works similarly to how we sort playing cards in our hands. Each time a new card (element) is picked, we insert it into the correct position in the sorted part of the array.

## How Insertion Sort Works

Insertion Sort works by building the sorted array one item at a time. It repeatedly takes an unsorted element from the list and places it in the correct position among the previously sorted elements.

### Algorithm Steps:

1. Start with the second element (`i = 1`) because the first element is considered sorted.
2. Compare the current element (`arr[i]`) with the elements before it (from index `i-1` to `0`).
3. Move all elements that are greater than the current element one position to the right.
4. Insert the current element at the correct position.

### Example:

For an array `[5, 2, 9, 1, 5, 6]`, the sorted array will be `[1, 2, 5, 5, 6, 9]`.

### How to Run

1. Clone the repository or download the files.
2. Open the `index.html` file in a web browser.
3. Open the browser console to see the original and sorted arrays logged.

### Technologies Used

- HTML
- JavaScript

### License

This project is open-source and available under the MIT License.
