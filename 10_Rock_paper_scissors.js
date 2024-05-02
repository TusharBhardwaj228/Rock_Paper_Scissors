function computerGuess(){
  let random = Math.random();
  let computerChoice = '';
  if(random >= 0 && random <= 1/3){
    computerChoice = 'rock';
  }
  else if(random > 1/3 && random <= 2/3){
    computerChoice = 'paper';
  }
  else if(random > 2/3 && random <=1){
    computerChoice = 'scissors'
  }
  return computerChoice;
}

let score=JSON.parse(localStorage.getItem('score')) || {
  won: 0,
  Lose: 0,
  tie: 0
};
document.querySelector('.js-score').innerText = `Win: ${score.won}, Losses: ${score.Lose}, Ties: ${score.tie}`;
function userGuess(guess){
  let computerChoice = computerGuess();
  let result = '';
  if(guess === 'rock'){
    
    if (computerChoice==='rock'){
      result = 'Tie';
    }
    else if(computerChoice === 'paper'){
      result = 'Losses';
    }
    else if(computerChoice === 'scissors'){
      result = 'Won';
    }
  }
  if(guess === 'paper'){
    if (computerChoice==='rock'){
      result = 'Won';
    }
    else if(computerChoice === 'paper'){
      result = 'Tie';
    }
    else if(computerChoice === 'scissors'){
      result = 'Losses';
    }
  }
  else if(guess === 'scissors'){
    if (computerChoice==='rock'){
      result = 'Losses';
    }
    else if(computerChoice === 'paper'){
      result = 'Won';
    }
    else if(computerChoice === 'scissors'){
      result = 'Tie';
    }
  } 
  else if(guess === 'reset'){
    score.won=0;
    score.Lose=0;
    score.tie=0;
    localStorage.removeItem('score');
    document.querySelector('.js-result').innerText='';
    document.querySelector('.js-choices').innerText='';
    document.querySelector('.js-score').innerText = `Win: ${score.won}, Losses: ${score.Lose}, Ties: ${score.tie}`;
    return;
  }   
  if(result === 'Won'){
    score.won += 1;
    document.querySelector('.js-result').innerText='You Win.';
  }
  else if(result === 'Tie'){
    score.tie += 1;
    document.querySelector('.js-result').innerText='Tie.';
  }
  else if(result === 'Losses'){
    score.Lose += 1;
    document.querySelector('.js-result').innerText='You Lose.';
  }
  localStorage.setItem('score', JSON.stringify(score));
  document.querySelector('.js-score').innerText = `Win: ${score.won}, Losses: ${score.Lose}, Ties: ${score.tie}`;
  document.querySelector('.js-choices').innerHTML = `You 
  <img src="Tenth_images/${guess}-emoji.png" alt="scissor-img">
  - <img src="Tenth_images/${computerChoice}-emoji.png" alt="scissor-img"> Computer`;
}