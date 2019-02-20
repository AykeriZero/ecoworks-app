import { TOGGLE_TODO
  } from '../actions/types';
  
  // the default page should be home
  const INITIAL_STATE = {
    todos: [
        {
          text: 'Consider using Redux',
          completed: true
        },
        {
          text: 'Keep all state in a single tree',
          completed: false
        }
      ]
  };
  
  export default (state = INITIAL_STATE, action) => {
    // Redux Note: reducers return an object containing the last state with any
    //             state variables that might have changed
    //             TAB_NAVIGATOR_UPDATE does not return
    //             { ...state, page: action.payload } because page is the only
    //             object in state
    switch (action.type) {
        case TOGGLE_TODO:
        return Object.assign({}, state, {
            todos: state.todos.map((todo, index) => {
              if (index === action.index) {
                return Object.assign({}, todo, {
                  completed: !todo.completed
                });
              }
              return todo;
            })
          });
      default:
        return state;
    }
  };
