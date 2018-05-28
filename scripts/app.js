//
//
//--- VARIABLES ---//

// gif arrays generated with helpers, transpile later.
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

const frontGifsReloaded = [ 'alien.gif',
  'antler.gif',
  'avocados.gif',
  'bw-blob.gif',
  'cutting-knife.gif',
  'dancing-lady.gif',
  'disco.gif',
  'ditto.gif',
  'house-fire.gif',
  'icecream.gif',
  'lacroix.gif',
  'lava.gif',
  'melty-face.gif',
  'newish-laptop-lg.gif',
  'nyan-cat.gif',
  'palm-tree.gif',
  'pawns.gif',
  'pickle-rick.gif',
  'pillar.gif',
  'prism.gif',
  'rainbow-squiggle.gif',
  'rose.gif',
  'rotating-hand.gif',
  'skull.gif',
  'thinking-rotate.gif',
  'unicorn.gif',
  'unsalted.gif',
  'urchin.gif',
  'vcr-monitor.gif',
  'wavy-cup.gif',
  'wavywave.gif',
  'work-life-balance.gif' ];

const backGifsReloaded = [ 'aloe.gif',
  'black-cat.gif',
  'ca-flag.gif',
  'ok-hand.gif',
  'color-grid.gif',
  'cyperpunk-wallpaper.gif',
  'dolphin.gif',
  'flash-drive.gif',
  'hexagon-loop.gif',
  'ipod-classic.gif',
  'lacroix.gif',
  'meta-idk.gif',
  'money-stacks.gif',
  'norway.gif',
  'nyan-cat.gif',
  'pies.gif',
  'rolly-polly.gif',
  'rotating-cubes.gif',
  'spin-spin.gif',
  'thinking-fidget.gif',
  'trippy.gif' ];

let overlayShown = false;
let gifSetting = "classic";
let [frontGifs, backGifs] = [frontGifsClassic, backGifsClassic];

let frontLength = frontGifs.length;
let backLength = backGifs.length;

const back = document.getElementById('back-asset');
const front = document.getElementById('front-asset');
const audio = document.getElementById('audio');
const playBtn = document.getElementById('play-btn');
const muteBtn = document.getElementById('mute-btn');
const infoBtn = document.getElementById('info-btn');
const overlay = document.getElementById('info');
const classicBtn = document.getElementById('classic-btn');
const reloadedBtn = document.getElementById('reloaded-btn');
const errthangBtn = document.getElementById('errthang-btn');
const gifSettingBtns = document.querySelectorAll('.gifSettingBtn');

let currentBack, currentFront;
let nextBack, nextFront;

let gifTimeInterval = 4000; // milliseconds
let interval; // variabloe to store window.setInterval function

//
//
//--- FUNCTIONS ---//

function initialize() {
  changeGifs();
  interval = window.setInterval(changeGifs, gifTimeInterval);
}

function resetGifs() {
  changeGifs();
  window.clearInterval(interval);
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

  if (backGifsClassic.includes(backGifs[displayBack])) {
  back.style.backgroundImage = `url("./assets/back-classic/${backGifs[nextBack]}")`;
  } else {
  back.style.backgroundImage = `url("./assets/back-reloaded/${backGifs[nextBack]}")`;
  }

  if (frontGifsClassic.includes(frontGifs[displayFront])) {
  front.style.backgroundImage = `url("./assets/front-classic/${frontGifs[nextFront]}")`;
  } else {
  front.style.backgroundImage = `url("./assets/front-reloaded/${frontGifs[nextFront]}")`;
  }
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
  if (overlayShown === false) {
    overlayShown = true;
    infoBtn.innerHTML = "<i class='fas fa-times'></i>";
    overlay.style.display = "block";
  } else {
    overlayShown = false;
    infoBtn.innerHTML = "<i class='fas fa-question'></i>";
    overlay.style.display = "none";
  }
}

function handleGifButtonColor(type) {

  let upcasedType = type.charAt(0).toUpperCase() + type.slice(1);

  gifSettingBtns.forEach(btn => {
    if (btn.innerHTML === upcasedType) {
      btn.style.backgroundColor = "yellow";
    } else {
      btn.style.backgroundColor = "white";
    }
  });
}

function toggleGifSettings(type) {
  gifSetting = type;

  if (type === "classic") {
    frontGifs = frontGifsClassic;
    backGifs = backGifsClassic;
  } else if (type === "reloaded") {
    frontGifs = frontGifsReloaded;
    backGifs = backGifsReloaded;
  } else if (type === "errthang") {
    frontGifs = frontGifsClassic.concat(frontGifsReloaded);
    backGifs =backGifsClassic.concat(backGifsReloaded);
  }

  handleGifButtonColor(type);
  [frontLength, backLength] = [frontGifs.length, backGifs.length];
  resetGifs();
  toggleOverlay();
}

//
//
//--- INITIALIZE & HANDLE CLICKS ----//
document.querySelector("main").addEventListener('click', resetGifs);
window.onload = initialize();
