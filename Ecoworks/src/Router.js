import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import HomePage from './components/HomePage';
import BillsPage from './components/BillsPage';
import getIcon from './components/TabIcon';
import { getLessonScenes } from './routes';
import LessonsList from './components/LessonsPage';
import SettingsPage from './components/SettingsPage';

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

        {/* Add Lesson Scenes to the home page so the back button returns to home */}
        {getLessonScenes()}
      </Scene>

      <Scene key="lessons" icon={getIcon('lessons')}>
        <Scene key="lessonsList" component={LessonsList} title="Eco Workbook" />
        {getLessonScenes()}
      </Scene>

      <Scene key="bills" icon={getIcon('bills')}>
        <Scene key="billsLesson" component={BillsPage} title="Bills" />
      </Scene>

      <Scene key="settings" icon={getIcon('settings')}>
        <Scene key="settingsPage" component={SettingsPage} title="Settings" />
      </Scene>


    </Scene>

    </Scene>
  </Router>
);

export default RouterComponent;
