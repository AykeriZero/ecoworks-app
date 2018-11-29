import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';

import { CardSection } from '../common';

class LessonListItem extends Component {

  onRowPress() {

  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text style={styles.titleStyle}>
              {this.props.item.title}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  }
};

export default LessonListItem;
