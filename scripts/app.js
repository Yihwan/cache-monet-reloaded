const frontGifs = [
  '14_4.gif',
  '40oz.gif',
  'bike.gif',
  'blackcat.gif',
  'burger.gif',
  'cd.gif',
  'chill.gif',
  'cyberpunk.gif',
  'disc.gif',
  'doge.gif',
  'donut.gif',
  'finish.gif',
  'float.gif',
  'nacho.gif',
  'pepsi.gif',
  'pyramid.gif',
  'run.gif',
  'shark.gif',
  'sharkcube.gif',
  'shiba.gif',
  'stab.gif',
  'swinger.gif',
  'thinking.gif',
  'vhs.gif',
  'walkman.gif',
  'windowspaint.gif' ];

const backGifs = [
  'MoneyNotesFlying.gif',
  'aimrain.gif',
  'blinds.gif',
  'boxes.gif',
  'bunnies.gif',
  'colorbox.gif',
  'cubes.gif',
  'drumstick.gif',
  'email.gif',
  'korea.gif',
  'mariocloud.gif',
  'norway.gif',
  'pc.gif',
  'us_left.gif',
  'walker.gif',
  'wave.gif',
  'winflag.gif',
  'xp.gif'
];

const frontLength = frontGifs.length;
const backLength = backGifs.length;

const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const muteBtn = document.getElementById('mute-btn');

const infoBtn = document.getElementById('info-btn');
let overlayShown = false;
const overlay = document.getElementById('info');

let currentBack, currentFront;
let nextBack, nextFront;

function initialize() {
  changeGifs();
  window.setInterval(changeGifs, 4000);
}

function changeGifs() {
  let back = document.getElementById('back-asset');
  let front = document.getElementById('front-asset');

  while (true) {
    nextBack = Math.floor(Math.random() * backLength);
    if (currentBack !== nextBack) break;
  }

  while (true) {
    nextFront = Math.floor(Math.random() * frontLength);
    if (currentFront !== nextFront) break;
  }

  [currentBack, currentFront] = [nextBack, nextFront];

  back.style.backgroundImage = `url("./assets/back-classic/${backGifs[nextBack]}")`;
  front.style.backgroundImage = `url("./assets/front-classic/${frontGifs[nextFront]}")`;
}

function pauseAudio() {
  audio.pause();
  playBtn.style.backgroundColor = "white";
  muteBtn.style.backgroundColor = "yellow";
}

function playAudio() {
  audio.play();

  if (![...playBtn.classList].includes('noanimation')) {
    playBtn.classList.add('noanimation');
  }

  playBtn.style.backgroundColor = "yellow";
  muteBtn.style.backgroundColor = "white";
}

function toggleOverlay() {

  if (overlayShown == false) {
    overlayShown = true;
    infoBtn.innerHTML = "<i class='fas fa-times'></i>";
    overlay.style.display = "block";
  } else {
    overlayShown = false;
    infoBtn.innerHTML = "<i class='fas fa-question'></i>";
    overlay.style.display = "none";
  }
}


window.onload = initialize();
document.querySelector("main").addEventListener('click', changeGifs);
