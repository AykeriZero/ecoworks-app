<<<<<<< HEAD
import React from 'react';
import { Scene } from 'react-native-router-flux';

import LessonData from '../components/LessonsPage/Lessons';

import {
  LessonPage1,
  LessonPage2,
  LessonPage3,
  LessonPage4,
  LessonPage5,
  LessonPage6,
  LessonPage7,
  LessonPage8
} from '../components/LessonsPage/Pages';

// returns a list of lesson scenes
const getLessonScenes = () => (
  [
          <Scene
            key="lessonPage1"
            component={LessonPage1}
            title={LessonData[0].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage2"
            component={LessonPage2}
            title={LessonData[1].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage3"
            component={LessonPage3}
            title={LessonData[2].title}
            style = {styles.textStyles}
          />,
          <Scene
            key="lessonPage4"
            component={LessonPage4}
            title={LessonData[3].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage5"
            component={LessonPage5}
            title={LessonData[4].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage6"
            component={LessonPage6}
            title={LessonData[5].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage7"
            component={LessonPage7}
            title={LessonData[6].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage8"
            component={LessonPage8}
            title={LessonData[7].title}
            style = {styles.textStyles}
          />
  ]
);
const styles = {
textStyles: {
  fontFamily: 'Archer-Medium'
}
};
export { getLessonScenes };
=======
import React from 'react';
import { Scene } from 'react-native-router-flux';

import LessonData from '../components/LessonsPage/Lessons';

import {
  LessonPage1,
  LessonPage2,
  LessonPage3,
  LessonPage4,
  LessonPage5,
  LessonPage6,
  LessonPage7,
  LessonPage8
} from '../components/LessonsPage/Pages';

// returns a list of lesson scenes
const getLessonScenes = () => (
  [
          <Scene
            key="lessonPage1"
            component={LessonPage1}
            title={LessonData[0].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage2"
            component={LessonPage2}
            title={LessonData[1].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage3"
            component={LessonPage3}
            title={LessonData[2].title}
            style = {styles.textStyles}
          />,
          <Scene
            key="lessonPage4"
            component={LessonPage4}
            title={LessonData[3].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage5"
            component={LessonPage5}
            title={LessonData[4].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage6"
            component={LessonPage6}
            title={LessonData[5].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage7"
            component={LessonPage7}
            title={LessonData[6].title}
            style = {styles.textStyles}
          />,

          <Scene
            key="lessonPage8"
            component={LessonPage8}
            title={LessonData[7].title}
            style = {styles.textStyles}
          />
  ]
);
const styles = {
textStyles: {
  fontFamily: 'Archer-Medium'
}
};
export { getLessonScenes };
>>>>>>> 42a28d90d3cb9a1be3aea05c17604f1367b7eaf2
