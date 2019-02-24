import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import HomePage from './components/HomePage';
import getIcon from './components/TabIcon';
import { getLessonScenes } from './routes';
import LessonsList from './components/LessonsPage';

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
        {getLessonScenes()}
      </Scene>

      <Scene key="lessons" icon={getIcon('lessons')}>
        <Scene key="lessonsList" component={LessonsList} title="Lessons" />
        {getLessonScenes()}
      </Scene>

    </Scene>

    </Scene>
  </Router>
);

export default RouterComponent;
