

export const updateLessonItem = ({ prop, value }) => {
  return {
    type: 'UPDATE_LESSON_ITEM',
    payload: { prop, value }
  };
};
