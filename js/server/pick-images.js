const _ = require('lodash');
const dirTree = require('directory-tree');

const pickImages = (directory) => {
  const imgDirObject = dirTree(directory);
  const imgList = imgDirObject.children;
  const imgShuffle = 
    _.shuffle(
      _.map(
        _.filter(imgList, 'extension'), 'path'));
  return _.take(imgShuffle, 5);
}
  
module.exports = pickImages;
