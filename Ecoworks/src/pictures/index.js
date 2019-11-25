const lesson1Chess = require('./energysmart.png');
const pictureMissing = require('./pictureMissing.png');
const img2 = require('./energydown.png');
const img3 = require('./airleakshouse.png');
const img4 = require('./housesystems.png');
const img5 = require('./watersystems.png');
const img6 = require('./airLeak.png'); //3 inside
const img7 = require('./furnace_graphic.jpeg'); //4 inside
const img8 = require('./Toilet.jpeg'); //5 inside
const img9 = require('./money.png'); //2 inside #1
const img10 = require('./triangle.png'); //2 inside #2
const img11 = require('./BlueTools.png');
const img12 = require('./Pink_Tools.png');
const img13 = require('./Red_Tools.png');
const img14 = require('./Green_Tools.png');
const img15 = require('./Brown_Tools.png');
const img16 = require('./lights.jpeg');


function getImage(image) {
  switch (image) {
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
    case 9:
      return img9;
    case 10:
      return img10;
    case 'lesson1Chess':
      return lesson1Chess;
    case 11:
      return img11;
    case 12:
      return img12;
    case 13:
      return img13;
    case 14:
      return img14;
    case 15:
      return img15;
    case 16:
      return img16;
    default:
      return pictureMissing;
  }
}

export default getImage;
