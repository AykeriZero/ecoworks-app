import React from 'react';
import { Scene } from 'react-native-router-flux';

import LessonData from '../components/LessonsPage/Lessons';

import {
  LessonPage1,
  LessonPage4
} from '../components/LessonsPage/Pages';

// returns a list of lesson scenes
const getLessonScenes = () => (
  [
          <Scene
            key="lessonPage1"
            component={LessonPage1}
            title={LessonData[0].title}
          />,

          <Scene
            key="lessonPage4"
            component={LessonPage4}
            title={LessonData[3].title}
          />
  ]
);

export { getLessonScenes };
