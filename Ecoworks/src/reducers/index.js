import { combineReducers } from 'redux';

import TabNavigatorReducer from './TabNavigatorReducer';

export default combineReducers({
  tabNavigatorPage: TabNavigatorReducer
});
