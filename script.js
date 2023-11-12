





document.addEventListener('DOMContentLoaded', function () {
  //  1 and 100
  let solutionNumber = Math.floor(Math.random() * 100) + 1;

  // Select elements
  const guessInput = document.getElementById('guess');
  const checkButton = document.getElementById('check');
  const logElement = document.getElementById('log');

  
  let guesses = [];

  // Event listener for the form submission
  checkButton.addEventListener('click', function (event) {
    event.preventDefault(); // Prevent form submission

    // guess
    const userGuess = parseInt(guessInput.value);

    //  valid number, 1 and 100
    if (isNaN(userGuess) || userGuess < 0 || userGuess > 100) {
      alert('Please enter a valid number between 0 and 100.');
      return;
    }

    // Calculate the difference between the user's guess and the solution
    const difference = Math.abs(solutionNumber - userGuess);

    // temperature based on the difference
    let temperature = getTemperature(difference);

    // the guesse
    guesses.push({ guess: userGuess, temperature: temperature });

    // Display the guesses in the log
    displayGuesses();

    // Change, background color 
    document.body.style.backgroundColor = getColorFromTemperature(temperature);
  });

  // Function, temperature based on the difference
  function getTemperature(difference) {
    if (difference === 0) {
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

  // Function to display in the log
  function displayGuesses() {
    logElement.innerHTML = '<p>Your guesses:</p>';
    guesses.forEach(function (item) {
      logElement.innerHTML += `<p>You guessed ${item.guess} - ${item.temperature}</p>`;
    });
  }

  // color temp
  function getColorFromTemperature(temperature) {
    switch (temperature) {
      case 'You got it! ':
        return 'green'; // Success color
      case 'Very hot':
        return 'red';
      case 'Hot':
        return 'orange';
      case 'Warm':
        return 'yellow';
      case 'Cold':
        return 'blue';
      case 'Very cold':
        return 'purple';
      default:
        return 'white'; // Default color
    }
  }
});
