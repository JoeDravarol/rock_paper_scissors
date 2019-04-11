let playerScore = 0;
let aiScore = 0;

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
        console.log(p1)
    } else {
        p1 = e.target.parentElement.id;
    }

    // Draw condition
    if (p1 === ai) {
        return "It's a draw!";
        
        // Rock win condition
    } else if (p1 === 'rock') {
        if (ai === 'scissors') {
            playerScore++;
            return `You win! ${p1} beats ${ai}`;
        } else {
            aiScore++;
            return `You lose! ${ai} beats ${p1}`;
        }
        // Paper win condition
    } else if (p1 === 'paper') {
        if (ai === 'rock') {
            playerScore++;
            return `You win! ${p1} beats ${ai}`;
        } else {
            aiScore++;
            return `You lose! ${ai} beats ${p1}`;
        }
        // Scissors win condition
    } else if (p1 === "scissors") {
        if (ai === 'paper') {
            playerScore++;
            return `You win! ${p1} beats ${ai}`;
        } else {
            aiScore++
            return `You lose! ${ai} beats ${p1}`;
        }
    }
};

const playerSelections = document.querySelectorAll('.btn');

playerSelections.forEach(selection => {
    selection.addEventListener('click', playRound);
})

