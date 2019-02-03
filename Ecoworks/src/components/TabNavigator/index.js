import React, { Component } from 'react';
import { View } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { TabButton } from './TabButton';

class TabNavigator extends Component {
  state = { selected: 'home' }

  componentWillMount() {
    this.setState({ selected: 'home' });
  }

  home() {
    if (this.state.selected !== 'home') {
      this.setState({ selected: 'home' });
      Actions.start();
    }
  }

  lessons() {
    if (this.state.selected !== 'lessons') {
      this.setState({ selected: 'lessons' });
      Actions.lessons();
    }
  }

  render() {
    console.log(this.state);
    return (
      <View style={styles.navigatorStyle}>

        <TabButton
          onPress={this.lessons.bind(this)}
          page={'lesson'}
          selected={this.state.selected === 'lessons'}
        />

        <TabButton
          onPress={this.home.bind(this)}
          page={'home'}
          selected={this.state.selected === 'home'}
        />

      </ View>
    );
  }
}

const styles = {
  navigatorStyle: {
    justifyContent: 'center',
    flexDirection: 'row'
  }
};

export default TabNavigator;
