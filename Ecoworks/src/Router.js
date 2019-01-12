import React from 'react';
//import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import PageofButtons from './components';
import LessonsList from './components/LessonsPage';

const RouterComponent = () => (
  <Router>
    <Scene key="root">

      <Scene key="pageOfButtons" component={PageofButtons} title="Page of Buttons" />
      <Scene key="lessonsList" component={LessonsList} title="Lessons" />


    </Scene>
  </Router>
);

export default RouterComponent;
