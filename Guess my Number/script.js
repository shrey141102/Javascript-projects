'use strict';

let Score = 20;
let maxi = 0;
let secretNumber = Math.trunc(Math.random()*20) + 1;

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click',function(){
    let guess = Number(document.querySelector('.guess').value);

    // if(!guess) document.querySelector('.message').textContent = '⛔ No Number';
    if(!guess) displayMessage('⛔ No Number');
    else if(guess === secretNumber)
    {
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.message').textContent = '🥳 Your Guess is Correct';
        // HScore = Score;
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.highscore').textContent = Math.max(maxi,Score);
        maxi = Score;
    }
    else if(guess !== secretNumber) {
      if(Score>1)
      {
        document.querySelector('.message').textContent = guess > secretNumber ?'Guess a bit 👇' : 'Guess a bit 👆';
      Score--;
      document.querySelector('.score').textContent = Score;
      }
      else
      {
        document.querySelector('.message').textContent = 'you have lost🥲, Try Again';
        document.querySelector('.score').textContent = '0';
      }
    }
  });
//     else if(guess > secretNumber)
//     {
//       if(Score>1)
//       {
//         document.querySelector('.message').textContent = 'Guess a bit 👇';
//       Score--;
//       document.querySelector('.score').textContent = Score;
//       }
//       else
//       {
//         document.querySelector('.message').textContent = 'you have lost🥲, Try Again';
//         document.querySelector('.score').textContent = '0';
//       }
//     }
//     else if(guess < secretNumber)
//     {
//       if(Score>1)
//       {
//         document.querySelector('.message').textContent = 'Guess a bit 👆';
//       Score--;
//       document.querySelector('.score').textContent = Score;
//       } else{
//         document.querySelector('.message').textContent = 'you have lost🥲, Try Again';
//         document.querySelector('.score').textContent = '0';
//       }
      
//     }
// });

document.querySelector('.again').addEventListener('click',function(){
    Score = 20;
    secretNumber = Math.trunc(Math.random()*20) + 1;
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.score').textContent = Score;
});