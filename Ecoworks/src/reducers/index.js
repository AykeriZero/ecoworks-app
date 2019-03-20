import { combineReducers } from 'redux';

import TabNavigatorReducer from './TabNavigatorReducer';
import TaskReducer from './TaskReducer';

export default combineReducers({
  tabNavigatorPage: TabNavigatorReducer,
  taskList: TaskReducer
});
