const frontGifs = ['thinking.gif', 'windowspaint.gif', 'pepsi.gif', 'disc.gif', 'cyberpunk.gif'];
const backGifs = ['email.gif', 'norway.gif', 'blinds.gif', 'mariocloud.gif', 'xp.gif', 'colorbox.gif'];

const frontLength = frontGifs.length;
const backLength = backGifs.length;

function initialize() {
  console.log('hi!');
  fs.readdirSync('./assets/back/').forEach(file => {
    console.log(file);
  });
}

function changeBack() {
  let back = document.getElementById('back-asset');
  let nextIdx = Math.floor(Math.random() * backLength);

  back.style.backgroundImage = `url("./assets/back/${backGifs[nextIdx]}")`;
}

function changeFront() {
  let front = document.getElementById('front-asset');
  let nextIdx = Math.floor(Math.random() * frontLength);

  front.style.backgroundImage = `url("./assets/front/${frontGifs[nextIdx]}")`;
}


window.onload = initialize();
