const lesson1Chess = require('./lesson1Chess.png');
const pictureMissing = require('./pictureMissing.png');

function getImage(image) {
  switch (image) {
    case 'lesson1Chess':
      return lesson1Chess;
    default:
      return pictureMissing;
  }
}

export default getImage;
