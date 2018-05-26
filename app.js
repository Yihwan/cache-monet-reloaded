const frontGifs = ['thinking.gif', 'windowspaint.gif', 'pepsi.gif', 'disc.gif', 'cyberpunk.gif'];
const backGifs = ['email.gif', 'norway.gif', 'blinds.gif', 'mariocloud.gif', 'xp.gif', 'colorbox.gif'];

const frontLength = frontGifs.length;
const backLength = backGifs.length;

function initialize() {
  window.setInterval(changeGifs, 4000);
}

function changeGifs() {
  let back = document.getElementById('back-asset');
  let front = document.getElementById('front-asset');

  let nextBack = Math.floor(Math.random() * backLength);
  let nextFront = Math.floor(Math.random() * frontLength);

  back.style.backgroundImage = `url("./assets/back/${backGifs[nextBack]}")`;
  front.style.backgroundImage = `url("./assets/front/${frontGifs[nextFront]}")`;
}

window.onload = initialize();
document.addEventListener('click', changeGifs);
