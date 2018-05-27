//--- VARIABLES ---//

const frontGifsClassic = [ '14_4.gif',
  '40oz.gif',
  'bike.gif',
  'bird.gif',
  'blackcat.gif',
  'burger.gif',
  'cd.gif',
  'chill.gif',
  'chip.gif',
  'croak.gif',
  'cyberpunk.gif',
  'deer.gif',
  'disc.gif',
  'doge.gif',
  'donut.gif',
  'error.gif',
  'finish.gif',
  'flipphone.gif',
  'float.gif',
  'gucci.gif',
  'key.gif',
  'miley.gif',
  'n.gif',
  'nacho.gif',
  'palace.gif',
  'pepsi.gif',
  'pyramid.gif',
  'run.gif',
  'sadweb.gif',
  'shark.gif',
  'sharkcube.gif',
  'shiba.gif',
  'sink.gif',
  'sperm.gif',
  'stab.gif',
  'swinger.gif',
  'vhs.gif',
  'walkman.gif',
  'wifi.gif',
  'windowspaint.gif',
  'wolfwalk.gif'
];

const backGifsClassic = [
  'MoneyNotesFlying.gif',
  'aimrain.gif',
  'argentina.gif',
  'aus.gif',
  'blinds.gif',
  'boxes.gif',
  'bunnies.gif',
  'colorbox.gif',
  'cubes.gif',
  'drumstick.gif',
  'email.gif',
  'german.gif',
  'gif_cube.gif',
  'korea.gif',
  'link.gif',
  'mariocloud.gif',
  'netscap.gif',
  'norway.gif',
  'pc.gif',
  'point.gif',
  'squirm.gif',
  'taiwan.gif',
  'uk.gif',
  'us_left.gif',
  'walker.gif',
  'wave.gif',
  'winflag.gif',
  'wolf.gif',
  'xp.gif'
];

let overlayShown = false;
let gifSetting = "classic";
let [frontGifs, backGifs] = [frontGifsClassic, backGifsClassic];

const frontLength = frontGifs.length;
const backLength = backGifs.length;

const back = document.getElementById('back-asset');
const front = document.getElementById('front-asset');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const muteBtn = document.getElementById('mute-btn');
const infoBtn = document.getElementById('info-btn');
const overlay = document.getElementById('info');

let currentBack, currentFront;
let nextBack, nextFront;

let gifTimeInterval = 4000; // milliseconds
let interval; // variabloe to store window.setInterval function

//
//--- FUNCTIONS ---//

function initialize() {
  changeGifs();
  interval = window.setInterval(changeGifs, gifTimeInterval);
}

function changeGifs() {
  while (true) {
    nextBack = Math.floor(Math.random() * backLength);
    if (currentBack !== nextBack) break;
  }

  while (true) {
    nextFront = Math.floor(Math.random() * frontLength);
    if (currentFront !== nextFront) break;
  }

  [currentBack, currentFront] = [nextBack, nextFront];

  if (gifSetting !== "errthang") {
    displaySingleSetting();
  } else {
    displayDualSetting(nextBack, nextFront);
  }
}

function displaySingleSetting() {
  back.style.backgroundImage = `url("./assets/back-${gifSetting}/${backGifs[nextBack]}")`;
  front.style.backgroundImage = `url("./assets/front-${gifSetting}/${frontGifs[nextFront]}")`;
}

function displayDualSetting(displayBack, displayFront) {

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

document.querySelector("main").addEventListener('click', function() {
  changeGifs();

  window.clearInterval(interval);
  interval = window.setInterval(changeGifs, gifTimeInterval);
});
