const possibleChoices = ['rock', 'paper', 'scissors'];

function getComputerChoice()
{
    const randomNumber = Math.floor(Math.random() * possibleChoices.length);
    const computerChoice = possibleChoices[randomNumber];
    return computerChoice;
}
console.log(getComputerChoice(getComputerChoice));