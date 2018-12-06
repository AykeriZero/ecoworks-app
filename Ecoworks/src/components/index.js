import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';

import { Button } from './common';

// Add Buttons to go to whatever page you need
class PageofButtons extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={() => { Actions.pageOfButtons(); }}>Test Text</Button>
      </View>
    );
  }
}

export default PageofButtons;
