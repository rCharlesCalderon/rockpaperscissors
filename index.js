function getComputerChoice(){
    let choice = Math.floor(Math.random() * 3) + 1
    if(choice === 1){
      return 'rock'
    }else if (choice === 2){
      return 'paper'
    }else if(choice === 3){
      return 'scissors'
    }
  }
  function playRound(playerSelection,computerSelection){
     if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors'){
          return 'You Win! Rock beats Scissors'
      }else if(playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper'){
          return 'You lose! Paper beats Rock!'
      }else if (playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock'){
          return 'You Win! Paper beats Rock!'
      }else if (playerSelection.toLowerCase() === 'paper' && computerChoice === 'scissors'){
          return 'You Lose! Scissors beats Paper!'
      }else if(playerSelection.toLowerCase() === 'scissors' && computerChoice === 'Paper'){
          return 'You Win! Scissors beats Rock!'
      } else if(playerSelection.toLowerCase() === 'Scissors' && computerSelection === 'rock'){
          return 'You Lose! Rock beats Scissors!'
      }else {return 'You Tie!'}
  
  }
  
  function game(){
      for (let i = 0; i <= 5; i++) {
          let playerSelection = prompt('Choose something:')
          console.log(playerSelection)
          const computerSelection = getComputerChoice()
         console.log(playRound(playerSelection, computerSelection))
        }
  }
  game()