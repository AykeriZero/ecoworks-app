import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import HomePage from './components/homePage';
import getIcon from './components/TabIcon';
import LessonsList from './components/LessonsPage';

import {
  LessonPage1,
  LessonPage4
} from './components/LessonsPage/Pages';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>

    <Scene
          key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#FFFFFF' }}
          showLabel={false}
    >

      <Scene key="home" icon={getIcon('home')}>
        <Scene key="homePage" component={HomePage} title="Home Page" />
      </Scene>

      <Scene key="lessons" icon={getIcon('lessons')}>
          <Scene key="lessonsList" component={LessonsList} title="Lessons" />

          <Scene
            key="lessonPage1"
            component={LessonPage1}
            title="Lesson 1: Energy Smart"
          />

          <Scene
            key="lessonPage4"
            component={LessonPage4}
            title="Lesson 1: Energy Smart"
          />

      </Scene>

    </Scene>

    </Scene>
  </Router>
);

export default RouterComponent;
