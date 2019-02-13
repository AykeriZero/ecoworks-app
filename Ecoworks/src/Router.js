import React from 'react';
import { View, Text } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';

import HomePage from './components/homePage';
import { TabIcon } from './components/TabNavigator/TabButton';
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

      <Scene key="home" icon={TabIcon}>
        <Scene key="homePage" component={HomePage} title="Home Page" />
      </Scene>

      <Scene key="lessons" icon={TabIcon}>
        {/* TODO: Find some way to customize the title, possibly create custom
          component for rendering headers */}
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
