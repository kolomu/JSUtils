/**
 * This function checks whether the number of opening brackets
 * is matching the number of closing brackets.
 * 
 * @param {string} symbol Type of the opening bracket e.g. '(', '[', '{' 
 * @param {string} text The string which should be checked
 * 
 * @returns {boolean} true if matching, else false
 */
function MatchingBrackets(symbol, text){
    var symbolInverse = SymbolInverse(symbol);

    var openBr = 0;
    for(var i = 0; i < text.length; i++){
        if(text[i] === symbol) openBr++;
        if(text[i] === symbolInverse) openBr--;
    }

    if(openBr != 0) return false;
    else return true;
}

/**
 * This function returns the inverse of the symbol.
 * If it is not in the switch-statement, it will return false.
 * 
 * @param {string} symbol Type of the opening bracket e.g. '(', '[', '{' 
 * 
 * @returns {char|false} 
 */
function SymbolInverse(symbol){
     switch(symbol){
        case '(':
            return ')';
        case '{':
            return '}';
        case '[':
           return ']';
        default:
            return false;
    }
}

/**
 * This function truncates a string.
 * 
 * @param {string} str The string which should be truncated
 * @param {integer} num At which position the string should be truncated
 * 
 * @returns {string} truncated string
 */
function truncateString(str, num) {
  if(num>= str.length) return str;
  else if(num <=3){
    str = str.slice(0,num);
    str += "...";
  }else {
    str = str.slice(0,num-3);
    str += "...";
  }
  return str;
}

/**
 * This function will check if the string is ending with the specified argument
 * 
 * @param {string} str The string which should be checked 
 * @param {string} target - The string which must be at the end of str.
 * 
 * @returns {boolean} true, if the target is the ending of the string. false, if the target is not the ending of the string
 */
function endsWith(str, target) {
  str = str.substring(str.length - target.length, str.length);
  if(str==target) return true;
  return false;
}


/**
 * This function will set a character at the specified position in the string
 * 
 * @param {string} str The string for the operation
 * @param {number} index - The index at which the character gets replaced
 * @param {char} chr - The replacment character
 * 
 * @returns {string} string
 */
function setCharAt(str, index, chr) {
    if (index > str.length - 1) {
        return str;
    }
    return str.substr(0, index) + chr + str.substr(index + 1);
}

/**
 * This function will search and replace in the provided string the arguments
 * 
 * @param {string} str The string which should be replaced 
 * @param {string} before - The char/word/sentence which should be searched.
 * @param {string} after - The replacment string
 * 
 * @returns {string} Returns a new string
 */
function searchAndReplace(str, before, after) {
    var temp = str.split(" "), tempChar;
    temp.forEach(function (element, i) {
        if (element === before) {
            // check if first character is upper or lowercase
            if(before.charAt(0) === before.charAt(0).toLowerCase()){
               temp[i] = after; 
            }else {
              after = setCharAt(after, 0, after.charAt(0).toUpperCase());
              temp[i] = after;
            }
        }
    });
    return temp.join(" ");
}