import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';

class LessonItem extends Component {

  render() {
    return (
      <View>
        <Text>LessonItem</Text>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {

  };
}

export default connect(mapStateToProps, {

})(LessonItem);
