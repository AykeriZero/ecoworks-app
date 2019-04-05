import { combineReducers } from 'redux';

import SettingsReducer from './SettingsReducer';

export default combineReducers({
  settings: SettingsReducer
});

/*

{
settings: {
  language: 'english'
  }

tasks: {
  completed: ['check for air leaks', ... ]
  }
}
*/
