import {
  TODO_UPDATE
} from './types';

export const todoupdate = (i) => {
  return {
    type: TODO_UPDATE,
    index: i
  };
};
