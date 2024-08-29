let score = 20;
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let highscore = 0;

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

// Event listener for the 'check' button to check the guess
document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔️ No number!');

        // When player wins
    } else if (guess === secretNumber) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('.number').textContent = secretNumber;

        // Change the background color to green
        document.querySelector('body').style.backgroundColor = '#60b347';
        // Increase the number width
        document.querySelector('.number').style.width = '30rem';

        // Update highscore if score is greater than current highscore
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = 'Highscore: ' + highscore;
        }

        // When guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            document.querySelector('.score').textContent = 'Score: ' + score;
        } else {
            displayMessage('💥 You lost the game!');
            document.querySelector('.score').textContent = 'Score: 0';
        }
    }
});

// Event listener for the 'again' button to reset the game
document.querySelector('.again').addEventListener('click', function () {
    // Restore initial values of 'score' and 'secretNumber' variables
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // Restore the initial conditions of message, number, score, and guess input fields
    displayMessage('Start guessing...');
    document.querySelector('.score').textContent = 'Score: ' + score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';

    // Restore the original background color and number width
    document.querySelector('body').style.backgroundColor ='#fff'
    document.querySelector('.number').style.width = '15rem';
});