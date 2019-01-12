import React from 'react';
//import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import PageofButtons from './components';
import LessonsList from './components/LessonsPage';
import LessonsPage from './components/LessonsPage/Pages';

const RouterComponent = () => (
  <Router>
    <Scene key="root" hideNavBar>

      <Scene key="start">
        <Scene key="pageOfButtons" component={PageofButtons} title="Page of Buttons" />
      </Scene>

      <Scene key="lessons">
        {/* TODO: Find some way to customize the title, possibly create custom
          component for rendering headers */}
          <Scene key="lessonsList" component={LessonsList} title="Lessons" />
          <Scene key="lessonsPage" component={LessonsPage} title="Lesson Page" />
      </Scene>

    </Scene>
  </Router>
);

export default RouterComponent;
