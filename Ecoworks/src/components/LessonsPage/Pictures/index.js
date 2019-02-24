const img1 = require('./lp1-chess.png');
const img2 = require('./2cover.jpeg');
const img3 = require('./3cover.jpeg');
const img4 = require('./4cover.jpeg');
const img5 = require('./5cover.jpeg');
const img6 = require('./airLeak.png'); //3 inside
const img7 = require('./furnace_graphic.jpeg'); //4 inside
const img8 = require('./Toilet.jpeg'); //5 inside

function getImage(image) {
  switch (image) {
    case 1:
      return img1;
    case 2:
      return img2;
    case 3:
      return img3;
    case 4:
      return img4;
    case 5:
      return img5;
    case 6:
      return img6;
    case 7:
      return img7;
    case 8:
      return img8;
    default:
      return img1;
  }
}

export default getImage;
