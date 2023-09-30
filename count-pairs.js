// add whatever parameters you deem necessary
function countPairs(arr, targetSum) {
    const seen = new Set(); // To store the numbers we've seen
    let count = 0; // To count the pairs
  
    for (let num of arr) {
      const complement = targetSum - num;
  
      if (seen.has(complement)) {
        count++;
        seen.delete(complement); // Remove the complement to avoid counting it twice
      }
  
      seen.add(num);
    }
  
    return count;
  }

module.exports = countPairs;