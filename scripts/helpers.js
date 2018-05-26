const fs = require('fs');
const backFiles = './assets/back/';
const frontFiles = './assets/front/';

const backFilesArray = [];
const frontFilesArray = [];

fs.readdirSync(backFiles).forEach((file) => {
  if (file !== '.DS_Store') {
    backFilesArray.push(file);
  }
});

fs.readdirSync(frontFiles).forEach(file => {
  if (file !== '.DS_Store') {
    frontFilesArray.push(file);
  }
});
