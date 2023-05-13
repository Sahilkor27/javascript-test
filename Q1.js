function filterOddNumbers(arr, isEven) {
    const filteredArray = [];
    for (const number of arr) {
      if (!isEven(number)) {
        filteredArray.push(number);
      }
    }
    return filteredArray;
  }
  
  // Example usage
  const numbers = [1, 2, 3, 4, 6];
  
  const isEven = number => number % 2 === 0;
  
  const oddNumbers = filterOddNumbers(numbers, isEven);
  
  console.log(oddNumbers); // [1, 3]