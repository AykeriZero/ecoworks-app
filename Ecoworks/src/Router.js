import React from 'react';
//import { View } from 'react-native';
import { Scene, Router } from 'react-native-router-flux';
import PageofButtons from './components';

const RouterComponent = () => (
  <Router>
    <Scene key="root">
    
      <Scene key="pageOfButtons" component={PageofButtons} title="Page of Buttons" />

    </Scene>
  </Router>
);

export default RouterComponent;
