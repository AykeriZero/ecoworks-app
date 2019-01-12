import React, { Component } from 'react';
import { View, Text, TouchableWithoutFeedback } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { CardSection } from '../common';

class LessonListItem extends Component {

  onRowPress() {
    // probably some redux thing to set the current lesson
    // then a router flux to change the page

    Actions.lessonsPage({ id: this.props.item.id });
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
