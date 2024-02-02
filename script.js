

function getComputerChoice()
{
    const possibleChoices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    const computerChoice = possibleChoices[randomNumber];
    return computerChoice;
}

function playRound (playerSelection, computerSelection)
{
    if (playerSelection === computerSelection)
    {
        console.log ("It's a tie"); 
    }
    else if (
        (playerSelection === 'rock' && computerSelection === 'scissors')||
        (playerSelection === 'paper' && computerSelection === 'rock') ||
        (playerSelection === 'scissors' && computerSelection === 'paper')
    )
    {
        console.log("You win!");
    }
    else{
        console.log("You lose!");
    }
}   

const playerSelection = prompt("Choose rock paper or scissors").toLowerCase();
const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));