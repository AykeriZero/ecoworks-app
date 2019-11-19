import {
  SETTINGS_LANGUAGE_UPDATE
} from '../actions/types';

// the default page should be home
const INITIAL_STATE = {
  language: 'english'
};

export default (state = INITIAL_STATE, action) => {
  // Redux Note: reducers return an object containing the last state with any
  //             state variables that might have changed
  //             TAB_NAVIGATOR_UPDATE does not return
  //             { ...state, page: action.payload } because page is the only
  //             object in state
  switch (action.type) {
    case SETTINGS_LANGUAGE_UPDATE:
      return {
        ...state,
        language: action.payload
      };
    default:
      return state;
  }
};
