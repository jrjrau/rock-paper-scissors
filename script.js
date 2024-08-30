

function getComputerChoice () {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return 'rock';
    case 1:

      return 'paper';
    case 2:
      return 'scissors';
  }
}

function getHumanChoice() {
    const choice = prompt('Rock Paper or Scissors?').toLowerCase();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
        return choice;
    } else {
        console.log('Invalid choice');
    }
}

const humanChoice = getHumanChoice()
const computerChoice = getComputerChoice()
let humanWins = 0
let computerWins = 0
let ties = 0

function getWinner() {
    switch (humanChoice){
        case 'paper':
            if (computerChoice === 'rock'){
                humanWins++
                return "You chose Paper, Computer chose Rock \nYou Win!"
            }
            if (computerChoice === 'paper'){
                ties++
                return "You chose Paper, Computer also chose Paper\nTie!"
            }
            if (computerChoice === 'scissors'){
                computerWins++
                return "You chose Paper, Computer chose Scissors\nYou Lose!"
            }
            else {
                return "Uhhhh... try that again..."
            }

        case 'scissors':
            if (computerChoice === 'rock'){
                computerWins++
                return "You chose Scissors, Computer chose Rock \nYou Lose!"
            }
            if (computerChoice === 'paper'){
                humanWins++
                return "You chose Scissors, Computer chose Paper\nYou Win!"
            }
            if (computerChoice === 'scissors'){
                ties++
                return "You chose Scissors, Computer also chose Scissors\nTie!"
            }
            else {
                return "Uhhhh... try that again..."
            }

        case 'rock':
            if (computerChoice === 'rock'){
                ties++
                return "You chose Rock, Computer also chose Rock \nTie!"
            }
            if (computerChoice === 'paper'){
                computerWins++
                return "You chose Rock, Computer chose Paper\nYou Lose!"
            }
            if (computerChoice === 'scissors'){
                humanWins++
                return "You chose Rock, Computer also chose Scissors\nYou Win!"
            }
            else {
                return "Uhhhh... try that again..."

        }
    }}
console.log(computerChoice)
console.log(getWinner())
console.log(humanWins,computerWins)

if (humanWins === 5){
    alert("Player wins first to 5\nSCORE: "+humanWins+' '+computerWins)
}
if (computerWins === 5){
    alert("Computer wins first to 5\nSCORE: "+computerWins+' '+humanWins)
}