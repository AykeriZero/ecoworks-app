import {
    REMOVE_TASK, ADD_TASK
  } from './types';
  
  export const TaskRemove = (arrin, i) => {
    return {
      type: REMOVE_TASK,
      payload: { arr: arrin, index: i }
    };
  };

  export const TaskAdd = (arrin, taskIn) => {
    return {
      type: ADD_TASK,
      payload: { arr: arrin, task: taskIn }
    };
  };
  
