import React from 'react';
import { Image } from 'react-native';

const homeIcon = require('./highlighted-house.png');
const homeIconUnfocused = require('./house.png');
const lessonsIcon = require('./highlighted-lessons.png');
const lessonsIconUnfocused = require('./lessons.png');
const settingsIcon = require('./highlighted-settings.png');
const settingsIconUnfocused = require('./settings.png');
const resourcesIcon = require('./highlighted-resources.png');
const resourcesIconUnfocused = require('./resources.png');


const styles = {
  iconStyle: {
    width: '37%',
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
