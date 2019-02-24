const img1 = require('./lp1-chess.png');
const img4 = require('./airLeak.png')

function getImage(image) {
  switch (image) {
    case 1:
      return img1;
    case 4:
      return img4;
    default:
      return img1;
  }
}

export default getImage;
