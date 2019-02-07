import React, { Component } from 'react';
import { View } from 'react-native';

import { Actions } from 'react-native-router-flux';

import { connect } from 'react-redux';

import { TabButton } from './TabButton';

class TabNavigator extends Component {

  lesson() {
    if (this.props.page !== 'lessons') {
      Actions.lessons();
    }
  }

  home() {
    if (this.props.page !== 'home') {
      Actions.start();
    }
  }

  render() {
    return (
      <View style={styles.navigatorStyle}>

        <TabButton
          onPress={this.lesson.bind(this)}
          page={'lessons'}
          selected={this.props.page === 'lessons'}
        />

        <TabButton
          onPress={this.home.bind(this)}
          page={'home'}
          selected={this.props.page === 'home'}
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

const mapStateToProps = (state) => {
  return {
    page: state.tabNavigatorPage.page
  };
};

export default connect(mapStateToProps, {})(TabNavigator);
