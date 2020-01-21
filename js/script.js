// code
$(document).ready(function () {
  // creating array that stores the numbers (without repetition)
  var arrayBot = [];
  var numberBot = 0;
  for (var i = 0; i < 5; i++) {
    do {
      numberBot = getRandomNumber(1, 100);
    } while (scanArray(arrayBot, numberBot));
    arrayBot.push(numberBot);
  }

  // display an alert with 5 random numberBots
  var alertBot = '';
  for (var i = 0; i < arrayBot.length; i++) {
    alertBot = alertBot + ' ' + arrayBot[i];
  }
  alert('Try to memorize this numbers: ' + alertBot);

  // start a timer for 30 seconds and then start the function
  // that will ask the user to insert the 5 numbers (in order??)
  var arrayUser = [];
  arrayUser = setTimeout(function () {
    for (var i = 0; i < 5; i++) {
      do {
  
      } while (true);
      // aske 3 times number, if between 1 and 100 push, otherwise ask again
      // only between 1 and 100
      // not same number
    }
    return arrayUser;
  }, 1000);

  // compare the inserted numbers with the arrayBot

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

// check that a number is between min and max
function checkMinMax(min, max, number) {
  if (number >= min && number <= max) {
    return true;
  }
  return false;
}
