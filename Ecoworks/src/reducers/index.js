import { combineReducers } from 'redux';
import LessonPageReducer from './LessonPageReducer';

export default combineReducers({
  lessonItem: LessonPageReducer
});
