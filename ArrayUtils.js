/**
 * (FOR DEBUGGING)
 * This function will print all Objects in the collection with the propertyValue.
 * 
 * @param {object} collection  - of Objects which will be iterated over
 */
function printObjects(objects) {
    for (var i = 0; i < objects.length; i++) {
        printObject(objects[i]);
    }

    function printObject(obj) {
        var propertyNames = Object.getOwnPropertyNames(obj);
        var consoleString = "";
        for (var i = 0; i < propertyNames.length; i++) {
            consoleString += propertyNames[i] + ": " + obj[propertyNames[i]] + ", ";
        }
        if (consoleString.length > 1) consoleString = consoleString.substring(0, consoleString.length - 2);
        console.log(consoleString);
    }
}

/**
 *  This function will check if the value is in the provided array. 
 * 
 *  @param {string} value - The value which should be checked
 *  @param {array} array - The array which should be checked
 * 
 *  @returns {boolean}
 */
function isValueInArray(value, array) {
  return (array.find(_isValueInArray) !== undefined);

  function _isValueInArray(valueInArray) {
    return valueInArray === value;
  }
}

/**
 *  This function will check if the array contains duplicate values.
 *  If it does, it will eliminate them. 
 * 
 *  @param {array} array - The array which should be reduced.
 * 
 *  @returns {array} returns a "set" array. 
 */
function arrayToArraySet(array) {
  var ret = array.reduce(function (accumulator, currentValue) {
    if (!isValueInArray(currentValue, accumulator)) {
        return accumulator.concat(currentValue);
    } else {
        return accumulator;
    }
  }, []);
  return ret;
}

/**
 * This function splits an array into groups of the length of size (second argument) and returns them as a two-dimensional array.
 * e.g. chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2) returns [[0, 1], [2, 3], [4, 5]].
 * 
 * @param {array} arr - The array which should be splitted into groups
 * @param {integer} size - The size of each splitted array
 * 
 * @returns {array} 2-dimensional
 */
function chunkArrayInGroups(arr, size) {
  if (size <= 0 || arr.length < 1) return [];

  var tempArray = [];
  var counter = 0;
  var copyOfArray = arr.slice();

  while (counter < arr.length) {
    arr = copyOfArray.slice();
    if (arr.length < counter + size) {
      tempArray.push(arr.slice(counter));
      counter += size;
    } else {
      tempArray.push(arr.slice(counter, counter + size));
      counter += size;
    }
  }

  return tempArray;
}

/**
 * This function removes all falsy values from an array.
 * Falsy values are: false, null, 0, "", undefined, and NaN.
 * 
 * @param {array} arr - The array which should be cleaned from falsy values
 */
function removeFalseValuesFromArray(arr) {
  arr = arr.filter(function (element) {
    if (element) return true;
    else return false;
  });

  return arr;
}

/**
 * This function will remove all values from the array which are provided in the later arguments.
 * 
 * @param {array} args The first argument should be the array. 
 * The following can be arrays or elements which should be substracted from the array.
 */
function removeValuesFromArray(arr) {
  var number;

  var args = Array.prototype.slice.call(arguments);
  var array = args.shift();
  var amountOfNumbersInArguments = args.length;

  for (var i = 0; i < amountOfNumbersInArguments; i++) {
    number = args.shift();
    array = array.filter(elementIsNumber);
  }

  function elementIsNumber(element) {
    if (number == element) return false;
    else return true;
  }

  return array;
}

/**
 * This function returns the index at which position the value should be inserted at a sorted array.
 * 
 * @param {array} arr - The sorted array which should be iterated through
 * @param {number} num - The number which should be inserted into the array.
 * 
 * @returns {number} index - The position which should be used to insert the value.
 */
function getIndexToIns(arr, num) {
  arr.sort(function (a, b) {
    return a - b;
  });
  var i, index = arr.length;
  for (i = 0; i < arr.length; i = i + 1) {
    if (arr[i] >= num) {
      index = i;
      break;
    }
  }
  return index;
}

/**
 * This function will return a new array. This new array have all the values which are NOT both in the provided arrays.
 * 
 * @param {array} arr1
 * @param {array} arr2
 * 
 * @returns {array} Values which are not in both arrays
 */
function diffArray(arr1, arr2) {
  var newArr = [];

  arr1.forEach(function(element){
     if(arr2.indexOf(element) === -1) {
       newArr.push(element);
     }
  });

  arr2.forEach(function(element){
    if(arr1.indexOf(element) === -1 && newArr.indexOf(element) === -1){
      newArr.push(element);
    }
  });

  return newArr;
}

/**
 * This function will look through the array of objects if there are matching objects with the second parameter.
 * 
 * @param {array} - Collection of Objects e.g. [{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }]
 * @param {object} - This is the object which the collection gets searched for. e.g.  { last: "Capulet" }
 * 
 * @returns {array} - Returns an array of the found objects e.g. [{ first: "Tybalt", last: "Capulet" }].
 */
function searchCollectionForObjects(collection, source) {
    var arr = [], props = [], prop, i;
    collection.forEach(function (element) {
        props = Object.keys(source);
        prop = props.pop();

        if (element.hasOwnProperty(prop)) {
            if (element[prop] !== null && element[prop] === source[prop]) {
                arr.push(element);
            }
        }
    });
    return arr;
}

/**
 * This function will check if the predicate (second arumgent) is truthy on all elements of a collection (first argument)
 *  
 * e.g. truthCheck([{"user": "SonGoku", "sex": "male"}, {"user": "Vegeta", "sex": "male"}, {"user": "Miku", "sex": "female"}, {"user": "Rem", "sex": "female"}], "sex");
 * returns true.
 * 
 * @param {array} - Collection of Objects 
 * @param {predicate} - Predicate which every object should be checked
 * 
 * @returns {boolean} - every object in array passed test = true, else false.
 */
function truthCheck(collection, pre) {
  for(var i = 0; i < collection.length; i++){
      if(!collection[i][pre]) return false;
  }
 return true;
}

/**
 * Every element which does not pass the function (second parameter) gets removed from the array
 * 
 * @param {array} - array which should be iterated over
 * @param {function} (predicate) - test function e.g. function (n) {return n>= 3;}
 * 
 * @returns {array} - returns the reduced array.
 */
function reduceArray(arr, func) {
  var cutArrayAt;
  var tempArray = [];
  
   for(var i = 0; i < arr.length; i++){
    if(func(arr[i])){
      cutArrayAt = i;
      break;
    }
  }
  if(cutArrayAt !== null) tempArray = arr.slice(cutArrayAt);
  return tempArray;
}

/**
 * This function will flatten the array. e.g. [1,[2],[[3]]] will become [1,2,3]
 * 
 * @param {array} - array which should be iterated over
 * 
 * @returns {array} - returns the flattened array.
 */
function flattenArray(arr) {
    var ret = [];
    for(var i = 0; i < arr.length; i++) {
        if(Array.isArray(arr[i])) {
            ret = ret.concat(flattenArray(arr[i]));
        } else {
            ret.push(arr[i]);
        }
    }
    return ret;
}


/** 
 * This function will iterate over the given array, and check the array at the provided position against the propertyName.
 * If it finds the property it will return the index else it will return -1.
 * 
 * @param {array} array - Which will be looked up 
 * @param {string} propertyName - The property which will be searched 
 * @param {int} position - The position where the property is located for multidimensional arrays
 * 
 * @return {int} returns -1 if not found, else the index in the array
 */
function findIndexForProperty(array, propertyName, position){
    for(var i = 0; i < array.length; i++){
        if(array[i][position] === propertyName) return i;
    }
    return -1;
}
