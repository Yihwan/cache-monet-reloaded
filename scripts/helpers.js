const fs = require('fs');
const backFilesClassic = './assets/back-classic/';
const frontFilesClassic = './assets/front-classic/';
const backFilesReloaded = './assets/back-reloaded/';
const frontFilesReloaded = './assets/front-reloaded/';

const bArr = [];
const fArr = [];

fs.readdirSync(backFilesReloaded).forEach((file) => {
  if (file !== '.DS_Store') {
    bArr.push(file);
  }
});

fs.readdirSync(frontFilesReloaded).forEach(file => {
  if (file !== '.DS_Store') {
    fArr.push(file);
  }
});
