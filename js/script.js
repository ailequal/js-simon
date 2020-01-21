// code
$(document).ready(function () {
  // creating array that stores the numbers (without repetition)
  var arrayBot = [];
  var numberBot = 0;
  var toRemember = 5;
  for (var i = 0; i < toRemember; i++) {
    do {
      numberBot = getRandomNumber(1, 100);
    } while (scanArray(arrayBot, numberBot));
    arrayBot.push(numberBot);
  }
  console.log(arrayBot);

  // display an alert with toRemember random numberBots
  var alertBot = '';
  for (var i = 0; i < arrayBot.length; i++) {
    alertBot = alertBot + ' ' + arrayBot[i];
  }
  alert('Try to memorize this numbers: ' + alertBot);

  // start a timer for 30 seconds and then start the function
  // that will ask the user to insert the toRemember numbers (in order??)
  // check that is between min and max
  // check that there is no repettion
  setTimeout(function () {
    var arrayUser = [];
    var numberUser = 0;
    var i = 0;
    do {
      numberUser = parseInt(prompt('Insert one of the numbers that were display here 30 seconds ago'));
      if (checkMinMax(1, 100, numberUser) && !scanArray(arrayUser, numberUser)) {
        arrayUser.push(numberUser);
        i++;
      }
    } while (i < toRemember);
    console.log(arrayUser);

    // compare the inserted numbers with the arrayBot
    var score = 0;
    for (var i = 0; i < arrayBot.length; i++) {
      if (scanArray(arrayBot, arrayUser[i])) {
        score++;
      }
    }
    console.log(score);
    console.log(compareArray(arrayBot, arrayUser));

    // display the results (how many and which one were correct)

  }, 1000);
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

// check if two arrays are exactly the same
function compareArray(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
}
