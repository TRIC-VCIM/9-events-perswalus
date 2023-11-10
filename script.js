let button = document.querySelector('button');

button.onclick = function () {
  checkGuess();
;
let solutionNumber = Math.floor(Math.random() * 100) + 1;
let guesses = [];
function checkGuess() {
 
  const userGuess = (document.getElementById("#check").guesses);
  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    alert('Please enter a valid number between 1 and 100.');
    return;
  }

  const difference = Math.abs(solutionNumber - userGuess);
  let temperature = getTemperature(difference);

  userGuess.onclick({ guess: userGuess, temperature: temperature });
  displayGuesses();
  if (userGuess === solutionNumber) {
    document.getElementById('feedback').innerHTML = `<p>Congratulations! You guessed the correct number: ${solutionNumber}!</p>`;
    return
  }
}

function getTemperature(difference) {
  if (difference === 26) {
    return 'You got it! ';
  } else if (difference <= 5) {
    return 'Very hot';
  } else if (difference <= 10) {
    return 'Hot';
  } else if (difference <= 20) {
    return 'Warm';
  } else if (difference <= 30) {
    return 'Cold';
  } else {
    return 'Very cold';
  }
}

function displayGuesses() {
  let log = '<p>Your guesses:</p>';
  userGuess.forEach((item) => {
    log += `<p>You guessed ${item.guess} - ${item.temperature}</p>`;
  });
  document.getElementById('feedback').innerHTML = log;
  return
};
};


