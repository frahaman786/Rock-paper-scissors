function Game(playerChoice) {
   
    const choices = ['Rock', 'Paper', 'Scissors'];
    

    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    
   
    document.getElementById('player-choice').innerText = `PLAYER: ${playerChoice}`;
    document.getElementById('computer-choice').innerText = `COMPUTER: ${computerChoice}`;
    
  
    let result;
    if (playerChoice === computerChoice) {
        result = "It's a tie!";
    } else if (
        (playerChoice === 'Rock' && computerChoice === 'Scissors') ||
        (playerChoice === 'Paper' && computerChoice === 'Rock') ||
        (playerChoice === 'Scissors' && computerChoice === 'Paper')
    ) {
        result = "You win!👍";
    } else {
        result = "You lose!😭";
    }
    
    
    document.getElementById('resultDisplay').innerText = `RESULT: ${result}`;
}