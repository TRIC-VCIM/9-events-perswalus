let button= document.querySelector('button');


  button.onclick = {};
  let  = Math.floor(Math.random() * 100) + 1;
  let guesses = [];

  function checkGuess() {
    const userGuess = parseInt(document.getElementById('userGuess').value);
    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
      alert('Please enter a valid number between 1 and 100.');
      return;
    }

    const difference = Math.abs(solutionNumber - userGuess);
    let temperature = getTemperature(difference);

    guesses.push({ guess: userGuess, temperature: temperature });
    displayGuesses();
    if (userGuess === solutionNumber) {
      document.getElementById('feedback').innerHTML = `<p>Congratulations! You guessed the correct number: ${solutionNumber}!</p>`;
    }
  }

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

  function displayGuesses() {
    let log = '<p>Your guesses:</p>';
    guesses.forEach((item) => {
      log += `<p>You guessed ${item.guess} - ${item.temperature}</p>`;
    });
    document.getElementById('feedback').innerHTML = log;
  }




