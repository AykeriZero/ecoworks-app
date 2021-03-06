import {
    TASK_ACTION
  } from '../actions/types';
  
  // the default page should be home
  const INITIAL_STATE = {
    actionItems: []
  };
  
  export default (state = INITIAL_STATE, action) => {
    // Redux Note: reducers return an object containing the last state with any
    //             state variables that might have changed
    //             TAB_NAVIGATOR_UPDATE does not return
    //             { ...state, page: action.payload } because page is the only
    //             object in state
    switch (action.type) {
      case TASK_ACTION:
        return {
        ...state,
          actionItems: action.payload
        };
      default:
        return state;
    }
  };
  