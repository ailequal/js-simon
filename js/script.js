// code
$(document).ready(function () {
  // creating array that stores the numbers (without repetition)
  var arrayNumber = [];
  var number = 0;
  for (var i = 0; i < 5; i++) {
    do {
      number = getRandomNumber(1, 100);
    } while (scanArray(arrayNumber, number));
    arrayNumber.push(number);
  }

  // display an alert with 5 random numbers
  var alertNumber = '';
  for (var i = 0; i < arrayNumber.length; i++) {
    alertNumber = alertNumber + ' ' + arrayNumber[i];
  }
  alert('Try to memorize this numbers: ' + alertNumber);

  // start a timer for 30 seconds

  // ask the user to insert the 5 numbers (in order??)

  // display the results (how many and which one were correct)
});


// function
// generate random numbers between min and max
function getRandomNumber(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// check if an item is stored inside an array
function scanArray(array, item) {
  var i = 0;
  while (i < array.length) {
    if (array[i] === item) {
      return true;
    }
    i++;
  }
  return false;
}
