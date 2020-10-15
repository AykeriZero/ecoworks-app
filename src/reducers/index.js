import { combineReducers } from 'redux';

import TabNavigatorReducer from './TabNavigatorReducer';
import TaskReducer from './TaskReducer';
import SettingsReducer from './SettingsReducer';

export default combineReducers({
  tabNavigatorPage: TabNavigatorReducer,
  settings: SettingsReducer,
  actionItems: TaskReducer
});
