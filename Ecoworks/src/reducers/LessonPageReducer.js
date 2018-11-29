
const INITIAL_STATE = {
  title: ''
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'UPDATE_LESSON_ITEM':
      return { ...state, [action.payload.prop]: action.payload.value };
    default:
      return state;
  }
};
