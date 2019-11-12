import React from 'react';
import { Image } from 'react-native';

const homeIcon = require('./homeIcon.png');
const homeIconUnfocused = require('./homeIconUnfocused.png');
const lessonsIcon = require('./lessonsIcon.png');
const lessonsIconUnfocused = require('./lessonsIconUnfocused.png');
const settingsIcon = require('./settingsIcon.png');
const settingsIconUnfocused = require('./settingsIconUnfocused.png');
const resourcesIcon = require('./resourcesIcon.png');
const resourcesIconUnfocused = require('./resourcesIconUnfocused.png');


const styles = {
  iconStyle: {
    width: '30%',
    height: '70%'
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

    case 'settings':
      return (({ focused }) => {
        return getImages(settingsIcon, settingsIconUnfocused, focused);
      });

    case 'resources':
      return (({ focused }) => {
        return getImages(resourcesIcon, resourcesIconUnfocused, focused);
      });

    default:
      return (({ focused }) => {
        return getImages(homeIcon, homeIcon, focused);
      });
  }
};

export default getIcon;
