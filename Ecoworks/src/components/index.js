import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { View } from 'react-native';

import { connect } from 'react-redux';
import { tabNavigatorUpdate } from '../actions';

import { Button } from './common';

// Add Buttons to go to whatever page you need
class PageofButtons extends Component {

  componentWillMount() {
    this.props.tabNavigatorUpdate('home');
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Button onPress={() => { Actions.start(); }}>Test Text</Button>
        <Button onPress={() => { Actions.lessons(); }}>Lessons</Button>
      </View>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

export default connect(mapStateToProps, { tabNavigatorUpdate })(PageofButtons);
