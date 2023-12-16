function sound(src) {
  this.sound = document.createElement("audio");
  this.sound.src = src;
  this.sound.setAttribute("preload", "auto");
  this.sound.setAttribute("controls", "none");
  this.sound.style.display = "none";
  document.body.appendChild(this.sound);
  this.play = function(){
    this.sound.play();
  }
  this.stop = function(){
    this.sound.pause();
  }
} 

const gameLoopRate = 3000;

var sndSiren = new sound("snd/siren.mp3");

var sndGameLoop = new sound("snd/08 A Trader's Life.mp3");
//var sndEmuTheme = new sound("snd/emuTheme.mp3");

var mainLoopToggle = true;

var lTimer = setInterval(game_loop, gameLoopRate);

function game_loop()
{
  if(mainLoopToggle){
    sndGameLoop.play();
  }
}