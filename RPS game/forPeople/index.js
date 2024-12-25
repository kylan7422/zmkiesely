class Game{
  constructor()
  {
    this.wins=0;
    this.losses=0;
    this.ties=0;
  }
  playOneGame(playerMove){
    function pickComputerMove(){
      let rand = Math.random();
      let computerMove = rand<(1/3) ? 'Rock':(rand<(2/3) ? 'Paper':'Scissor');
      return computerMove;
    }
      let computerMove=pickComputerMove();
    if(playerMove=='Rock'){
      if(computerMove=='Scissor'){
        alert('Congratulation! You won\n You:✊ \nMe:✌️')
        this.wins++;
      }
      else if(computerMove=='Paper'){
        alert('Oh no! You lost\n You:✊ \nMe:🖐️')
        this.losses++;
      }
      else {
        alert('Nothing. Tie\n You:✊ \nMe:✊')
        this.ties++;
      }
    }
    else if(playerMove=='Paper'){
      if(computerMove=='Rock'){
        alert('Congratulation! You won\n You:🖐️ \nMe:✊')
        this.wins++;
      }
      else if(computerMove=='Scissor'){
        alert('Oh no! You lost\n You:🖐️ \nMe:✌️')
        this.losses++;
      }
      else {
        alert('Nothing. Tie\n You:🖐️ \nMe:🖐️')
        this.ties++;
      }
    }
    else if(playerMove=='Scissor'){
      if(computerMove=='Paper'){
        alert('Congratulation! You won\n You:✌️ \nMe:🖐️')
        this.wins++;
      }
      else if(computerMove=='Rock'){
        alert('Oh no! You lost\n You:✌️ \nMe:✊')
        this.losses++;
      }
      else {
        alert('Nothing. Tie\n You:✌️ \nMe:✌️')
        this.ties++;
      }
    }
  }
  
}

function play(playerMove) {
    game.playOneGame(playerMove);
    history.innerHTML = `Wins: ${game.wins}<br>Losses: ${game.losses}<br>Ties: ${game.ties}`;
    if(game.wins==10){
      noti.innerHTML= 'congratulations, you have won!';
      noti.classList.add('noti-onclick');
      return null;
    }
    else if(game.losses==10){
      noti.innerHTML= 'You have lost to the computer💻';
      noti.classList.add('noti-onclick');
      return null;
    }
}
let noti=document.querySelector('.noti');
let game = new Game();
let history=document.querySelector('.history');

let rock=document.querySelector('.rock-button');
let paper=document.querySelector('.paper-button');
let scissor=document.querySelector('.scissor-button');
rock.addEventListener('click', function(){play('Rock'); });
paper.addEventListener('click', function(){play('Paper'); });
scissor.addEventListener('click', function(){play('Scissor'); });
