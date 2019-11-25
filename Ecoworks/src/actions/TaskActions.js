import {
    TASK_ACTION
  } from './types';
  
  export const TaskAction = (newList) => {
    return {
      type: TASK_ACTION,
      payload: newList
    };
  };
  