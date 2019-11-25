import { combineReducers } from 'redux';

import TabNavigatorReducer from './TabNavigatorReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
  tabNavigatorPage: TabNavigatorReducer,
  settings: SettingsReducer
});
