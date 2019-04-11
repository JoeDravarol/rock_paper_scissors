let playerSelection, computerSelection;
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

    function playRound(playerSelection, computerSelection) {
        // Making the input to lower case to no worry about value being case sensitive later
        const p1 = playerSelection.toLowerCase();
        const ai = computerSelection;

        // Draw condition
        if (p1 === ai ) {
            playerScore++;
            aiScore++;
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
        } else {
            if (ai === 'paper') {
                playerScore++;
                return `You win! ${p1} beats ${ai}`;
            } else {
                aiScore++
                return `You lose! ${ai} beats ${p1}`;
            }
        }
    };

    function getSelection() {
        playerSelection = prompt("Type either Rock, Paper or Scissors");
        computerSelection = computerPlay();
    }

    function game() {

        for (let i = 0; i < 5; i++) {
            getSelection();
            console.log(playRound(playerSelection, computerSelection));
        }
        
        if (playerScore > aiScore) {
            console.log(`The player has won with ${playerScore} score against the ai with ${aiScore} score`);
        } else if (playerScore < aiScore) {
            console.log(`The ai has won with ${aiScore} score against the player with ${playerScore} score`);
        } else {
            console.log(`It's a draw between both player with ${playerScore} score each`);
        }
    };

    game();