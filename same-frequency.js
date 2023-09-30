function sameFrequency(num1, num2) {
    // Convert the integers to strings to easily count the frequency of digits
    const strNum1 = num1.toString();
    const strNum2 = num2.toString();

    // If the lengths of the strings are not equal, return false
    if (strNum1.length !== strNum2.length) {
        return false;
    }

    // Create objects to store the frequency of digits for both numbers
    const freq1 = {};
    const freq2 = {};

    // Count the frequency of digits in the first number
    for (const digit of strNum1) {
        freq1[digit] = (freq1[digit] || 0) + 1;
    }

    // Count the frequency of digits in the second number
    for (const digit of strNum2) {
        freq2[digit] = (freq2[digit] || 0) + 1;
    }

    // Compare the two objects to check if they have the same frequency of digits
    for (const key in freq1) {
        if (freq1[key] !== freq2[key]) {
            return false;
        }
    }

    return true;
}

module.exports = sameFrequency;
