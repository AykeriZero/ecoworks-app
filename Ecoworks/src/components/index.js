import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';

import { Button } from './common';

// Add Buttons to go to whatever page you need
class PageofButtons extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={() => { Actions.start(); }}>Test Text</Button>
        <Button onPress={() => { Actions.lessons(); }}>Lessons</Button>
      </View>
    );
  }
}

export default PageofButtons;
