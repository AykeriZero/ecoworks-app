import {
  TAB_NAVIGATOR_UPDATE
} from './types';

export const tabNavigatorUpdate = (page) => {
  return {
    type: TAB_NAVIGATOR_UPDATE,
    payload: page
  };
};
