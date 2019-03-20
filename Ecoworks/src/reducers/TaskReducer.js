import {
    REMOVE_TASK, ADD_TASK
  } from '../actions/types';
  import data from './TodoTasks.json';


  const INITIAL_STATE = {
    arr: data.tasks
  };

  export default (state = INITIAL_STATE, action) => {
    // Redux Note: reducers return an object containing the last state with any
    //             state variables that might have changed
    //             TAB_NAVIGATOR_UPDATE does not return
    //             { ...state, page: action.payload } because page is the only
    //             object in state
    switch (action.type) {
      case REMOVE_TASK:
      {
      action.payload.arr.splice(action.payload.index, 1);
        return { arr: action.payload.arr };
      }
      case ADD_TASK:
      {
          action.payload.arr.push(action.payload.task);
          return { arr: action.payload.arr };
      }
      default:
        return state;
    }
  };
