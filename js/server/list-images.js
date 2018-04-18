const _ = require('lodash');
const dirTree = require('directory-tree');

const listImages = (directory, count) => {
  const imgDirObject = dirTree(directory);
  const imgs = 
      _.map(
        _.filter(imgDirObject.children, 'extension'), 'path');
  return _.take(imgs, count);
}
  
module.exports = listImages;
