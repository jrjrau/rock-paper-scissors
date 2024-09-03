// const humanChoice = getHumanChoice()
const divResults = document.querySelector("#results");
let humanWins = 0
let computerWins = 0
let ties = 0

const buttons = document.querySelectorAll("button");
buttons.forEach(button => {
    button.addEventListener("click", function (e) {
        const humanChoice = e.target.id
        const computerChoice = getComputerChoice()
        console.log(computerChoice)
        const result = (getWinner(humanChoice,computerChoice))
        console.log(humanChoice)
        console.log(computerChoice)
        console.log(result)
        console.log(humanWins,ties,computerWins)
        divResults.textContent = result

        document.getElementById("playerWins").textContent = humanWins;
        document.getElementById("ties").textContent = ties;
        document.getElementById("computerWins").textContent = computerWins;

        if (computerWins >= 5){
            setTimeout(() => {
              if (confirm("You lose!\nPlay again?")){
                window.location.reload()
              }
        }, 0);
    }

        if (humanWins >= 5){
            setTimeout(() => {
            if (confirm("You win!\nPlay again?")){
                window.location.reload()
            }
        }, 0);
        }

    });
});

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

// function getHumanChoice(event){
//     const choice = event.target.id
//     console.log(choice)
//     return choice
// }

// function getHumanChoice() {
//     const choice = prompt('Rock Paper or Scissors?').toLowerCase();
//     if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
//         return choice;
//     } else {
//         console.log('Invalid choice');
//     }
// }

function getWinner(humanChoice, computerChoice) {
    switch (humanChoice){
        case "paper":
            if (computerChoice === 'rock'){
                humanWins++
                return `You chose Paper, Computer chose Rock \nYou Win!`
            }
            if (computerChoice === 'paper'){
                ties++
                return `You chose Paper, Computer also chose Paper\nTie!`
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
                return "You chose Rock, Computer chose Scissors\nYou Win!"
            }
            else {
                return "Uhhhh... try that again..."
        }

        default :
            console.log("Error")
            return "error"

    }}


// const content = document.createElement("div");
//     content.classList.add("content");
//     content.textContent = result;
//     content.style.color = "blue"
// divResults.append(content)