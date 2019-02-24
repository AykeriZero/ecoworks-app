import React from 'react';
import { Image } from 'react-native';

const homeIcon = require('./homeIcon.png');
const homeIconUnfocused = require('./homeIconUnfocused.png');
const lessonsIcon = require('./lessonsIcon.png');
const lessonsIconUnfocused = require('./lessonsIconUnfocused.png');

const styles = {
  iconStyle: {
    width: '20%',
    height: '80%'
  }
};

const getImages = (focusIcon, defaultIcon, focused) => {
  if (focused) {
    return (
      <Image
        source={focusIcon}
        style={styles.iconStyle}
      />
    );
  }
  return (
    <Image
      source={defaultIcon}
      style={styles.iconStyle}
    />
  );
};

const getIcon = (page) => {
  switch (page) {

    case 'home':
      return (({ focused }) => {
        return getImages(homeIcon, homeIconUnfocused, focused);
      });

    case 'lessons':
      return (({ focused }) => {
        return getImages(lessonsIcon, lessonsIconUnfocused, focused);
      });

    default:
      return (({ focused }) => {
        return getImages(homeIcon, homeIcon, focused);
      });
  }
};

export default getIcon;