const game = () => {
    let pScore = 0;
    let cScore = 0;

    const playerName = prompt("What is your name?")
    document.querySelector(".player-score h2").textContent = playerName;
    //starts the game 
    const startGame = () => {
        const playBtn = document.querySelector('.intro button');
        const introScreen = document.querySelector('.intro');
        const match = document.querySelector('.match');
        playBtn.addEventListener('click', () => {
            introScreen.classList.add('fadeOut');
            match.classList.add('fadeIn');
        });
        
    };

    //update score

    const updateScore = () => {
        const playerScore = document.querySelector('.player-score p');
        const computerScore = document.querySelector('.computer-score p');
        playerScore.textContent = pScore;
        computerScore.textContent = cScore;
    }

    // Play match
    const playMatch = () => {
        const options = document.querySelectorAll('.options button');
        const playerHand = document.querySelector('.player-hand');
        const computerHand = document.querySelector('.computer-hand');
        const hands = document.querySelectorAll('.hands img');

        hands.forEach(hand => {
            hand.addEventListener('animationend', function() {
                this.style.animation = '';
            });
        })
        // Computer Options
        const computerOptions = ['rock', 'paper', 'scissors'];

        options.forEach(option => {
            option.addEventListener('click', function() {
                const computerNumber = Math.floor(Math.random() * 3);
                const computerChoice = computerOptions[computerNumber];
                setTimeout(() => {
                    // computer's Choice
                    compareHands(this.textContent, computerChoice);

                    //update images
                    playerHand.src = `./assets/${this.textContent}.png`;
                    computerHand.src = `./assets/${computerChoice}.png`;
    
                }, 2000)
                //Compare hands

                // adding animation
                playerHand.style.animation = "shakePlayer 2s ease";
                computerHand.style.animation = "shakeComputer 2s ease";

            })
        });
    };

    const restart = () => {
        const restartBtn = document.querySelector('.restart');
        restartBtn.addEventListener('click', () => {
            pScore = 0;
            cScore = 0;
            updateScore();
        })
    }

    const compareHands = (playerChoice, computerChoice) => {
        const winner = document.querySelector(".winner");

        if (playerChoice === computerChoice) {
            winner.textContent = "It is a Tie!";
            return;
        };

        // player chooses rock
        if (playerChoice === "rock") {
            if (computerChoice === 'scissors') {
                winner.textContent = "Player Wins!";
                pScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins!";
                cScore ++;
                updateScore();
                return;
            };
        };

        // player chooses paper
        if (playerChoice === "paper") {
            if (computerChoice === 'scissors') {
                winner.textContent = "Computer Wins!";
                cScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = "Player Wins!";
                pScore ++;
                updateScore();
                return;
            };
        };
        
        //checks for scissors
        if (playerChoice === "scissors") {
            if (computerChoice === 'paper') {
                winner.textContent = "Player Wins!";
                pScore ++;
                updateScore();
                return;
            } else {
                winner.textContent = "Computer Wins!";
                cScore ++;
                updateScore();
                return;
            };
        };
    };



    startGame();
    playMatch();
    restart();
}
game();
