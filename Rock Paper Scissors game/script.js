// Snake Watar Gun game
//the game should ask you to enter s, w, or g . the computer should be able to randomly generate s ,w or g and declare win or lose using alert . use confirm and prompt wherever required.

// getting all the neccessary  elements.
let rock = document.getElementById('rock');
let paper = document.getElementById('paper');
let sci = document.getElementById('scissors');
let output = document.getElementById('output')

// User input
let user = '';
rock.addEventListener('click', () => {
    user = 'rock'
    game(user);
})
paper.addEventListener('click', () => {
    user = 'paper'
    game(user);
})
sci.addEventListener('click', () => {
    user = 'scissors'
    game(user);
})

//Computer Choice
let allChoices = ['rock', 'scissors', 'paper'];

let randomChoice = (allChoices) => {
    return allChoices[Math.floor(Math.random() * 3)];
}

function game(user) {
    let computerChoice = randomChoice(allChoices);
    // console.log(computerChoice)
    // console.log(user);

    // showing output
    if (user == 'rock' && computerChoice == 'scissors') {
        output.innerHTML = `Your Choice is ${user}.<br>Computer Choice is ${computerChoice}.<br><b>You Won</b>`;
    }
    else if (user == 'rock' && computerChoice == 'paper') {
        output.innerHTML = `Your Choice is ${user}.<br>Computer Choice is ${computerChoice}.<br><b>Computer Won</b>`;
    }
    else if (user == 'scissors' && computerChoice == 'rock') {
        output.innerHTML = `Your Choice is ${user}.<br>Computer Choice is ${computerChoice}.<br><b>Computer Won</b>`;
    }
    else if (user == 'scissors' && computerChoice == 'paper') {
        output.innerHTML = `Your Choice is ${user}.<br>Computer Choice is ${computerChoice}.<br><b>You Won</b>`;
    }
    else if (user == 'paper' && computerChoice == 'rock') {
        output.innerHTML = `Your Choice is ${user}.<br>Computer Choice is ${computerChoice}.<br><b>You Won</b>`;
    }
    else if (user == 'paper' && computerChoice == 'scissors') {
        output.innerHTML = `Your Choice is ${user}.<br>Computer Choice is ${computerChoice}.<br><b>Computer Won</b>`;
    }
    else if (user != 'paper' && user != 'scissors' && user != 'rock') {
        output.innerHTML = '<b>enter a valid character</b>'
    }
    else {
        output.innerHTML = `<b>Your Choice is ${user},Computer Choice is ${computerChoice}.\nGame Ties</b>`;
    }
}