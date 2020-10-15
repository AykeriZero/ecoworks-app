import {
  SETTINGS_LANGUAGE_UPDATE
} from './types';

export const settingsLanguageUpdate = (language) => {
  return {
    type: SETTINGS_LANGUAGE_UPDATE,
    payload: language
  };
};

// settingsLessonUpdate('english')
