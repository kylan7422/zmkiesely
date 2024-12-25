class Game{
  constructor()
  {
    this.wins=0;
    this.losses=0;
    this.ties=0;
  }
  playOneGame(playerMove){
    if(playerMove=='Rock')
      {
        alert('Congratulation! You won\n You:✊ \nMe:✌️')
        this.wins++;
      }
    else if(playerMove=='Paper')
      {
        alert('Congratulation! You won\n You:🖐️ \nMe:✊')
        this.wins++;
      }
    else
    {
      alert('Congratulation! You won\n You:✌️ \nMe:🖐️')
      this.wins++;
    }
  }
  
}

function play(playerMove) {
    game.playOneGame(playerMove);
    history.innerHTML = `Wins: ${game.wins}<br>Losses: ${game.losses}<br>Ties: ${game.ties}`;
    if(game.wins==10){
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
scissor.addEventListener('click', function(){play('a'); });