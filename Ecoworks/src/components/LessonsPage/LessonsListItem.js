import React, { Component } from 'react';
import { Image, Text, TouchableWithoutFeedback, View } from 'react-native';
import { Actions } from 'react-native-router-flux';

import { Card, CardSection } from '../common';
import getImage from '../../pictures';

class LessonListItem extends Component {

  onRowPress() {
    // probably some redux thing to set the current lesson
    // then a router flux to change the page

    console.log('hello');
    Actions.lessonsPage({ lesson: this.props.item });
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={this.onRowPress.bind(this)}>
        <View>
          <Card>

            <CardSection>
              <Text style={styles.titleStyle}>
                {this.props.item.title}
              </Text>
            </CardSection>

            <CardSection>
              <Image
                style={styles.imageStyle}
                source={getImage(this.props.item.img)}
                resizeMode={'contain'}
              />
            </CardSection>

          </Card>
        </View>
      </TouchableWithoutFeedback>

    );
  }
}

const styles = {
  titleStyle: {
    fontSize: 18,
    paddingLeft: 15
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default LessonListItem;
