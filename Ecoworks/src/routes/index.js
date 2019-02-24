import React from 'react';
import { Scene } from 'react-native-router-flux';

import LessonData from '../components/LessonsPage/Lessons';

import {
  LessonPage1,
  LessonPage2,
  LessonPage3,
  LessonPage4,
  LessonPage5
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
            key="lessonPage2"
            component={LessonPage2}
            title={LessonData[1].title}
          />,

          <Scene
            key="lessonPage3"
            component={LessonPage3}
            title={LessonData[2].title}
          />,
          <Scene
            key="lessonPage4"
            component={LessonPage4}
            title={LessonData[3].title}
          />,

          <Scene
            key="lessonPage5"
            component={LessonPage5}
            title={LessonData[4].title}
          />
  ]
);

export { getLessonScenes };
