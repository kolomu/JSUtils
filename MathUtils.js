/**
 * This function is for adding float numbers (currency precision 4 digits)
 * 
 * @param {number} summand1 - Number from which something gets substracted
 * @param {number} summand2 - Number which gets substracted from the minuend
 * 
 * @returns {number} sum
 */
function addFloatNumbers(summand1, summand2) {
    var sum = (summand1 + summand2).toPrecision(4);
    return parseFloat(sum);
}

/**
 * This function is for substracting float numbers (currency precision 4 digits)
 * 
 * @param {number} minuend - Number from which something gets substracted
 * @param {number} subtrahend - Number which gets substracted from the minuend
 * 
 * @returns {number} difference
 */
function substractFloatNumbers(minuend, subtrahend) {
    var difference = (minuend - subtrahend).toPrecision(4);
    return parseFloat(difference);
}