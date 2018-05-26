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

let currentBack, currentFront;
let nextBack, nextFront;

function initialize() {
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

  back.style.backgroundImage = `url("./assets/back/${backGifs[nextBack]}")`;
  front.style.backgroundImage = `url("./assets/front/${frontGifs[nextFront]}")`;
}

window.onload = initialize();
document.addEventListener('click', changeGifs);
