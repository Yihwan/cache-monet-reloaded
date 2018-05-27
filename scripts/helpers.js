const fs = require('fs');
const backFilesClassic = './assets/back-classic/';
const frontFilesClassic = './assets/front-classic/';
const backFilesReloaded = './assets/back-reloaded/';
const frontFilesReloaded = './assets/front-reloaded/';

const backFilesArray = [];
const frontFilesArray = [];

fs.readdirSync(backFilesClassic).forEach((file) => {
  if (file !== '.DS_Store') {
    backFilesArray.push(file);
  }
});

fs.readdirSync(frontFilesClassic).forEach(file => {
  if (file !== '.DS_Store') {
    frontFilesArray.push(file);
  }
});
