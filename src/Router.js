import React from 'react';
import { Scene, Router } from 'react-native-router-flux';

import HomePage from './components/HomePage';
import ResourcesPage from './components/ResourcesPage';
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
      titleStyle={{ color: 'white' }, {fontFamily: 'Archer-Medium'}}
      headerTintColor='white'
    >

    <Scene
          key="tabbar"
          tabs
          tabBarStyle={{ backgroundColor: '#B1D56C' }}
          showLabel={false}
          titleStyle = {{fontFamily: 'Archer-Medium'}}
    >

      <Scene key="home" icon={getIcon('home')} titleStyle = {{fontFamily: 'Archer-Medium'}}>
        <Scene key="homePage" component={HomePage}  title="Home Page" titleStyle = {{fontFamily: 'Archer-Medium'}} backTitle = " "/>

        {/* Add Lesson Scenes to the home page so the back button returns to home */}
        {getLessonScenes()}
      </Scene>

      <Scene key="lessons" icon={getIcon('lessons')}>
        <Scene key="lessonsList" component={LessonsList} title="Eco Workbook" backTitle = " "/>
        {getLessonScenes()}
      </Scene>

      <Scene key="resources" icon={getIcon('resources')}>
        <Scene key="resourcesPage" component={ResourcesPage} title="Resources" />
      </Scene>

      <Scene key="settings" icon={getIcon('settings')}>
        <Scene key="settingsPage" component={SettingsPage} title="Settings" />
      </Scene>


    </Scene>

    </Scene>
  </Router>
);
const styles = {
textStyle: 'Archer-Medium'
};
export default RouterComponent;
