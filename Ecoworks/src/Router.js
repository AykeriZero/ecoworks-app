import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import HomePage from './components/HomePage';
import getIcon from './components/TabIcon';
import LessonsList from './components/LessonsPage';

import LessonData from './components/LessonsPage/Lessons';

import {
  LessonPage1,
  LessonPage4
} from './components/LessonsPage/Pages';

const RouterComponent = () => (
  <Router>
    <Scene
      key="root"
      hideNavBar
      navigationBarStyle={{ backgroundColor: '#B1D56C' }}
      titleStyle={{ color: 'white' }}
      headerTintColor='white'
    >

    <Scene
          key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#B1D56C' }}
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
            title={LessonData[0].title}
          />

          <Scene
            key="lessonPage4"
            component={LessonPage4}
            title={LessonData[3].title}
          />

      </Scene>

    </Scene>

    </Scene>
  </Router>
);

export default RouterComponent;
