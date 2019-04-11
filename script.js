let playerScore = 0;
let aiScore = 0;
const displayResult = document.querySelector('#win-condition');

function computerPlay() {
    const choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return 'rock';
    } else if (choice === 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
};

function playRound(e) {
    const ai = computerPlay();
    let p1;

    // If there's no ID the travese the DOM to find an id
    if (e.target.id) {
        p1 = e.target.id;
    } else {
        p1 = e.target.parentElement.id;
    }

    const winResult = `${p1} vs ${ai}. You Win!`;
    const loseResult = `${p1} vs ${ai}. You Lose!`;

    // Draw condition
    if (p1 === ai) {
        displayResult.textContent = `${p1} vs ${ai}. It's a draw!`;
        
        // Rock win condition
    } else if (p1 === 'rock') {
        if (ai === 'scissors') {
            playerScore++;
            displayResult.textContent = winResult;
            updateScore();
            checkGameEnd()
        } else {
            aiScore++;
            displayResult.textContent = loseResult;
            updateScore();
            checkGameEnd()
        }
        // Paper win condition
    } else if (p1 === 'paper') {
        if (ai === 'rock') {
            playerScore++;
            displayResult.textContent = winResult;
            updateScore();
            checkGameEnd()
        } else {
            aiScore++;
            displayResult.textContent = loseResult;
            updateScore();
            checkGameEnd()
        }
        // Scissors win condition
    } else if (p1 === "scissors") {
        if (ai === 'paper') {
            playerScore++;
            displayResult.textContent = winResult;
            updateScore();
            checkGameEnd()
        } else {
            aiScore++
            displayResult.textContent = loseResult;
            updateScore();
            checkGameEnd()
        }
    }
};

function checkGameEnd() {
    const selectionsDiv = document.querySelector('.selections');

    if (playerScore === 5 || aiScore === 5) {
        selectionsDiv.innerHTML = `
            <button id="reset" class="reset" type="button">Play Again?</button>
        `;
    }

    if (playerScore === 5) {
        displayResult.textContent = "You have won!";
        selectionsDiv.innerHTML = `
            <button id="reset" class="reset" type="button">Play Again?</button>
        `;
    } else if (aiScore === 5) {
        displayResult.textContent = "The Computer has won! Better luck next time!";
        selectionsDiv.innerHTML = `
            <button id="reset" class="reset" type="button">Play Again?</button>
        `;
    }
}

function updateScore() {
    const p1Score = document.querySelector('#p1Score');
    const computerScore = document.querySelector('#aiScore');

    p1Score.textContent = playerScore;
    computerScore.textContent = aiScore;
}

const playerSelections = document.querySelectorAll('.btn');

playerSelections.forEach(selection => {
    selection.addEventListener('click', playRound);
})


